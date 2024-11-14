import React, { ElementRef, useLayoutEffect, useRef } from "react";
import {
  AboutMeSection,
  ContactSection,
  HomeSection,
  NavigationBar,
  ProjectsSection,
} from "./components";
import "./app.scss";

export const App: React.FC = () => {
  const contentRef = useRef<ElementRef<"div">>(null);
  const headerRef = useRef<ElementRef<typeof NavigationBar>>(null);

  useLayoutEffect(() => {
    if (!contentRef.current || !headerRef.current) return;

    contentRef.current.style.top = `${headerRef.current.clientHeight}px`;
  }, []);

  return (
    <>
      <NavigationBar ref={headerRef} />
      <div className="app-content" ref={contentRef}>
        <HomeSection />
        <AboutMeSection />
        <ProjectsSection />
        <ContactSection />
      </div>
    </>
  );
};
