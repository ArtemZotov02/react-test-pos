
import { IHeader } from "../../types/Header.types";
import Language from "../language/Language";
import ActiveLink from "../../ui/ActiveLink";
import style from "./style.module.scss";
import Swither from "../../ui/swither/Swither";

export default function Header({
  menu,
  currency,
}: IHeader) {

  return (
    <div className={style.headerSection}>
      <div className={style.header}>
        <div className={style.logo}></div>
        <ul className={style.nav}>
          {menu?.map((item, index) => (
            <li key={index}>
              <ActiveLink href={item.link}>{item.title}</ActiveLink>
            </li>
          ))}
        </ul>
        <div className={style.switches}>
        <Swither 
            locales={currency}
            handleLocaleChange={() => {}}
            lang="USD"
            t={(key: string) => key} 
            isCurrency={true} 
          />
          <Language />
        </div>
      </div>
    </div>
  );
}
