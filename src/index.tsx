import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { I18nProvider } from "@yamori-design/i18n";
import { App } from "./app.tsx";
import { i18n } from "./i18n.ts";
import "@yamori-design/styles/dist/global.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <I18nProvider i18n={i18n}>
      <App />
    </I18nProvider>
  </StrictMode>
);
