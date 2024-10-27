import { useTranslation } from "react-i18next";

export const NavigationBar: React.FC = () => {
  const { t } = useTranslation();
  return (
    <nav>
      <ul>
        <li>
          <a href={location.origin + "#top"}>{t("home")}</a>
        </li>
        <li>
          <a href={location.origin + "#projects"}>{t("projects")}</a>
        </li>
        <li>
          <a href={location.origin + "#contact"}>{t("contact")}</a>
        </li>
      </ul>
    </nav>
  );
};
