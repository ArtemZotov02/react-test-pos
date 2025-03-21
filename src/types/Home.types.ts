import { IHeader } from "./Header.types"

export interface IHome {
  lang: string,
  header: IHeader,
  profile: {
    logout: string
  }
}