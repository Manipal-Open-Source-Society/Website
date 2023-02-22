import React from "react";
import "./About.css";
import vision from "../../assets/vision.gif";
import mission from "../../assets/mission.gif";

export default function About() {
  return (
    <div className="about-container" id="about">
      <div className="about-title">About Us</div>
      <div className="about-box1">
        <div className="vision text-box">
          <div className="about-title2">VISION</div>
          <img src={vision} className="about-gif1" />

          <div className="about-content">
            The vision of moss is to Spread awarness about open source amongst
            students by conducting workshops and events which will help in
            building a large community and finding the exact target audience who
            might take this open source society upto a next level and we hope
            that a lot of one’s get benifitted by this in future.
          </div>
        </div>
      </div>

      <div className="about-box1">
        <div className="mission text-box">
          <div className="about-title2">MISSION</div>
          <img src={mission} className="about-gif2" />

          <div className="about-content">
            Moss's Mission is to spread awareness and information about the open
            source society. The promise of open source society, is higher
            quality, better reliability, greater flexibility, lower cost. Also
            developing and contributing to the amazing field of open source.
          </div>
        </div>
      </div>
    </div>
  );
}
