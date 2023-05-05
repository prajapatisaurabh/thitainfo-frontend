import React from "react";
import { VscGitPullRequestCreate } from "react-icons/vsc";
import { FaBinoculars } from "react-icons/fa";
import { BsFillBarChartFill } from "react-icons/bs";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./feature.css";

const Featured = () => {
  const items = [
    {
      icon: <VscGitPullRequestCreate />,
      title: "Create",
      link: "1",
      heading: "Awesome Experiences",
      description:
        "We create awesome experiences by designing and developing highly performing websites. Combining the modern design, UX thinking and deep research, we create exceptional brands that differentiate you in the industry and help to grow your business.",
    },
    {
      icon: <FaBinoculars />,
      title: "Connect",
      link: "23",
      heading: "You To Your Customers",
      description:
        "We help you to connect your audience through effective social media campaigns, user centric content, custom newsletters, paid marketing and contributing on popular networking websites. We help you to nurture your leads into happy customers.",
    },
    {
      icon: <BsFillBarChartFill />,
      title: "Communicate",
      link: "2",
      heading: "Your Brand Story",
      description:
        "With the proven digital marketing strategies, we communicate your brand story to your audience. We create engaging content, videos, infographics, long-form content, such as e-books/white papers to attract, convert and delight your audience.",
    },
  ];

  return (
    <section id="featured" className="featured">
      <Container>
        <Row>
          {items.map((item, index) => (
            <Col lg={4} md={6} sm={12} key={index}>
              <Card className="mb-4">
                <div className="card-icon">{item.icon}</div>
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Subtitle>{item.heading}</Card.Subtitle>
                  <Card.Text>{item.description}</Card.Text>
                  <Card.Link href={item.link}>Read More</Card.Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Featured;
