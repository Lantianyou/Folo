import { PortalProvider } from "@gorhom/portal"

import { Pressable, View } from "react-native"
import Animated, { FadeIn, FadeOut } from "react-native-reanimated"
import { useSafeAreaInsets } from "react-native-safe-area-context"

import { BottomTabBarHeightContext } from "@/src/components/layouts/tabbar/contexts/BottomTabBarHeightContext"
import { SafeNavigationScrollView } from "@/src/components/layouts/views/SafeNavigationScrollView"
import { EntryContentWebView } from "@/src/components/native/webview/EntryContentWebView"
import { openLink } from "@/src/lib/native"
import type { NavigationControllerView } from "@/src/lib/navigation/types"
import { useEntry, usePrefetchEntryDetail } from "@/src/store/entry/hooks"

export const EntryDetailScreen: NavigationControllerView<{
  entryId: string
}> = ({ entryId }) => {
  usePrefetchEntryDetail(entryId)

  const entry = useEntry(entryId)

  const insets = useSafeAreaInsets()

  return (
    <PortalProvider>
      <BottomTabBarHeightContext.Provider value={insets.bottom}>
        <SafeNavigationScrollView
          automaticallyAdjustContentInsets={false}
          className="bg-system-background"
        >
          <View className="mt-3">{entry && <EntryContentWebView entry={entry} />}</View>
        </SafeNavigationScrollView>
      </BottomTabBarHeightContext.Provider>
    </PortalProvider>
  )
}
