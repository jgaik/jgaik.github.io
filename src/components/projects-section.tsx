import { useTranslation } from "react-i18next";
import { PAGE_ORIGIN } from "../constants";
import { Link, List } from "@yamori-design/react-components";

const PROJECTS_LIST_MAP: Record<
  string,
  Array<Record<"name" | "link" | "descriptionKey", string>>
> = {
  individual: [
    {
      name: "Yamori Design",
      link: PAGE_ORIGIN + "/yamori-design",
      descriptionKey: "yamoriDesign",
    },
    {
      name: "Local Chess",
      link: PAGE_ORIGIN + "/local-chess",
      descriptionKey: "localChess",
    },
  ],
  contributing: [
    {
      name: "PapuApp",
      link: "https://papu.app",
      descriptionKey: "papuApp",
    },
  ],
};

export const ProjectsSection: React.FC = () => {
  const { t } = useTranslation(undefined, { keyPrefix: "projectsSection" });

  return (
    <section id="projects" className="project-section">
      <h4>{t("title")}</h4>
      <List>
        {Object.entries(PROJECTS_LIST_MAP).map(([categoryKey, projects]) => (
          <List.Item key={categoryKey} label={t(categoryKey)} labelTag="h6">
            <List>
              {projects.map(({ name, link, descriptionKey }) => (
                <List.Item
                  key={name}
                  label={
                    <Link
                      href={link}
                      target={link.startsWith(PAGE_ORIGIN) ? "" : "_blank"}
                    >
                      {name}
                    </Link>
                  }
                >
                  <p>{t(`projectDescription.${descriptionKey}`)}</p>
                </List.Item>
              ))}
            </List>
          </List.Item>
        ))}
      </List>
    </section>
  );
};
