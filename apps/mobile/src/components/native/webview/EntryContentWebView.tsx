import { Portal } from "@gorhom/portal"
import { useAtom } from "jotai"
import * as React from "react"
import { useEffect } from "react"
import { View } from "react-native"

import { useUISettingKey } from "@/src/atoms/settings/ui"
import type { EntryModel } from "@/src/store/entry/types"

import { PlatformActivityIndicator } from "../../ui/loading/PlatformActivityIndicator"
import { sharedWebViewHeightAtom } from "./atom"
import { prepareEntryRenderWebView, SharedWebViewModule } from "./index"
import { NativeWebView } from "./native-webview"

type EntryContentWebViewProps = {
  entry: EntryModel
  noMedia?: boolean
}

const setWebViewEntry = (entry: EntryModel) => {
  SharedWebViewModule.evaluateJavaScript(
    `setEntry(JSON.parse(${JSON.stringify(JSON.stringify(entry))}))`,
  )
}
export { setWebViewEntry as preloadWebViewEntry }

const setNoMedia = (value: boolean) => {
  SharedWebViewModule.evaluateJavaScript(`setNoMedia(${value})`)
}

const setReaderRenderInlineStyle = (value: boolean) => {
  SharedWebViewModule.evaluateJavaScript(`setReaderRenderInlineStyle(${value})`)
}

export function EntryContentWebView(props: EntryContentWebViewProps) {
  const [contentHeight, setContentHeight] = useAtom(sharedWebViewHeightAtom)

  const readerRenderInlineStyle = useUISettingKey("readerRenderInlineStyle")
  const { entry, noMedia } = props

  const [mode, setMode] = React.useState<"normal" | "debug">("normal")

  useEffect(() => {
    setNoMedia(!!noMedia)
  }, [noMedia, mode])

  useEffect(() => {
    setReaderRenderInlineStyle(readerRenderInlineStyle)
  }, [readerRenderInlineStyle, mode])

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
        key={mode}
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
