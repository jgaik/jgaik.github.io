import Backend from "i18next-http-backend";
import { createI18n } from "@yamori-design/i18n";

export const i18n = createI18n({ plugins: [Backend] });
