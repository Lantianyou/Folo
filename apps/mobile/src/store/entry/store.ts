import { FeedViewType } from "@follow/constants"
import { readability } from "@follow/utils"
import { debounce } from "es-toolkit/compat"
import { fetch as expoFetch } from "expo/fetch"

import { apiClient } from "@/src/lib/api-fetch"
import { getCookie } from "@/src/lib/auth"
import { honoMorph } from "@/src/morph/hono"
import { storeDbMorph } from "@/src/morph/store-db"
import { EntryService } from "@/src/services/entry"

import { collectionActions } from "../collection/store"
import { feedActions } from "../feed/store"
import { createImmerSetter, createTransaction, createZustandStore } from "../internal/helper"
import { getSubscription } from "../subscription/getter"
import { getEntry } from "./getter"
import type { EntryModel, FetchEntriesProps } from "./types"
import { getEntriesParams } from "./utils"

type EntryId = string
type FeedId = string
type InboxId = string
type Category = string
type ListId = string

interface EntryState {
  data: Record<EntryId, EntryModel>
  entryIdByView: Record<FeedViewType, Set<EntryId>>
  entryIdByCategory: Record<Category, Set<EntryId>>
  entryIdByFeed: Record<FeedId, Set<EntryId>>
  entryIdByInbox: Record<InboxId, Set<EntryId>>
  entryIdByList: Record<ListId, Set<EntryId>>
  entryIdSet: Set<EntryId>
}

const defaultState: EntryState = {
  data: {},
  entryIdByView: {
    [FeedViewType.Articles]: new Set(),
    [FeedViewType.Audios]: new Set(),
    [FeedViewType.Notifications]: new Set(),
    [FeedViewType.Pictures]: new Set(),
    [FeedViewType.SocialMedia]: new Set(),
    [FeedViewType.Videos]: new Set(),
  },
  entryIdByCategory: {},
  entryIdByFeed: {},
  entryIdByInbox: {},
  entryIdByList: {},
  entryIdSet: new Set(),
}

export const useEntryStore = createZustandStore<EntryState>("entry")(() => defaultState)

const immerSet = createImmerSetter(useEntryStore)

class EntryActions {

  upsertManyInSession(entries: EntryModel[]) {
    if (entries.length === 0) return

    immerSet((draft) => {
      for (const entry of entries) {
        draft.entryIdSet.add(entry.id)
        draft.data[entry.id] = entry
      }
    })
  }

  async upsertMany(entries: EntryModel[]) {
    const tx = createTransaction()
    tx.store(() => {
      this.upsertManyInSession(entries)
    })

    tx.persist(() => {
      return EntryService.upsertMany(entries.map((e) => storeDbMorph.toEntrySchema(e)))
    })

    await tx.run()
  }

  updateEntryContentInSession({
    entryId,
    content,
    readabilityContent,
  }: {
    entryId: EntryId
    content?: string
    readabilityContent?: string
  }) {
    immerSet((draft) => {
      const entry = draft.data[entryId]
      if (!entry) return
      if (content) {
        entry.content = content
      }
      if (readabilityContent) {
        entry.readabilityContent = readabilityContent
      }
    })
  }

  async updateEntryContent({
    entryId,
    content,
    readabilityContent,
  }: {
    entryId: EntryId
    content?: string
    readabilityContent?: string
  }) {
    const tx = createTransaction()
    tx.store(() => {
      this.updateEntryContentInSession({ entryId, content, readabilityContent })
    })

    tx.persist(() => {
      if (content) {
        EntryService.patch({ id: entryId, content })
      }

      if (readabilityContent) {
        EntryService.patch({ id: entryId, readabilityContent })
      }
    })

    await tx.run()
  }
}

class EntrySyncServices {

  async fetchEntryDetail(entryId: EntryId) {
    const currentEntry = getEntry(entryId)
    const res = currentEntry?.inboxHandle
      ? await apiClient.entries.inbox.$get({ query: { id: entryId } })
      : await apiClient.entries.$get({ query: { id: entryId } })
    const entry = honoMorph.toEntry(res.data)
    if (!currentEntry && entry) {
      await entryActions.upsertMany([entry])
    } else if (entry?.content && currentEntry?.content !== entry.content) {
      await entryActions.updateEntryContent({ entryId, content: entry.content })
    }
    return entry
  }
}

export const entrySyncServices = new EntrySyncServices()
export const entryActions = new EntryActions()
