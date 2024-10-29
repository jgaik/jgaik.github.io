import { useTranslation } from "react-i18next";

const CONTACT_LINKS: Array<
  Record<"name" | "link" | "iconSource" | "caption", string>
> = [
  {
    name: "gmail",
    link: "mailto:jakub.gaik@gmail.com",
    iconSource:
      "https://upload.wikimedia.org/wikipedia/commons/7/7e/Gmail_icon_%282020%29.svg",
    caption: "jakub.gaik@gmail.com",
  },
  {
    name: "github",
    link: "https://github.com/jgaik",
    iconSource:
      "https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg",
    caption: "jgaik",
  },
  {
    name: "linkedin",
    link: "https://linkedin.com/in/jgaik",
    iconSource:
      "https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg",
    caption: "jgaik",
  },
  {
    name: "facebook",
    link: "https://facebook.com/jakub.gaik",
    iconSource:
      "https://upload.wikimedia.org/wikipedia/commons/b/b9/2023_Facebook_icon.svg",
    caption: "jakub.gaik",
  },
];

export const ContactSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="contact">
      <h4>{t("contact")}</h4>
      <address>
        <ul>
          {CONTACT_LINKS.map(({ name, link, iconSource, caption }) => (
            <li key="link">
              <a
                href={link}
                target="_blank"
                className={`contact-section__link contact-section__link--${name}`}
              >
                <img src={iconSource} />
                {caption}
              </a>
            </li>
          ))}
        </ul>
      </address>
    </section>
  );
};
