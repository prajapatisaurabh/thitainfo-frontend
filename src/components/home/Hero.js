import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../../assets/img/header-img.svg";
import TrackVisibility from "react-on-screen";
import { Container, Col, Row } from "react-bootstrap";
import "animate.css";

const Hero = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["we are thitacian", "we are thitacian", "we are thitacian"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <section className="banner" id="hero">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <span className="tagline">Welcome to ThitaInfo</span>
                  <h1>
                    {`Hi!  `}
                    <span
                      className="txt-rotate"
                      dataPeriod="1000"
                      data-rotate='[ "we are thitacian", "we are thitacian", "we are thitacian" ]'
                    >
                      <span className="wrap">{text}</span>
                    </span>
                  </h1>
                  <p>
                    Thita is a product-based company that specializes in web
                    design, mobile application development, and ERP application
                    development. Along with this, your company also provides
                    tutorials on Java and technical news to keep up with the
                    latest trends in the industry. Your blog section serves as a
                    platform to share your expertise and knowledge with the
                    wider community. With a focus on delivering cost-effective
                    solutions and helping clients connect with their target
                    audience, your company strives to thrive in the competitive
                    digital world.
                  </p>
                  <button onClick={() => console.log("connect")}>
                    Let’s Connect <ArrowRightCircle size={25} />
                  </button>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                >
                  <img src={headerImg} alt="Header Img" />
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      {/* <div className="hero-container">
        <div
          id="heroCarousel"
          data-bs-interval="5000"
          className="carousel slide carousel-fade"
          data-bs-ride="carousel"
        >
          <ol
            className="carousel-indicators"
            id="hero-carousel-indicators"
          ></ol>

          <div className="carousel-inner" role="listbox">
            <div
              className="carousel-item active"
              style={{ backgroundColor: "origin" }}
            >
              <div className="carousel-container">
                <div className="carousel-content">
                  <h2 className="animate__animated animate__fadeInDown">
                    Welcome to <span>Thita</span>
                  </h2>
                  <p className="animate__animated animate__fadeInUp">
                    We craft beautiful website,digital product & services that
                    help you thrive in our digital world.We offer cost effective
                    web design with many solutions to help you sell online or
                    contact your target audience
                  </p>
                  <h5>
                    We specialize in: <br /> Web Design / Mobile Application
                    Developmen / ERP Application
                  </h5>
                  <Link
                    className="btn-get-started animate__animated animate__fadeInUp"
                    to={"/service"}
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </section>
  );
};

export default Hero;
