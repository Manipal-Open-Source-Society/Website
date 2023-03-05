import React from "react";
import "./About.css";
import Carousel from 'react-bootstrap/Carousel';

import vision from "../../assets/vision.gif";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import about1 from "../../assets/about/about1.jpg";
import about2 from "../../assets/about/about2.jpg";
import about3 from "../../assets/about/about3.jpg";
import about4 from "../../assets/about/about4.jpg";
import about5 from "../../assets/about/about5.jpg";
import about6 from "../../assets/about/about6.jpg";

export default function About() {
  return (
    <div className="about-container" id="about">
      <div className="about-title">About Us</div>
      <div className="ab-cont">

      <div className="about-box1">
        <div className="vision text-box">
          {/* <div className="about-title2">VISION and MISSON</div> */}
          <img src={vision} className="about-gif1" />

          <div className="about-content">
            Manipal Open Source Society is the first official open source club of MIT, Manipal.
            Formed with the vision to revive the dwindling FOSS culture in the college, the main
            aim of the club is to spread awareness about Open source through the lenses of
            lenses of Software Development, Machine Learning, Artificial Intelligence,
            Cloud Computing, Computer Graphics, Cybersecurity, Robotics and much more.
            We conduct a events throughout the year helping our community members to get
            acquainted with the different aspects of open source through workshops, speaker
            events, webinars and projects.
          </div>
        </div>
      </div>

      <div className="about-box1">


        <Carousel fade interval={1000} indicators={true}>
          <Carousel.Item className="about-car">
            <img
              className="d-block w-100"
              src={about1}
              alt="First slide"
            />

          </Carousel.Item>
          <Carousel.Item className="about-car">
            <img
              className="d-block w-100"
              src={about2}
              alt="Second slide"
            />

          </Carousel.Item>
          <Carousel.Item className="about-car">
            <img
              className="d-block w-100 about-car-im"
              src={about3}
              alt="Third slide"
            />


          </Carousel.Item>
          <Carousel.Item className="about-car">
            <img
              className="d-block w-100 about-car-im"
              src={about4}
              alt="Third slide"
            />



          </Carousel.Item>
          {/* <Carousel.Item className="about-car">
        <img
          className="d-block w-100 about-car-im"
          src={about5}
          alt="Third slide"
        />

      
      </Carousel.Item> */}
          <Carousel.Item className="about-car">
            <img
              className="d-block w-100 about-car-im"
              src={about6}
              alt="Third slide"
            />


          </Carousel.Item>
        </Carousel>

      </div>
      </div>
    </div>
  );
}
