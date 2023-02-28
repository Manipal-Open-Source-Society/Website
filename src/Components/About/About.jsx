import React from "react";
import "./About.css";
import vision from "../../assets/vision.gif";
import mission from "../../assets/mission.gif";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export default function About() {
  return (
    <div className="about-container" id="about">
      <div className="about-title">About Us</div>
      <div className="about-box1">
        <div className="vision text-box">
          <div className="about-title2">VISION and MISSON</div>
          <img src={vision} className="about-gif1" />

          <div className="about-content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Curabitur fermentum, nulla sed aliquam pretium, quam odio
            finibus risus, quis mollis mauris velit eleifend dolor.
            Praesent suscipit, felis porta suscipit semper, lacus sem pharetra
            eros, in volutpat enim nunc eget odio. Nunc id faucibus urna,
            sed interdum augue. In feugiat pharetra tincidunt. Integer id
            lobortis est. Morbi ut elementum lectus, sit amet porttitor tellus.
            Nulla laoreet elementum erat ac ultricies. Quisque.


          </div>
        </div>
      </div>

      <div className="about-box1">
        <Carousel
          autoPlay={true}
          centerMode={true}
          interval={1000}
          showArrows={true}
          showIndicators={true}
          stopOnHover={true}
          infiniteLoop={true}
        >
          <div className="about-carousel">Card 1</div>
          <div className="about-carousel">Card 2</div>
          <div className="about-carousel">Card 3</div>
          <div className="about-carousel">Card 4</div>

        </Carousel>
      </div>
    </div>
  );
}
