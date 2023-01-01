import React from "react";
import ServiceSection from "../services/ServicesSection";

const Main = () => {
  return (
    <main id="main">
      <section id="featured" className="featured">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="icon-box">
                <div className="row">
                  <div className="col-lg-2">
                    <i className="bi bi-card-checklist"></i>
                  </div>
                  <div className="col-lg-6">
                    <h1>Create</h1>
                  </div>
                </div>
                <h3>
                  <a href="1"> Awesome Experiences</a>
                </h3>
                <p>
                  We create awesome experiences by designing and developing
                  highly performing websites. Combining the modern design, UX
                  thinking and deep research, we create exceptional brands that
                  differentiate you in the industry and help to grow your
                  business.
                </p>
              </div>
            </div>
            <div className="col-lg-4 mt-4 mt-lg-0">
              <div className="icon-box">
                <div className="row">
                  <div className="col-lg-2">
                    <i className="bi bi-bar-chart"></i>
                  </div>
                  <div className="col-lg-6">
                    <h1>Communicate</h1>
                  </div>
                </div>
                <h3>
                  <a href="2"> Your Brand Story</a>
                </h3>
                <p>
                  With the proven digital marketing strategies, we communicate
                  your brand story to your audience. We create engaging content,
                  videos, infographics, long-form content, such as e-books/white
                  papers to attract, convert and delight your audience.
                </p>
              </div>
            </div>
            <div className="col-lg-4 mt-4 mt-lg-0">
              <div className="icon-box">
                <div className="row">
                  <div className="col-lg-2">
                    <i className="bi bi-binoculars"></i>
                  </div>
                  <div className="col-lg-6">
                    <h1>Connect</h1>
                  </div>
                </div>
                <h3>
                  <a href="23"> You To Your Customers</a>
                </h3>
                <p>
                  We help you to connect your audience through effective social
                  media campaigns, user centric content, custom newsletters,
                  paid marketing and contributing on popular networking
                  websites. We help you to nurture your leads into happy
                  customers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="about">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <img src="assets/img/about.jpg" className="img-fluid" alt="" />
            </div>
            <div className="col-lg-6 pt-4 pt-lg-0 content">
              <h1>Our Expertise</h1>
              <p className="fst-italic">
                Our expertise is to formulate personalized solutions that will
                give your business the leverage it needs to excel. As the best
                software development company, we maintain a focused interest and
                specialize in the key areas of mobile app development, SEO and
                graphics.
              </p>
              <br />
              <p>
                Our mobile app development services are one of the best in the
                world. We build smart, interactive, cross-platform apps for
                businesses.
              </p>
              <br />
              <p>
                SEO keeps businesses visible and on top. We provide strategic
                SEO solutions for businesses that keeps them distinguished and
                noticeable.
              </p>
              <br />
              <p>
                Our mobile app development services are one of the best in the
                world. We build smart, interactive, cross-platform apps for
                businesses.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ServiceSection />
    </main>
  );
};

export default Main;
