import React from "react";
import About from "./aboutUs/page";
import Portfolio from "./projects/page";
import Services from "./services/page";
import Team from "./team/page";
import Home from "./home/page";
import Contact from "./contact/page";

export default function Page() {
  return (
    <>
      <Home />
      <About />
      <Services />
      <Portfolio/>
      <Contact/>
      <Team />

    </>
  );
};
