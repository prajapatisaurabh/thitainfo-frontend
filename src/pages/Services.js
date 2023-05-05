import React from "react";

import ServicesSection from "../components/services/ServicesSection";
import Skill from "../components/skills/Skill";

const Services = () => (
  <main id="main">
    <section id="breadcrumbs" className="breadcrumbs">
      <div className="container">
        <ol>
          <li>
            <a href="index.html">Home</a>
          </li>
          <li>Services</li>
        </ol>
      </div>
    </section>

    <ServicesSection />
    <Skill />
  </main>
);

export default Services;
