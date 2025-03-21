import { FC } from "react";
import Header from "../header/Header";
import { LayoutProps } from "../../types/Header.types";
import '../../index.css'

const Layout: FC<LayoutProps> = ({ children, data }) => {
  return (
    <div className="container">
      <Header {...(data || { menu: [], currency: [] })}/>
      {children}
    </div>
  );
};

export default Layout;
