import React from "react";
import {
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const TeamCard = ({ obj }) => {
  return (
    <div className="col-md-4 col-sm-6 col-xs-12">
      <div className="single-team">
        <div className="img-area">
          <img src={obj.img} className="img-responsive team-img" alt="" />
          <div className="social">
            <ul className="list-inline">
              <li>
                <a href={obj.facebook}>
                  <FaFacebook />
                </a>
              </li>
              <li>
                <a href={obj.twitter}>
                  <FaTwitter />
                </a>
              </li>
              <li>
                <a href={obj.instagram}>
                  <FaInstagram />
                </a>
              </li>
              <li>
                <a href={obj.linkedin}>
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="img-text">
          <h4> {obj.name}</h4>
          <h5>{obj.role}</h5>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
