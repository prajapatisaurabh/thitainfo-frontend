import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faMapMarkerAlt,
  faPhoneAlt,
} from "@fortawesome/free-solid-svg-icons";

const ContactInfo = () => {
  return (
    <div className="contact-us-info">
      <div className="contact-us-info-item">
        <div className="contact-us-info-icon">
          <FontAwesomeIcon icon={faMapMarkerAlt} />
        </div>
        <div className="contact-us-info-text">
          <p>Ahmedabad</p>
        </div>
      </div>
      <div className="contact-us-info-item">
        <div className="contact-us-info-icon">
          <FontAwesomeIcon icon={faPhoneAlt} />
        </div>
        <div className="contact-us-info-text">
          <p>+91 81402 42047</p>
        </div>
      </div>
      <div className="contact-us-info-item">
        <div className="contact-us-info-icon">
          <FontAwesomeIcon icon={faEnvelope} />
        </div>
        <div className="contact-us-info-text">
          <p>saurabhprajapati120@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
