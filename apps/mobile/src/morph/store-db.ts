import type { EntrySchema } from "../database/schemas/types"
import type { EntryModel } from "../store/entry/types"

class StoreDbMorph {
  toEntrySchema(entry: EntryModel): EntrySchema {
    return entry
  }
}

export const storeDbMorph = new StoreDbMorph()
