import { FeedViewType } from "@follow/constants"
import { PortalProvider } from "@gorhom/portal"
import { atom } from "jotai"
import { useEffect, useMemo } from "react"
import { Pressable, Text, View } from "react-native"
import Animated, { FadeIn, FadeOut } from "react-native-reanimated"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { useColor } from "react-native-uikit-colors"

import { BottomTabBarHeightContext } from "@/src/components/layouts/tabbar/contexts/BottomTabBarHeightContext"
import { SafeNavigationScrollView } from "@/src/components/layouts/views/SafeNavigationScrollView"
import { EntryContentWebView } from "@/src/components/native/webview/EntryContentWebView"
import { RelativeDateTime } from "@/src/components/ui/datetime/RelativeDateTime"
import { FeedIcon } from "@/src/components/ui/icon/feed-icon"
import { CalendarTimeAddCuteReIcon } from "@/src/icons/calendar_time_add_cute_re"
import { openLink } from "@/src/lib/native"
import type { NavigationControllerView } from "@/src/lib/navigation/types"
import { EntryContentContext } from "@/src/modules/entry-content/ctx"
import { EntryAISummary } from "@/src/modules/entry-content/EntryAISummary"
import { useEntry, usePrefetchEntryDetail } from "@/src/store/entry/hooks"
import { entrySyncServices } from "@/src/store/entry/store"
import { useFeed } from "@/src/store/feed/hooks"
import { usePrefetchEntryTranslation } from "@/src/store/translation/hooks"
import { useAutoMarkAsRead } from "@/src/store/unread/hooks"

import { EntrySocialTitle, EntryTitle } from "../../../../modules/entry-content/EntryTitle"

export const EntryDetailScreen: NavigationControllerView<{
  entryId: string
  view: FeedViewType
}> = ({ entryId, view: viewType }) => {
  usePrefetchEntryDetail(entryId)
  usePrefetchEntryTranslation([entryId], true)
  useAutoMarkAsRead(entryId)
  const entry = useEntry(entryId)

  const insets = useSafeAreaInsets()
  const ctxValue = useMemo(
    () => ({
      showAISummaryAtom: atom(entry?.settings?.summary || false),
      showAITranslationAtom: atom(!!entry?.settings?.translation || false),
      showReadabilityAtom: atom(entry?.settings?.readability || false),
    }),
    [entry?.settings?.readability, entry?.settings?.summary, entry?.settings?.translation],
  )

  useEffect(() => {
    if (entry?.settings?.readability) {
      entrySyncServices.fetchEntryReadabilityContent(entryId)
    }
  }, [entry?.settings?.readability, entryId])

  return (
    <EntryContentContext.Provider value={ctxValue}>
      <PortalProvider>
        <BottomTabBarHeightContext.Provider value={insets.bottom}>
          <SafeNavigationScrollView
            automaticallyAdjustContentInsets={false}
            className="bg-system-background"
          >
            <Pressable onPress={() => entry?.url && openLink(entry.url)} className="relative py-4">
              {({ pressed }) => (
                <>
                  {pressed && (
                    <Animated.View
                      entering={FadeIn}
                      exiting={FadeOut}
                      className={"bg-system-fill absolute inset-x-1 inset-y-0 rounded-xl"}
                    />
                  )}
                  {viewType === FeedViewType.SocialMedia ? (
                    <EntrySocialTitle entryId={entryId as string} />
                  ) : (
                    <>
                      <EntryTitle title={entry?.title || ""} entryId={entryId as string} />
                      <EntryInfo entryId={entryId as string} />
                    </>
                  )}
                </>
              )}
            </Pressable>
            <EntryAISummary entryId={entryId as string} />

            <View className="mt-3">{entry && <EntryContentWebView entry={entry} />}</View>

            {viewType === FeedViewType.SocialMedia && (
              <View className="mt-2">
                <EntryInfoSocial entryId={entryId as string} />
              </View>
            )}
          </SafeNavigationScrollView>
        </BottomTabBarHeightContext.Provider>
      </PortalProvider>
    </EntryContentContext.Provider>
  )
}

const EntryInfo = ({ entryId }: { entryId: string }) => {
  const entry = useEntry(entryId)
  const feed = useFeed(entry?.feedId)
  const secondaryLabelColor = useColor("secondaryLabel")

  if (!entry) return null

  const { publishedAt } = entry

  return (
    <View className="mt-4 flex flex-row items-center gap-4 px-4">
      {feed && (
        <View className="flex shrink flex-row items-center gap-2">
          <FeedIcon feed={feed} />
          <Text className="text-label shrink text-sm font-medium leading-tight" numberOfLines={1}>
            {feed.title?.trim()}
          </Text>
        </View>
      )}
      <View className="flex flex-row items-center gap-1">
        <CalendarTimeAddCuteReIcon width={16} height={16} color={secondaryLabelColor} />
        <RelativeDateTime
          date={publishedAt}
          className="text-secondary-label text-sm leading-tight"
        />
      </View>
    </View>
  )
}

const EntryInfoSocial = ({ entryId }: { entryId: string }) => {
  const entry = useEntry(entryId)

  if (!entry) return null
  const { publishedAt } = entry
  return (
    <View className="mt-3 px-4">
      <Text className="text-secondary-label">
        {publishedAt.toLocaleString("en-US", { dateStyle: "medium", timeStyle: "short" })}
      </Text>
    </View>
  )
}
