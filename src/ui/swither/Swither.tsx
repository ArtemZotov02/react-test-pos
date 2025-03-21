import { useState } from "react";
import style from "./style.module.scss";

type SwitherProps = {
  locales: Array<{ title: string; img: string }> | string[];
  handleLocaleChange: (option: string) => void;
  lang: string;
  t: (key: string) => string;
  isCurrency?: boolean;
};

export default function Swither({
  locales,
  handleLocaleChange,
  lang,
  t,
  isCurrency = false,
}: SwitherProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string>(lang);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
    handleLocaleChange(option);
  };

  return (
    <div className={style.dropdown}>
      <button onClick={toggleDropdown} className={style.dropdownButton}>
        <img
          src={`/${
            isCurrency ? `currency/${selectedOption.toLowerCase()}` : `languagesIcons/${lang}`
          }.svg`}
          alt={lang}
        />

        {isCurrency ? <p>{selectedOption}</p> : <p>{t(`${lang}`)}</p>}
      </button>
      {isOpen && (
        <ul className={style.dropdownList}>
          {locales.map((locale, key) => {
            const localeName =
              typeof locale === "string" ? locale : locale.title;
            return (
              <li
                onClick={() => handleSelect(localeName)}
                key={`${localeName}${key}`}
              >
                <img
                  src={`/${
                    isCurrency
                      ? `currency/${localeName.toLowerCase()}`
                      : `languagesIcons/${localeName}`
                  }.svg`}
                  alt={localeName}
                />
                <p>{t(`${localeName}`)}</p>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
