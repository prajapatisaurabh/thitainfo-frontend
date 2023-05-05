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

const skills = [
  { icon: java, title: "Java" },
  { icon: spring, title: "Spring Boot" },
  { icon: csharp, title: "C#" },
  { icon: azure, title: "Microsoft Azure" },
  { icon: aws, title: "AWS" },
  { icon: hibernate, title: "Hibernate" },
  { icon: sql, title: "MySQL" },
  { icon: react, title: "React" },
  {
    icon: "https://icon-library.net/images/javascript-icon-png/javascript-icon-png-23.jpg",
    title: "JavaScript",
  },
  { icon: html, title: "HTML 5" },
  {
    icon: "https://upload.wikimedia.org/wikipedia/commons/3/3d/CSS.3.svg",
    title: "CSS3",
  },
];

const Skill = () => {
  return (
    <div class="skills-section">
      <div class="skills-header">
        <h1>Skills</h1>
      </div>
      <div class="skills-container">
        {skills.map((skill, index) => (
          <div class="skills-box" key={index}>
            <div class="skills-title">
              <div class="skills-img">
                <img src={skill.icon} alt={skill.title} class="skills-icons" />
              </div>
              <h3>{skill.title}</h3>
            </div>
            <p> Lorem Lorem Lorem </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skill;
