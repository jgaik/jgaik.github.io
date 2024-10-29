import React from "react";
import { ContactSection, NavigationBar, ProjectsSection } from "./components";

export const App: React.FC = () => {
  return (
    <div>
      <NavigationBar />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
};
