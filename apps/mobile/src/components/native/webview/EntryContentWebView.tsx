import { Portal } from "@gorhom/portal"
import { useAtom } from "jotai"
import * as React from "react"
import { useEffect } from "react"
import { View } from "react-native"
import type { EntryModel } from "@/src/store/entry/types"

import { PlatformActivityIndicator } from "../../ui/loading/PlatformActivityIndicator"
import { sharedWebViewHeightAtom } from "./atom"
import { prepareEntryRenderWebView, SharedWebViewModule } from "./index"
import { NativeWebView } from "./native-webview"

type EntryContentWebViewProps = {
  entry: EntryModel
}

const setWebViewEntry = (entry: EntryModel) => {
  SharedWebViewModule.evaluateJavaScript(
    `setEntry(JSON.parse(${JSON.stringify(JSON.stringify(entry))}))`,
  )
}
export { setWebViewEntry as preloadWebViewEntry }

export function EntryContentWebView(props: EntryContentWebViewProps) {
  const [contentHeight, setContentHeight] = useAtom(sharedWebViewHeightAtom)

  const { entry } = props

  useEffect(() => {
    setWebViewEntry(entry)
  }, [entry])

  const onceRef = React.useRef(false)
  if (!onceRef.current) {
    onceRef.current = true
    prepareEntryRenderWebView()
  }

  return (
    <>
      <View
        style={{ height: contentHeight, transform: [{ translateY: 0 }] }}
        onLayout={() => {
          setWebViewEntry(entry)
        }}
      >
        <NativeWebView
          onContentHeightChange={(e) => {
            setContentHeight(e.nativeEvent.height)
          }}
        />
      </View>

      <Portal>
        {!entry.content && (
          <View className="absolute inset-0 items-center justify-center">
            <PlatformActivityIndicator />
          </View>
        )}
      </Portal>
    </>
  )
}
