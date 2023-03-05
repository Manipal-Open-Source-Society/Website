import React from "react";
import "./Team.css";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { HiEnvelope } from "react-icons/hi2";
import { cc } from './cc.js';
import mission from "../../assets/mission.gif";
import Utkarsh from "../../assets/team/Utkarsh.png";
import Ishita from "../../assets/team/Ishita.jpeg";
import Arnav from "../../assets/team/Arnav.jpeg";
import Udit from "../../assets/team/Udit.png";
import Priyamvada from "../../assets/team/Priyamvada.png";
import Vanshitha from "../../assets/team/Vanshitha.png";
import Vainavi from "../../assets/team/Vainavi.png";

import Suryaansh from "../../assets/team/Suryaansh.png";
import Trisha from "../../assets/team/Trisha.png";
import Shourya from "../../assets/team/Shourya.png";
import Sujal from "../../assets/team/Sujal.png";

import TopNav from "../../Components/Navbar/Navbar";

export default function Team() {
  const members = [
    {
      name: "Ishita Saha",
      img: Ishita,
      designation: "Founder and Executive Lead",
      github: "https://github.com/ishitasaha3002",
      email: "ishitasaha3002@gmail.com",
      linkedin: "https://www.linkedin.com/in/ishita-saha-07574b1b8/?originalSubdomain=in",
    },
    {
      name: "Utkarsh Anand",
      img: Utkarsh,
      designation: "Executive Lead",
      github: "https://github.com/utkarshanand140",
      email: "utkarshanand221@gmail.com",
      linkedin: "https://www.linkedin.com/in/utkarsh-anand-93260617b/",
    },
    {
      name: "Shourya Gupta",
      img: Shourya,
      designation: "Executive Lead",
      github: "https://github.com/shourya2002-geek",
      email: "13.shourya@gmail.com",
      linkedin: "https://www.linkedin.com/in/shourya-gupta-80237b1b9/",
    },

    {
      name: "Vainavi Samant",
      img: Vainavi,
      designation: "Executive Lead",
      github: "https://github.com/VainaviS",
      email: "vainavi.2709@gmail.com",
      linkedin: "https://www.linkedin.com/in/vainavi-samant-b0b444200/",
    },
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
      name: "Priyamvadha Chandrasekar",
      img: Priyamvada,
      designation: "SM and Content Head",
      github: "https://github.com/priyamc11",
      email: "priyamvadha.c@gmail.com",
      linkedin: "https://www.linkedin.com/in/priyamvadhachandrasekar",
    },
    {
      name: "Udit Amin",
      img: Udit,
      designation: "AI/ML Maintainer",
      github: "https://github.com/udit-amin",
      email: "uditsamin@gmail.com",
      linkedin: "https://www.linkedin.com/in/udit-amin-857b601b7",
    },
    {
      name: "Vanshitha",
      img: Vanshitha,
      designation: "Development Maintainer",
      github: "https://github.com/Vanshitha",
      email: "vanshitha02@gmail.com",
      linkedin: "https://www.linkedin.com/in/vanshitha-r-b4b3a7205/",
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
  ]
  return (
    <div className="team-container">
      <TopNav page={'team'} />
      <div className="team-title">Our Team</div>
      <div className="team-subtitle">Current Board</div>
      <div className="teamC">
        {members.map((person) => (
          <div className="team-card">
            <div className="img-container">
              <img src={person.img} className="team-img" />
            </div>
            <div className="team-content">
              <div className="team-name">{person.name}</div>
              <div className="team-desig">{person.designation}</div>
              <div className="team-icon-cont">
                <a href={person.linkedin}>
                  <AiFillLinkedin className="team-icon" />
                </a>
                <a href={`mailto:${person.email}`}>
                  <HiEnvelope className="team-icon" />
                </a>
                <a href={person.github}>
                  <AiFillGithub className="team-icon" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
     
      <div className="team-subtitle">Website Team</div>
      <div className="teamC">
        {website.map((person) => (
          <div className="team-card">
            <div className="img-container">
              <img src={person.img} className="team-img" />
            </div>
            <div className="team-content">
              <div className="team-name">{person.name}</div>
              <div className="team-desig">{person.designation}</div>
              <div className="team-icon-cont">
                <a href={person.linkedin}>
                  <AiFillLinkedin className="team-icon" />
                </a>
                <a href={`mailto:${person.email}`}>
                  <HiEnvelope className="team-icon" />
                </a>
                <a href={person.github}>
                  <AiFillGithub className="team-icon" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="team-subtitle">Core Committee</div>
      <div className="cc-container">
      <img src={mission} className="cc-bg"/>
        <div>

          {cc.map((name) => cc.indexOf(name) % 3 == 0 &&
            <div className="name">{name}</div>
          )}
        </div>
        <div>

          {cc.map((name) => cc.indexOf(name) % 3 == 1 &&
            <div className="name">{name}</div>
          )}
        </div>
        <div>

          {cc.map((name) => cc.indexOf(name) % 3 == 2 &&
            <div className="name">{name}</div>
          )}
        </div>
      </div>
    </div>
  );
}
