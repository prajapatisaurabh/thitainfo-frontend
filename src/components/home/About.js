import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import "./home.css";

const About = () => {
  return (
    <section id="about" className="about">
      <Container>
        <Row>
          <Col lg={6}>
            <Image src="assets/img/about.jpg" className="img-fluid" alt="" />
          </Col>
          <Col lg={6} className="pt-4 pt-lg-0 content">
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
              SEO keeps businesses visible and on top. We provide strategic SEO
              solutions for businesses that keeps them distinguished and
              noticeable.
            </p>
            <br />
            <p>
              Our mobile app development services are one of the best in the
              world. We build smart, interactive, cross-platform apps for
              businesses.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
