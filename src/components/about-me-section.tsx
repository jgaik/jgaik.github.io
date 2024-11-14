import { Link } from "@yamori-design/react-components";
import React from "react";
import { Trans, useTranslation } from "react-i18next";

export const AboutMeSection: React.FC = () => {
  const { t, i18n } = useTranslation(undefined, {
    keyPrefix: "aboutMeSection",
  });

  return (
    <section id="about-me">
      <h4>{t("title")}</h4>
      <p>{t("introduction")}</p>
      <Trans
        parent="p"
        i18nKey="moreInfo"
        t={t}
        components={{
          a: (
            <Link
              href={`https://github.com/jgaik/jgaik/blob/main/resumes/${i18n.resolvedLanguage}.md`}
              target="_blank"
            />
          ),
        }}
      />
    </section>
  );
};
