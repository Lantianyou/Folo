import type { EntryModel } from "../store/entry/types"
import type { MeModel } from "../store/user/store"
import type { HonoApiClient } from "./types"

class Morph {

  toEntry(data?: HonoApiClient.Entry_Get | HonoApiClient.Entry_Inbox_Get): EntryModel | null {
    if (!data) return null

    return {
      id: data.entries.id,
      title: data.entries.title,
      content: data.entries.content,
    }
  }

  toUser(data: HonoApiClient.User_Get, isMe?: boolean): MeModel {
    return {
      id: data.id,
      name: data.name,
      email: data.email,
      handle: data.handle,
      image: data.image,
      isMe: isMe ? 1 : 0,
      emailVerified: data.emailVerified,
      twoFactorEnabled: data.twoFactorEnabled,
    }
  }
}

export const honoMorph = new Morph()
