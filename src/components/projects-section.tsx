import { useTranslation } from "react-i18next";
import { PAGE_ORIGIN } from "../constants";
import { Link } from "@yamori-design/react-components";

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
  ],
  collaborative: [
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
    <article id="projects">
      <h4>{t("title")}</h4>
      <ul>
        {Object.entries(PROJECTS_LIST_MAP).map(([categoryKey, projects]) => (
          <li key={categoryKey}>
            <h6>{t(categoryKey)}</h6>
            <ul>
              {projects.map(({ name, link, descriptionKey }) => (
                <li key="name">
                  <Link href={link} target="_blank">
                    {name}
                  </Link>
                  <p>{t(`projectDescription.${descriptionKey}`)}</p>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </article>
  );
};
