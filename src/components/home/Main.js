import React from "react";
import ServiceSection from "../services/ServicesSection";

import Featured from "./Featured";
import About from "./About";

const Main = () => {
  return (
    <main id="main">
      <Featured />
      <About />
      <ServiceSection />
    </main>
  );
};

export default Main;
