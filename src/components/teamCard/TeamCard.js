import React from "react";
import { Card } from "react-bootstrap";
import {
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const TeamCard = ({ obj }) => {
  return (
    <Card border="danger" style={{ margin: "10px" }}>
      <Card.Img variant="top" src={obj.img} height={385} />
      <Card.Body className="text-center">
        <Card.Title className="font-monospace fw-bolder">{obj.name}</Card.Title>
        <Card.Subtitle className="text-muted fw-bolder">
          {obj.role}
        </Card.Subtitle>
        <Card.Text className="fw-normal">{obj.disc}</Card.Text>
        <Card.Footer>
          <Card.Link href={obj.twitter}>
            <FaTwitter />
          </Card.Link>
          <Card.Link href={obj.facebook}>
            <FaFacebook />
          </Card.Link>
          <Card.Link href={obj.instagram}>
            <FaInstagram />
          </Card.Link>
          <Card.Link href={obj.linkedin}>
            <FaLinkedinIn />
          </Card.Link>
        </Card.Footer>
      </Card.Body>
    </Card>
  );
};

export default TeamCard;
