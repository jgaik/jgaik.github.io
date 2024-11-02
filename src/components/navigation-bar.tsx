import {
  LanguageSelect,
  Link,
  ThemeSelect,
} from "@yamori-design/react-components";
import { useTranslation } from "react-i18next";

const NAV_LINKS_MAP: Record<string, string> = {
  home: "top",
  projects: "projects",
  contact: "contact",
};

export const NavigationBar: React.FC = () => {
  const { t, i18n } = useTranslation();

  return (
    <header>
      <nav>
        <ul>
          {Object.entries(NAV_LINKS_MAP).map(([key, id]) => (
            <li key={key}>
              <Link href={`#${id}`}>{t(key)}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <ThemeSelect />
      <LanguageSelect
        supportedLanguages={["en", "ja"]}
        onChange={i18n.changeLanguage}
      />
    </header>
  );
};
