import React from "react";
import { useTranslation } from "react-i18next";

export const HomeSection: React.FC = () => {
  const { t } = useTranslation(undefined, {
    keyPrefix: "homeSection",
  });

  return (
    <section id="home">
      <h3>{t("title")}</h3>
      <p>{t("subtitle")}</p>
    </section>
  );
};
