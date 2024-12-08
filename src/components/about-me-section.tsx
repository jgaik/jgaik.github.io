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
      {t("introduction")
        .split("\n")
        .map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      <h5>{t("resumeTitle")}</h5>
      <Trans
        parent="p"
        i18nKey="resumeInfo"
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
