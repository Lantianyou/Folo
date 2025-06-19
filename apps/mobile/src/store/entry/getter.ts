import { FeedViewType } from "@follow/constants"

import type { SelectedFeed, SelectedTimeline } from "@/src/modules/screen/atoms"

import { getSubscriptionByCategory } from "../subscription/getter"
import { useEntryStore } from "./store"
import type { EntryModel, FetchEntriesProps } from "./types"
import { FEED_COLLECTION_LIST } from "./utils"

const get = useEntryStore.getState

export const getEntry = (id: string): EntryModel | undefined => {
  return get().data[id]
}
