import style from "./style.module.scss";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import Swither from "../../ui/swither/Swither";

export default function Language() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { lang } = useParams();
  const { i18n, t } = useTranslation();
  const locales = i18n.options.supportedLngs.filter(item => item !== 'cimode')
  const defaultLang = i18n.options.fallbackLng[0];


  const handleLocaleChange = (localeName: string) => {
    if (localeName === lang) return;
    const newPath = pathname.replace(`/${i18n.language}`, "");

    if (newPath === "") {
      navigate("/", {
        replace: true,
      });
    } else {
      navigate(
        `${localeName === defaultLang ? "" : `/${localeName}`}${
          newPath === "/" ? "" : newPath
        }`,
        {
          replace: true,
        }
      );
    }
  };

  useEffect(() => {
    if (lang && lang !== i18n.language) {
      i18n.changeLanguage(lang);
    } else if (!lang && i18n.language !== defaultLang) {
      i18n.changeLanguage(defaultLang);
    }
  }, [lang, i18n, defaultLang]);

  return (
    <div className={style.language}>
      <Swither locales={locales} handleLocaleChange={handleLocaleChange} lang={i18n.language} t={t}/>
    </div>
  );
}
