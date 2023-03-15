import React from "react";
import "./Skill.css";

import aws from "../../assets/img/Skill/AWS.svg";
import html from "../../assets/img/Skill/html.svg";
import java from "../../assets/img/Skill/java.svg";
import azure from "../../assets/img/Skill/azure.svg";
import csharp from "../../assets/img/Skill/csharp.svg";
import hibernate from "../../assets/img/Skill/hibernate.png";
import react from "../../assets/img/Skill/react.svg";
import spring from "../../assets/img/Skill/spring.png";
import sql from "../../assets/img/Skill/sql.png";

const Skill = () => {
  return (
    <div class="skills-section">
      <div class="skills-header">
        <h1>Skills</h1>
      </div>
      <div class="skills-container">
        <div class="skills-box">
          <div class="skills-title">
            <div class="skills-img">
              <img src={java} alt="" class="skills-icons" />
            </div>
            <h3>Java</h3>
          </div>
          <p> Lorem Lorem Lorem </p>
        </div>

        <div class="skills-box">
          <div class="skills-title">
            <div class="skills-img">
              <img src={spring} alt="" class="skills-icons" />
            </div>
            <h3>Spring Boot</h3>
          </div>
          <p> Lorem Lorem Lorem </p>
        </div>

        <div class="skills-box">
          <div class="skills-title">
            <div class="skills-img">
              <img src={csharp} alt="" class="skills-icons" />
            </div>
            <h3>C#</h3>
          </div>
          <p> Lorem Lorem Lorem </p>
        </div>

        <div class="skills-box">
          <div class="skills-title">
            <div class="skills-img">
              <img src={azure} alt="" class="skills-icons" />
            </div>
            <h3>Microsoft Azure</h3>
          </div>
          <p> Lorem Lorem Lorem </p>
        </div>

        <div class="skills-box">
          <div class="skills-title">
            <div class="skills-img">
              <img src={aws} alt="" class="skills-icons" />
            </div>
            <h3>AWS</h3>
          </div>
          <p> Amazon Web Services</p>
        </div>

        <div class="skills-box">
          <div class="skills-title">
            <div class="skills-img">
              <img src={hibernate} alt="" class="skills-icons" />
            </div>
            <h3>Hibernate</h3>
          </div>
          <p> Lorem Lorem Lorem </p>
        </div>

        <div class="skills-box">
          <div class="skills-title">
            <div class="skills-img">
              <img src={sql} alt="" class="skills-icons" />
            </div>
            <h3>MySQL</h3>
          </div>
          <p> Lorem Lorem Lorem </p>
        </div>

        <div class="skills-box">
          <div class="skills-title">
            <div class="skills-img">
              <img src={react} alt="" class="skills-icons" />
            </div>
            <h3>React</h3>
          </div>
          <p> Lorem Lorem Lorem </p>
        </div>

        <div class="skills-box">
          <div class="skills-title">
            <div class="skills-img">
              <img
                src="https://icon-library.net/images/javascript-icon-png/javascript-icon-png-23.jpg"
                alt=""
                class="skills-icons"
              />
            </div>
            <h3>JAVASCRIPT</h3>
          </div>
          <p> Lorem Lorem Lorem </p>
        </div>

        <div class="skills-box">
          <div class="skills-title">
            <div class="skills-img">
              <img src={html} alt="" class="skills-icons" />
            </div>
            <h3>HTML 5</h3>
          </div>
          <p> Lorem Lorem Lorem </p>
        </div>

        <div class="skills-box">
          <div class="skills-title">
            <div class="skills-img">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/3/3d/CSS.3.svg"
                alt=""
                class="skills-icons"
              />
            </div>
            <h3>CSS3</h3>
          </div>
          <p> Lorem Lorem Lorem </p>
        </div>
      </div>
    </div>
  );
};

export default Skill;
