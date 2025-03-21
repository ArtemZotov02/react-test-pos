import { AuthUser } from "./Auth.types";

export interface ProfileProps {
  user: string; 
  setAuthUser: (user: AuthUser | null) => void; 
  data?: ProfileData
}
export interface ProfileData {
  logout: string
}
export interface IUser {
  id: string,
  email: string,
  password: string,
  username: string
 }
