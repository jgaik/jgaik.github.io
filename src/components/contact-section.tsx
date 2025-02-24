import { useTranslation } from "react-i18next";
import { Link, List } from "@yamori-design/react-components";

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

const ContactSectionLink: React.FC<(typeof CONTACT_LINKS)[number]> = ({
  name,
  link,
  iconSource,
  caption,
}) => {
  return (
    <Link href={link} target="_blank" id={name.toLowerCase()} title={name}>
      <img src={iconSource} alt={name} />
      {caption}
    </Link>
  );
};

export const ContactSection: React.FC = () => {
  const { t } = useTranslation(undefined, { keyPrefix: "contactSection" });

  return (
    <section id="contact">
      <h4>{t("title")}</h4>
      <address>
        <List>
          {CONTACT_LINKS.map((contactLink) => (
            <List.Item
              label={<ContactSectionLink {...contactLink} />}
              key={contactLink.name}
            />
          ))}
        </List>
      </address>
    </section>
  );
};
