import { Control } from "react-hook-form";

export interface AuthUser {
  user: string;
}
export interface AuthProps {
  onLoginSuccess: (userData: AuthUser) => void;
}

export interface SubmitData {
  username: string;
  email?: string;
  password: string;
}

export interface AuthBtns {
  login: string;
  registration: string;
}
export interface FormProps {
  control: Control<SubmitData>;
  isReg: boolean;
  authPlaceholders: AuthPlaceholders;
  authError: Fields;
}
export interface AuthPlaceholders {
  username: string;
  email?: string;
  password: string;
}
export interface AllFormError {
  userNotFound: string;
  wrongPass: string;
  userRegistered: string;
}
export interface Fields {
  login: string;
  email?: string;
  pass: string;
}
export interface AuthError {
  allForm: AllFormError;
  fields: Fields;
}

export interface IAuth {
  authMethods: string[];
  authBtns: AuthBtns;
  authPlaceholders: AuthPlaceholders;
  authError: AuthError;
}
