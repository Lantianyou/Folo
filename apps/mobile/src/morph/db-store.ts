import type { EntrySchema } from "../database/schemas/types"
import type { EntryModel } from "../store/entry/types"

class DbStoreMorph {

  toEntryModel(entry: EntrySchema): EntryModel {
    return entry
  }
}

export const dbStoreMorph = new DbStoreMorph()
