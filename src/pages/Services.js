import React from "react";
import { ProgressBar } from "react-bootstrap";
import ServicesSection from "../components/services/ServicesSection";

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
        <h2>Services</h2>
      </div>
    </section>

    <ServicesSection />

    <section id="skills" className="skills">
      <div className="container">
        <div className="section-title">
          <h2>Our Skills</h2>
          <p>Blow chart represent our mastery</p>
        </div>

        <div className="row">
          <div className="col-lg-6">
            <img src="assets/img/skills-img.jpg" className="img-fluid" alt="" />
          </div>
          <div className="col-lg-6 pt-4 pt-lg-0 content">
            <h3>Based on our last project</h3>
            <div className="skills-content">
              <div className="progress">
                <span className="skill">
                  JAVA, C# <i className="val">90%</i>
                </span>
                <ProgressBar animated now={90}></ProgressBar>
              </div>

              <div className="progress">
                <span className="skill">
                  SPRING BOOT, C# MVC <i className="val">90%</i>
                </span>
                <ProgressBar animated now={90}></ProgressBar>
              </div>

              <div className="progress">
                <span className="skill">
                  REACT JS, JAVA SCRIPT, HTML, CSS <i className="val">75%</i>
                </span>
                <ProgressBar animated now={75}></ProgressBar>
              </div>

              <div className="progress">
                <span className="skill">
                  MySQL, Apache Cassandra <i className="val">55%</i>
                </span>
                <div className="progress">
                  <ProgressBar animated now={55}></ProgressBar>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
);

export default Services;
