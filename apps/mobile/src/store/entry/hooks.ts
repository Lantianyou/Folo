import type { FeedViewType } from "@follow/constants"
import { useInfiniteQuery, useMutation, useQuery } from "@tanstack/react-query"
import { useCallback, useEffect } from "react"

import { useGeneralSettingKey } from "@/src/atoms/settings/general"

import { getEntry } from "./getter"
import { entrySyncServices, useEntryStore } from "./store"
import type { EntryModel, FetchEntriesProps } from "./types"

export const usePrefetchEntryDetail = (entryId: string) => {
  return useQuery({
    queryKey: ["entry", entryId],
    queryFn: () => entrySyncServices.fetchEntryDetail(entryId),
  })
}

const defaultSelector = (state: EntryModel) => state
export function useEntry(id: string): EntryModel | undefined
export function useEntry<T>(id: string, selector: (state: EntryModel) => T): T | undefined
export function useEntry(
  id: string,
  selector: (state: EntryModel) => EntryModel = defaultSelector,
) {
  return useEntryStore((state) => {
    const entry = state.data[id]
    if (!entry) return
    return selector(entry)
  })
}

