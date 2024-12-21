import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./app.tsx";
import "./i18n.ts";
import "@yamori-design/styles/dist/global.css";
import "@yamori-design/styles/dist/components/button.css";
import "@yamori-design/styles/dist/components/link.css";
import "@yamori-design/styles/dist/components/select.css";
import "@yamori-design/styles/dist/components/separator.css";
import "@yamori-design/styles/dist/layouts/navigation-bar-layout.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
