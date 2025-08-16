import { useTranslation } from "react-i18next";
import { PAGE_ORIGIN } from "../constants";
import { Link, List } from "@yamori-design/react-components";

const PROJECTS_LIST: Array<Record<"name" | "link" | "descriptionKey", string>> =
  [
    {
      name: "Yamori Design",
      link: PAGE_ORIGIN + "/yamori-design/",
      descriptionKey: "yamoriDesign",
    },
    {
      name: "Local Chess",
      link: PAGE_ORIGIN + "/local-chess/",
      descriptionKey: "localChess",
    },
    {
      name: "Issued Recipes",
      link: PAGE_ORIGIN + "/issued-recipes/",
      descriptionKey: "issuedRecipes",
    },
    {
      name: "DSA Solutions",
      link: PAGE_ORIGIN + "/dsa-solutions/",
      descriptionKey: "dsaSolutions",
    },
    {
      name: "Daily Goals Tracker",
      link: PAGE_ORIGIN + "/daily-goals-tracker/",
      descriptionKey: "dailyGoalsTracker",
    },
  ];

export const ProjectsSection: React.FC = () => {
  const { t } = useTranslation(undefined, { keyPrefix: "projectsSection" });

  return (
    <section id="projects" className="project-section">
      <h4>{t("title")}</h4>
      <List bulleted>
        {PROJECTS_LIST.map(({ name, link, descriptionKey }) => (
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
    </section>
  );
};
