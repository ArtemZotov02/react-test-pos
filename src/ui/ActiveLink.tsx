import { useTranslation } from "react-i18next";
import { Link} from "react-router-dom";

interface ActiveLinkProps {
  href: string;
  children: React.ReactNode;
}
export default function ActiveLink({ href, children, ...props }:ActiveLinkProps) {
  const { i18n } = useTranslation();

  const defaultLang = i18n.language === i18n.options.fallbackLng[0] 
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

