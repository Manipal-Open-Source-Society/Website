import React from "react";
import "./Team.css";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { HiEnvelope } from "react-icons/hi2";
import Utkarsh from "../../assets/team/Utkarsh.png";
import Ishita from "../../assets/team/Ishita.jpeg";
import Udit from "../../assets/team/Udit.png";
import Priyamvada from "../../assets/team/Priyamvada.png";
import Vanshitha from "../../assets/team/Vanshitha.png";
import Vainavi from "../../assets/team/Vainavi.png";
import  Neetigya from "../../assets/team/Neetigya.png";

import Suryaansh from "../../assets/team/Suryaansh.png";
import Trisha from "../../assets/team/Trisha.png";
import Shourya from "../../assets/team/Shourya.png";

import TopNav from "../../Components/Navbar/Navbar";

export default function Team() {
  const members = [
    {
      name: "Utkarsh Anand",
      img: Utkarsh,
      designation: "Executive",
      github: "https://github.com/utkarshanand140",
      email: "utkarshanand221@gmail.com",
      linkedin: "https://www.linkedin.com/in/utkarsh-anand-93260617b/",
    },
    
    {
      name: "Ishita Saha",
      img: Ishita,
      designation: "Founder and Executive Lead",
      github: "https://github.com/ishitasaha3002",
      email: "ishitasaha3002@gmail.com",
      linkedin: "https://www.linkedin.com/in/ishita-saha-07574b1b8/?originalSubdomain=in",
    },

    
    {
      name: "Shourya Gupta",
      img: Shourya,
      designation: "Open Source Moderator and Executive Lead",
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
      github: "",
      email: "",
      linkedin: "",
    },
        {
      name: "Trisha Jaipuriar",
      img: Trisha,
      designation: "HR and PR Head",
      github: "",
      email: "",
      linkedin: "",
    },

    {
      name: "Priyamvadha Chandrasekar",
      img: Priyamvada,
      designation: "SM and Content Head",
      github: "",
      email: "",
      linkedin: "",
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



      {
        name: "Neetigya Poddar",
        img: Neetigya,
        designation: "Core Software Maintainer",
        github: "https://github.com/NeetigyaPod",
        email: "neetigyapoddar1@gmail.com",
        linkedin: "",
      },
  ];
  return (
    <div className="team-container">
    <TopNav page={'team'}/>
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
                <a href={person.email}>
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
    </div>
  );
}
