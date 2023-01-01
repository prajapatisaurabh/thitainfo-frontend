import React from "react";
import { Link } from "react-router-dom";

const About = () => (
  <main id="main">
    <section id="breadcrumbs" className="breadcrumbs">
      <div className="container">
        <ol>
          <li>
            <a href="index.html">Home</a>
          </li>
          <li>About Us</li>
        </ol>
        <h2>About Us</h2>
      </div>
    </section>
    <section id="about" className="about">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <img src="assets/img/about.jpg" className="img-fluid" alt="" />
          </div>
          <div className="col-lg-6 pt-4 pt-lg-0 content">
            <h3>
              We build software solutions using emerging technologies for
              startups and enterprises.
            </h3>
            <p className="fst-italic">
              Our goal is to help companies adopt new technologies and simplify
              complicated issues that arise during technology evolution. We
              excel in AI/ML, Web Development, IoT, cloud and mobile.
            </p>
            <ul>
              <li>
                <i className="bi bi-check-circle"></i> Our mission is to help
                our clients make distinctive, lasting and substantial
                improvements in their performance and to build a great firm that
                attracts, develops, excites and retains exceptional people.
              </li>
              <li>
                <i className="bi bi-check-circle"></i> We are a global family
                that values diversity; We always do the right thing. With
                precision, pace and passion; We trust each other and have fun
                winning together; We own and shape our future; We create
                sustainable growth; For All.
              </li>
              <li>
                <i className="bi bi-check-circle"></i> Our vision serves as the
                framework for our Roadmap and guides every aspect of our
                business by describing what we need to accomplish in order to
                continue achieving sustainable, quality growth.
              </li>
            </ul>
            <p>
              <Link to="/">ThitaInfo</Link> is a team that has a passion for
              developing and delivering enterprise-grade applications Holding
              the experience of working with 2+ we have developed applications
              that are now being used by millions of consumers worldwide . We
              understand how to build successful software products.
            </p>
          </div>
        </div>
      </div>
    </section>
  </main>
);

export default About;
