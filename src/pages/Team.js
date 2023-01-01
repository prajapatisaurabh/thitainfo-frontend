import React, { useState } from "react";
import TeamCard from "../components/teamCard/TeamCard";
import { CardGroup, Container } from "react-bootstrap";
const Team = () => {
  const TeamInfo = [
    {
      id: 1,
      name: "Saurabh Prajapati",
      role: "Full Stack Developer",
      disc: " Highly qualified and creative software engineer with experience in the industry. I would excel in the collaborative environment with cutting edge technology and modern cloud environment",
      img: "assets/img/team/team-1.png",
      twitter: "https://www.linkedin.com/in/saurabh-prajapati-08b41915b/",
      linkedin: "https://www.linkedin.com/in/saurabh-prajapati-08b41915b/",
      instagram: "https://www.linkedin.com/in/saurabh-prajapati-08b41915b/",
      facebook: "https://www.linkedin.com/in/saurabh-prajapati-08b41915b/",
    },
    {
      id: 2,
      name: "Pradip Sodha",
      role: "Backend Developer",
      disc: " Highly qualified and creative software engineer with experience in the industry. I would excel in the collaborative environment with cutting edge technology and modern cloud environment",
      img: "assets/img/team/team-2.png",
      linkedin: "https://www.linkedin.com/in/pradipsodha",
      twitter: "https://www.linkedin.com/in/saurabh-prajapati-08b41915b/",
      instagram: "https://www.linkedin.com/in/saurabh-prajapati-08b41915b/",
      facebook: "https://www.linkedin.com/in/saurabh-prajapati-08b41915b/",
    },
    {
      id: 3,
      name: "Yash Prajapati",
      role: "Frontend Developer",
      disc: " Highly qualified and creative software engineer with experience in the industry. I would excel in the collaborative environment with cutting edge technology and modern cloud environment",
      img: "assets/img/team/team-3.jpg",
      linkedin: "https://www.linkedin.com/in/ysprajapati/",
      twitter: "https://www.linkedin.com/in/saurabh-prajapati-08b41915b/",
      instagram: "https://www.linkedin.com/in/saurabh-prajapati-08b41915b/",
      facebook: "https://www.linkedin.com/in/saurabh-prajapati-08b41915b/",
    },
  ];

  const [team] = useState(TeamInfo);
  return (
    <main id="main">
      <section id="breadcrumbs" className="breadcrumbs">
        <div className="container">
          <ol>
            <li>
              <a href="index.html">Home</a>
            </li>
            <li>Team</li>
          </ol>
          <h2>Team</h2>
        </div>
      </section>

      <section id="team" className="team">
        <Container>
          <CardGroup>
            {team.map((obj) => (
              <TeamCard obj={obj} />
            ))}
          </CardGroup>
        </Container>
      </section>
    </main>
  );
};

export default Team;
