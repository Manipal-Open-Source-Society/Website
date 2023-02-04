import React from "react";
import "./Team.css";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { HiEnvelope } from "react-icons/hi2";
import Suryaansh from "../../assets/team/Suryaansh.png";
import Trisha from "../../assets/team/Trisha.png";

export default function Team() {
  const members = [
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
  ];
  return (
    <div className="team-container">
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
