import React from "react";
import {
  AboutMeSection,
  ContactSection,
  HomeSection,
  ProjectsSection,
} from "./components";
import {
  NavigationBarLayout,
  NavigationBarLayoutProps,
} from "@yamori-design/react-components";
import { useTranslation } from "react-i18next";
import { useLanguage } from "@yamori-design/i18n";
import "./app.scss";

const NAV_LINKS_MAP: Record<string, string> = {
  aboutMeSection: "about-me",
  projectsSection: "projects",
  contactSection: "contact",
};

const SUPPORTED_LANGUAGES = ["en", "ja"];

export const App: React.FC = () => {
  const { t } = useTranslation();
  const { language, setLanguage } = useLanguage();

  const links = Object.entries(NAV_LINKS_MAP).map<
    NonNullable<NavigationBarLayoutProps["links"]>[number]
  >(([key, id]) => ({
    href: `#${id}`,
    children: t(`${key}.title`),
  }));

  return (
    <NavigationBarLayout
      className="app"
      languageSelectProps={{
        supportedLanguages: SUPPORTED_LANGUAGES,
        value: language,
        onChange: setLanguage,
      }}
      links={links}
      homeHref="#home"
      githubHref="https://github.com/jgaik/jgaik.github.io"
    >
      <HomeSection />
      <AboutMeSection />
      <ProjectsSection />
      <ContactSection />
    </NavigationBarLayout>
  );
};
