import React from "react";
import "./About.css";
import vision from "../../assets/vision.gif";
import mission from "../../assets/mission.gif";

export default function About() {
  return (
    <div className="about-container" id="about">
          <img src={vision} className="about-gif1"/>
          <img src={mission} className="about-gif2"/>

      <div className="about-title">About Us</div>
        <div className="about-box1">
          <div className="about-title2">VISION</div>

          <div className="about-content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque turpis nisl, tincidunt tempus augue posuere, imperdiet
            vulputate odio. Phasellus mattis lacus efficitur nulla vulputate,
            vel tempor massa tempus. Phasellus mattis pretium erat, in fermentum
            massa. Duis vehicula ullamcorper lacinia. Maecenas sed arcu dapibus,
            consequat mi in, mollis ante. Maecenas semper.

          </div>
        </div>
    

        <div className="about-box1">
          <div className="about-title2">MISSION</div>
          <div className="about-content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque turpis nisl, tincidunt tempus augue posuere, imperdiet
            vulputate odio. Phasellus mattis lacus efficitur nulla vulputate,
            vel tempor massa tempus. Phasellus mattis pretium erat, in fermentum
            massa. Duis vehicula ullamcorper lacinia. Maecenas sed arcu dapibus,
            consequat mi in, mollis ante. Maecenas semper.
          </div>
        </div>
      </div>
  );
}
