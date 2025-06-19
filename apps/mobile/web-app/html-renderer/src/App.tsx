import { createStore, Provider, useAtomValue } from "jotai"

import type { EntryModel } from "../types"
import { entryAtom, noMediaAtom, readerRenderInlineStyleAtom } from "./atoms"
import { HTML } from "./HTML"

const store = createStore()

Object.assign(window, {
  setEntry(entry: EntryModel) {
    store.set(entryAtom, entry)
    bridge.measure()
  },
  setNoMedia(value: boolean) {
    store.set(noMediaAtom, value)
  },
  reset() {
    store.set(entryAtom, null)
    bridge.measure()
  },
})

export const App = () => {
  const entry = useAtomValue(entryAtom, { store })
  const readerRenderInlineStyle = useAtomValue(readerRenderInlineStyleAtom, { store })
  const noMedia = useAtomValue(noMediaAtom, { store })

  return (
    <Provider store={store}>
      <HTML
        children={entry?.content}
        renderInlineStyle={readerRenderInlineStyle}
        noMedia={noMedia}
      />
    </Provider>
  )
}
