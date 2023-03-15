import React from "react";
import { Link } from "react-router-dom";
import { BiCheckCircle } from "react-icons/bi";

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
              We create software solutions using new technologies for both small
              businesses and larger companies.
            </h3>
            <p>
              We strive to assist companies in embracing new technologies and
              simplifying complex problems that can arise during technological
              advancements. We specialize in AI/ML, Web Development, IoT, cloud
              and mobile technologies.
            </p>
            <ul>
              <li>
                <BiCheckCircle />
                Our mission is to help our clients achieve significant and
                lasting performance improvements, while also building a great
                company that attracts, develops, and retains exceptional people
              </li>
              <li>
                <BiCheckCircle /> We are a diverse global family that
                prioritizes doing the right thing with precision, pace, and
                passion. We trust and enjoy winning together, taking ownership
                and shaping our future while creating sustainable growth for all
              </li>
              <li>
                <BiCheckCircle /> Our vision guides every aspect of our business
                and outlines what we need to accomplish to achieve sustainable,
                high-quality growth.
              </li>
            </ul>
            <p>
              <Link to="/">ThitaInfo</Link> Thita is a dedicated team with a
              passion for developing and delivering enterprise-grade
              applications. With over 2+ years of experience, we have developed
              applications that are now being used by millions of consumers
              worldwide. We pride ourselves on understanding how to build
              successful software products that not only meet our clients' needs
              but also exceed their expectations. Our team's expertise and
              commitment to quality enable us to deliver reliable and scalable
              solutions to businesses of all sizes.
            </p>
          </div>
        </div>
      </div>
    </section>
  </main>
);

export default About;
