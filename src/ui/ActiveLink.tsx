import { useTranslation } from "react-i18next";
import { Link} from "react-router-dom";

interface ActiveLinkProps {
  href: string;
  children: React.ReactNode;
}
export default function ActiveLink({ href, children, ...props }:ActiveLinkProps) {
  const { i18n } = useTranslation();

  const fallbackLng =
    typeof i18n.options.fallbackLng === "string"
      ? i18n.options.fallbackLng
      : Array.isArray(i18n.options.fallbackLng)
      ? i18n.options.fallbackLng[0]
      : "en"; 

  const defaultLang = i18n.language === fallbackLng;

  const parseHref = () => {
    if (href === '/') {
      return defaultLang ? href : `/${i18n.language}`;
    }else {
      return `${defaultLang ? '' : `/${i18n.language}`}${href}`;
    }
  };

  return (
    <Link to={parseHref()} {...props}>
      {children}
    </Link>
  );
}

