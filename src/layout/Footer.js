import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaYoutube } from "react-icons/fa";

import {
  LINKEDIN_URL,
  FACEBOOK_URL,
  TWITTER_URL,
  INSTAGRAM_URL,
  SKYPE_URL,
  YOUTUBE_URL,
} from "../constrains/Constant";

const Footer = () => {
  let year = new Date().getFullYear();
  return (
    <footer id="footer">
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 footer-links">
              <h4>Useful Links</h4>
              <ul>
                <li>
                  <i className="bx bx-chevron-right"></i>
                  <Link to="/" className="active">
                    Home
                  </Link>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>
                  <Link to="/service">Services</Link>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>
                  <Link to="/team">Team</Link>
                  {/* <a href="4">Terms of service</a> */}
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>
                  <Link to="/blog">Blog</Link>
                </li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 footer-links">
              <h4>Our Services</h4>
              <ul>
                <li>
                  <i className="bx bx-chevron-right"></i>
                  <Link to="/service">Web Design</Link>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>
                  <Link to="/service">Web Development</Link>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>{" "}
                  <Link to="/service">Product Management</Link>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>
                  <Link to="/service">Marketing</Link>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>
                  <Link to="/service">Graphic Design</Link>
                </li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 footer-contact">
              <h4>Contact Us</h4>
              <p>
                <a href={INSTAGRAM_URL}>
                  <span style={{ paddingRight: "10px", color: "white" }}>
                    Contact-Instagram
                  </span>
                  <FaInstagram size={18} />
                </a>
                <br />
                <a href={YOUTUBE_URL}>
                  <span style={{ paddingRight: "10px", color: "white" }}>
                    Contact-Youtube
                  </span>
                  <FaYoutube size={18} />
                </a>
                <br />
                <br />
                <strong>Phone:</strong> +91 81402 02047
                <br />
                <strong>Email:</strong>
                <a
                  style={{ color: "white", paddingLeft: "10px" }}
                  href="mailto:saurabhprajapati@gmail.com"
                >
                  saurabhprajapati120.@gmail.com
                </a>
                <br />
              </p>
            </div>

            <div className="col-lg-3 col-md-6 footer-info">
              <h3>About Thita Info</h3>
              <p>
                Thita info new launched software development company that
                provides easy and cost effective for your business to take it
                online.
              </p>
              <div className="social-links mt-3">
                <a href={TWITTER_URL} className="twitter">
                  <i className="bx bxl-twitter"></i>
                </a>
                <a href={FACEBOOK_URL} className="facebook">
                  <i className="bx bxl-facebook"></i>
                </a>
                <a href={INSTAGRAM_URL} className="instagram">
                  <i className="bx bxl-instagram"></i>
                </a>
                <a href={SKYPE_URL} className="google-plus">
                  <i className="bx bxl-skype"></i>
                </a>
                <a href={LINKEDIN_URL} target="_black" className="linkedin">
                  <i className="bx bxl-linkedin"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="copyright">
          {year}-{year + 1} &copy; Copyright{" "}
          <strong>
            <span>Thita</span>
          </strong>
          . All Rights Reserved
        </div>
        <div className="credits">
          Designed by{" "}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://saurabh-saurabh.github.io/saurabhprajapati"
          >
            Thita Info
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
