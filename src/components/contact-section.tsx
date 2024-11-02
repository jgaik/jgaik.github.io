import { useTranslation } from "react-i18next";
import { BemClassNamesCreator, Link } from "@yamori-design/react-components";
import "./contact-section.scss";
import { useMemo } from "react";

const CONTACT_LINKS: Array<
  Record<"name" | "link" | "iconSource" | "caption", string>
> = [
  {
    name: "Gmail",
    link: "mailto:jakub.gaik@gmail.com",
    iconSource:
      "https://upload.wikimedia.org/wikipedia/commons/7/7e/Gmail_icon_%282020%29.svg",
    caption: "jakub.gaik@gmail.com",
  },
  {
    name: "GitHub",
    link: "https://github.com/jgaik",
    iconSource:
      "https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg",
    caption: "jgaik",
  },
  {
    name: "LinkedIn",
    link: "https://linkedin.com/in/jgaik",
    iconSource:
      "https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg",
    caption: "jgaik",
  },
  {
    name: "Facebook",
    link: "https://facebook.com/jakub.gaik",
    iconSource:
      "https://upload.wikimedia.org/wikipedia/commons/b/b9/2023_Facebook_icon.svg",
    caption: "jakub.gaik",
  },
];

const ContactSectionLink: React.FC<
  (typeof CONTACT_LINKS)[number] & { className: string }
> = ({ name, link, iconSource, caption, className }) => {
  const bemClassNames = useMemo(
    () =>
      BemClassNamesCreator.create(
        [
          "contact-section-link",
          {
            [name.toLowerCase()]: true,
          },
        ],
        className
      ),
    [name, className]
  );

  return (
    <Link
      href={link}
      target="_blank"
      className={bemClassNames["contact-section-link"]}
    >
      <img src={iconSource} alt={name} />
      {`${name}: ${caption}`}
    </Link>
  );
};

export const ContactSection: React.FC = () => {
  const { t } = useTranslation();

  const bemClassNames = useMemo(
    () =>
      BemClassNamesCreator.create("contact-section", undefined, "list", "link"),
    []
  );

  return (
    <section id="contact" className={bemClassNames["contact-section"]}>
      <h4>{t("contact")}</h4>
      <address>
        <ul className={bemClassNames["list"]}>
          {CONTACT_LINKS.map((contactLink) => (
            <li key={contactLink.name}>
              <ContactSectionLink
                {...contactLink}
                className={bemClassNames["link"]}
              />
            </li>
          ))}
        </ul>
      </address>
    </section>
  );
};
