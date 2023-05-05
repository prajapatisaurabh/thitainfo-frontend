import React from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import { FaLinkedin, FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa";
import "./Team.css";

const TeamCard = ({ obj }) => {
  return (
    <Container className="team-container" id={`team-${obj.id}`}>
      <Row className="justify-content-center">
        <Col lg={6} md={8} className="team-info">
          <h3 className="team-name">{obj.name}</h3>
          <p className="team-role">{obj.role}</p>
          <p className="team-disc">{obj.disc}</p>
          <div className="team-social-icons">
            <a href={obj.linkedin} target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="team-icon" />
            </a>
            <a href={obj.twitter} target="_blank" rel="noopener noreferrer">
              <FaTwitter className="team-icon" />
            </a>
            <a href={obj.instagram} target="_blank" rel="noopener noreferrer">
              <FaInstagram className="team-icon" />
            </a>
            <a href={obj.facebook} target="_blank" rel="noopener noreferrer">
              <FaFacebook className="team-icon" />
            </a>
          </div>
        </Col>
        <Col lg={4} md={6} sm={8} xs={10} className="team-img">
          <Image
            src={obj.img}
            alt={obj.name}
            roundedCircle
            fluid
            className="img-fluid"
          />
          <div className="overlay">
            <Button variant="outline-light" className="btn-team">
              View Profile
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default TeamCard;
