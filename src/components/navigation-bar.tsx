import { useTranslation } from "react-i18next";

const NAV_LINKS_MAP: Record<string, string> = {
  home: "top",
  projects: "projects",
  contact: "contact",
};

export const NavigationBar: React.FC = () => {
  const { t } = useTranslation();

  return (
    <nav>
      <ul>
        {Object.entries(NAV_LINKS_MAP).map(([key, id]) => (
          <li key={key}>
            <a href={`#${id}`}>{t(key)}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
