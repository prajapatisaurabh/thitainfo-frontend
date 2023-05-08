import React from "react";
import { Link } from "react-router-dom";
import { FaLinkedinIn, FaYoutube } from "react-icons/fa";
import "./Footer.css";

import { INSTAGRAM_URL, YOUTUBE_URL } from "../constrains/Constant";

const Footer = () => {
  let year = new Date().getFullYear();
  return (
    <footer id="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h4>Useful Links</h4>
            <ul className="list-unstyled">
              <li>
                <Link to="/" className="text-decoration-none text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-decoration-none text-white">
                  About
                </Link>
              </li>
              <li>
                <Link to="/service" className="text-decoration-none text-white">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/team" className="text-decoration-none text-white">
                  Team
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-decoration-none text-white">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-md-4">
            <h4>Contact Us</h4>
            <ul className="list-unstyled">
              <li>
                <a
                  href={INSTAGRAM_URL}
                  className="text-decoration-none text-white"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaLinkedinIn size={18} className="me-2" /> LinkedinIn
                </a>
              </li>
              <li>
                <a
                  href={YOUTUBE_URL}
                  target="_blank"
                  className="text-decoration-none text-white"
                  rel="noreferrer"
                >
                  <FaYoutube size={18} className="me-2" /> Youtube
                </a>
              </li>
              <li>
                <a
                  href="tel:+918140202047"
                  className="text-decoration-none text-white"
                >
                  <i className="bi bi-telephone-fill me-2"></i> +91 81402 02047
                </a>
              </li>
              <li>
                <a
                  href="mailto:saurabhprajapati120.@gmail.com"
                  className="text-decoration-none text-white"
                >
                  <i className="bi bi-envelope-fill me-2"></i>{" "}
                  saurabhprajapati120@gmail.com
                </a>
              </li>
            </ul>
          </div>

          <div className="col-md-4">
            <h4>About Us</h4>
            <p>
              Thita Info is a new software development company that provides
              easy and cost-effective solutions for businesses to go online.
            </p>
          </div>
        </div>
      </div>

      <div className="container py-3">
        <div className="text-center">
          <p className="mb-0">
            &copy; {year}-{year + 1} Thita. All Rights Reserved.
          </p>
          <p className="mb-0">Designed by Thita Info</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
