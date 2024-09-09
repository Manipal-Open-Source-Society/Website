import React from "react";
import "./Team.css";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { HiEnvelope } from "react-icons/hi2";
import { cc } from './cc.js';
import mission from "../../assets/mission.gif";
import Ishita from "../../assets/team/Ishita.jpeg";
import Arnav from "../../assets/team/Arnav.jpeg";
import Suryaansh from "../../assets/team/Suryaansh.png";
import Trisha from "../../assets/team/Trisha.png";
import Sujal from "../../assets/team/Sujal.png";
import Archit from "../../assets/team/Archit.jpeg";
import Aditya from "../../assets/team/Aditya.jpg";
import Tarini from "../../assets/team/Tarini.jpg";
import Ayushman from "../../assets/team/Ayushman.jpg";
import Prashast from "../../assets/team/Prashast.jpg";
import Shashwat from "../../assets/team/Shashwat.jpg";
import Dev from "../../assets/team/Dev.jpg";

import TopNav from "../../Components/Navbar/Navbar";

export default function Team() {
  const members = [
    {
      name: "Aditya Aggarwal",
      img: Aditya,
      designation: "President",
      github: "https://github.com/Aditya-1503",
      email: "adityaagg15@gmail.com",
      linkedin: "https://www.linkedin.com/in/aditya-aggarwal-174057228/",
    },
    {
      name: "Tarini Jhamb",
      img: Tarini,
      designation: "Vice-President",
      github: "https://github.com/Tarini1103",
      email: "tarinijhamb@gmail.com",
      linkedin: "https://www.linkedin.com/in/tarini-jhamb-107616285/",
    },
    {
      name: "Archit Agarwal",
      img: Archit,
      designation: "Dev Head",
      github: "https://github.com/Archit-arch",
      email: "architagarwal07342@gmail.com",
      linkedin: "https://www.linkedin.com/in/archit-agarwal-9a046b263/",
    },
    {
      name: "Ayushman Ranjan",
      img: Ayushman,
      designation: "AIML Head",
      github: "https://github.com/Ayushman09122004",
      email: "imayushman11@gmail.com",
      linkedin: "https://www.linkedin.com/in/ayushman-ranjan-b77862318/",
    },
    {
      name: "Prashast Saxena",
      img: Prashast,
      designation: "Advisory Board Executive",
      github: "https://github.com/BoyleHere",
      email: "prashast.mitmpl2022@learner.manipal.edu",
      linkedin: "https://www.linkedin.com/in/prashast-saxena-6b0ba2205/",
    },
    {
      name: "Dev Vasudevan",
      img: Dev,
      designation: "Treasurer",
      github: "https://github.com/dev-vasudevan",
      email: "devvasudevan.wrk@gmail.com",
      linkedin: "https://www.linkedin.com/in/dev-vasudevan-4950b0266/",
    },
    {
      name: "Shashwat Harsh",
      img: Shashwat,
      designation: "SM & HR Head",
      github: "https://github.com/powerseeker45",
      email: "shashwatharsh@gmail.com",
      linkedin: "https://www.linkedin.com/in/shash3h/",
    },
    
  ];

  const founders = [
    {
      name: "Arnav Agrawal",
      img: Arnav,
      designation: "Co-Founder and Executive Lead",
      github: "https://github.com/arnavagrawal22",
      email: "arnavagr22@gmail.com",
      linkedin: "https://www.linkedin.com/in/arnavagrawal22/",
    },
    {
      name: "Ishita Saha",
      img: Ishita,
      designation: "Co-Founder and Executive Lead",
      github: "https://github.com/ishitasaha3002",
      email: "ishitasaha3002@gmail.com",
      linkedin: "https://www.linkedin.com/in/ishita-saha-07574b1b8/?originalSubdomain=in",
    },
  ];

  const website = [
    {
      name: "Suryaansh Rathinam",
      img: Suryaansh,
      designation: "Technical Maintainer",
      github: "https://github.com/suryaansh2002/",
      email: "suryaansh2002@gmail.com",
      linkedin: "https://www.linkedin.com/in/suryaansh-rathinam-33a86b1b6/",
    },
    {
      name: "Trisha Jaipuriar",
      img: Trisha,
      designation: "HR and PR Head",
      github: "https://github.com/Trisha7781",
      email: "trishajaipuriark32002@gmail.com",
      linkedin: "https://www.linkedin.com/in/trisha-jaipuriar-82877b217/",
    },
    {
      name: "Sujal Ranjan",
      img: Sujal,
      designation: "Frontend Developer",
      github: "https://github.com/Sranjan0208",
      email: "sranjan0208@gmail.com",
      linkedin: "https://www.linkedin.com/in/sujal-ranjan-0073401b3",
    },
    {
      name: "Archit Agarwal",
      img: Archit,
      designation: "Dev Head",
      github: "https://github.com/Archit-arch",
      email: "architagarwal07342@gmail.com",
      linkedin: "https://www.linkedin.com/in/archit-agarwal-9a046b263/",
    },
  ];

  return (
    <div className="team-container">
      <TopNav page={'team'} />
      <div className="team-title">Our Team</div>
      <div className="team-subtitle">Current Board</div>
      <div className="teamC">
        {members.map((person, index) => (
          <div className="team-card" key={index}> {/* Add a unique key for each card */}
            <div className="img-container">
              <img src={person.img} alt={person.name} className="team-img" /> {/* Add alt attribute for accessibility */}
            </div>
            <div className="team-content">
              <div className="team-name">{person.name}</div>
              <div className="team-desig">{person.designation}</div>
              <div className="team-icon-cont">
                <a href={person.linkedin} target="_blank" rel="noopener noreferrer"> {/* Open in new tab for external links */}
                  <AiFillLinkedin className="team-icon" />
                </a>
                <a href={`mailto:${person.email}`}>
                  <HiEnvelope className="team-icon" />
                </a>
                <a href={person.github} target="_blank" rel="noopener noreferrer">
                  <AiFillGithub className="team-icon" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
     
      <div className="team-subtitle">Website Team</div>
      <div className="teamC">
        {website.map((person, index) => (
          <div className="team-card" key={index}>
            <div className="img-container">
              <img src={person.img} alt={person.name} className="team-img" />
            </div>
            <div className="team-content">
              <div className="team-name">{person.name}</div>
              <div className="team-desig">{person.designation}</div>
              <div className="team-icon-cont">
                <a href={person.linkedin} target="_blank" rel="noopener noreferrer">
                  <AiFillLinkedin className="team-icon" />
                </a>
                <a href={`mailto:${person.email}`}>
                  <HiEnvelope className="team-icon" />
                </a>
                <a href={person.github} target="_blank" rel="noopener noreferrer">
                  <AiFillGithub className="team-icon" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="team-subtitle">Core Committee</div>
      <div className="cc-container">
        <img src={mission} alt="Mission Background" className="cc-bg"/> {/* Add alt attribute for accessibility */}
        <div>
          {cc.map((name, index) => cc.indexOf(name) % 3 === 0 &&
            <div className="name" key={index}>{name}</div> // Add a unique key for each name
          )}
        </div>
        <div>
          {cc.map((name, index) => cc.indexOf(name) % 3 === 1 &&
            <div className="name" key={index}>{name}</div>
          )}
        </div>
        <div>
          {cc.map((name, index) => cc.indexOf(name) % 3 === 2 &&
            <div className="name" key={index}>{name}</div>
          )}
        </div>
      </div>
    </div>
  );
}
