import React from "react";
import { Link } from "react-router-dom";

const ServicesSection = () => {
  return (
    <section id="services" className="services">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
            <div className="icon-box">
              <div className="icon">
                <i className="bx bxl-dribbble"></i>
              </div>
              <h4>
                <Link to="/products">Website design</Link>
              </h4>
              <p>
                Interact with your customers with a great looking website that
                is easy-to-use and simple to edit with our
                <strong>website design services</strong>.<br />
                <br />
              </p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
            <div className="icon-box">
              <div className="icon">
                <i className="bx bx-file"></i>
              </div>
              <h4>
                <Link to="/products">Mobile App Development</Link>
              </h4>
              <p>
                We are developing mobile experiences that serve the unique needs
                of your target audience by{" "}
                <strong>mobile application development</strong>.
              </p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0">
            <div className="icon-box">
              <div className="icon">
                <i className="bx bx-tachometer"></i>
              </div>
              <h4>
                <Link to="/products">Software Development</Link>
              </h4>
              <p>
                Our custom <strong>software development services</strong> to
                help your business run more efficiently. We measure, analyses
                and iterate to ensure your systems remain relevant and effective
                for users.
              </p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
            <div className="icon-box">
              <div className="icon">
                <i className="bx bx-world"></i>
              </div>
              <h4>
                <Link to="/products">Social Media Marketing</Link>
              </h4>
              <p>
                By using the power of social media interact with your customers
                in a way that would never before have been possible with
                creative <strong>social media marketing services</strong>.
              </p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
            <div className="icon-box">
              <div className="icon">
                <i className="bx bx-slideshow"></i>
              </div>
              <h4>
                <Link to="/products">Digital Marketing</Link>
              </h4>
              <p>
                We provide our clients with a strong creative{" "}
                <strong>digital marketing</strong> presence, through strategy,
                positioning and conversion.
              </p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
            <div className="icon-box">
              <div className="icon">
                <i className="bx bx-arch"></i>
              </div>
              <h4>
                <Link to="/products">Graphics & Design</Link>
              </h4>
              <p>
                Comming soon ... Modi nostrum vel laborum. Porro fugit error sit
                minus sapiente sit aspernatur
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
