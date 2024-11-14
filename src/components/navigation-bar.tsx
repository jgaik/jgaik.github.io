import {
  LanguageSelect,
  Link,
  Separator,
  ThemeSelect,
} from "@yamori-design/react-components";
import { ElementRef, forwardRef } from "react";
import { useTranslation } from "react-i18next";
import { HomeIcon } from "@yamori-design/icons";
import "./navigation-bar.scss";

const NAV_LINKS_MAP: Record<string, string> = {
  aboutMeSection: "about-me",
  projectsSection: "projects",
  contactSection: "contact",
};

export const NavigationBar = forwardRef<ElementRef<"header">>((_, ref) => {
  const { t, i18n } = useTranslation();

  return (
    <header className="navigation-bar" ref={ref}>
      <nav>
        <ul>
          <li>
            <Link href="#home">
              <HomeIcon />
            </Link>
          </li>
          {Object.entries(NAV_LINKS_MAP).map(([key, id]) => (
            <li key={key}>
              <Link href={`#${id}`}>{t(`${key}.title`)}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <ThemeSelect />
      <LanguageSelect
        supportedLanguages={["en", "ja"]}
        onChange={i18n.changeLanguage}
      />
      <Separator />
    </header>
  );
});
