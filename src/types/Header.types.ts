import { ReactNode } from "react";

export interface MenuItem {
  title: string;
  link: string;
}

export interface IHeader {
  menu: MenuItem[];
  currency: string[];
}

export interface LayoutProps {
  children: ReactNode;
  data: IHeader | undefined
}