import React from "react";
import "./PastEvents.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export default function PastEvents() {
  return (
    <div className="events-container" id="events">
      <div className="events-title">Our Past Events</div>
      <div className="events-carousel-container">
        <Carousel
          autoPlay={false}
          centerMode={true}
          interval={1000}
          showArrows={true}
          showIndicators={true}
          stopOnHover={true}
          infiniteLoop={true}
        >
          <div className="events-carousel">
            <div className="event-title">Gateway To Open Source</div>
            <div className="event-date">11th Feb 2023</div>
            <hr />
            <div className="event-carousel-box">
              <div className="events-card-left">
                <Carousel
                  autoPlay={true}
                  centerMode={true}
                  interval={2000}
                  showArrows={true}
                  showIndicators={true}
                  stopOnHover={true}
                  infiniteLoop={true}
                >
                  <div className="event-card-carousel">Card 1</div>
                  <div className="event-card-carousel">Card 2</div>
                  <div className="event-card-carousel">Card 3</div>
                  <div className="event-card-carousel">Card 4</div>
                </Carousel>
              </div>
              <div className="events-card-right">
                <a href="https://www.linkedin.com/in/avinal/" target={"_blank"}>
                  <b>Avinal Kumar </b>
                </a>
                and
                <a
                  href="https://www.linkedin.com/in/bhanvi-menghani/"
                  target={"_blank"}
                >
                  <b> Bhanavi Meghani</b>
                </a>
                , both associate software engineers at Red Hat, were invited for
                an online talk on
                <b>"Gateway to Open Source"</b>. During the event, they
                discussed the benefits of open source software, how to
                contribute to open source projects, and provided tips on getting
                started. They also shared their own experiences working in open
                source, including the challenges and rewards. The event was
                well-received by 80+ attendees who attended the event in offline
                mode and were keenly interested in learning more about open
                source and how to become involved in the community.
              </div>
            </div>
          </div>
          <div className="events-carousel">
            <div className="event-title">Perceptron</div>
            <div className="event-date">10th-15th March 2022</div>
            <hr />
            <div className="event-carousel-box">
              <div className="events-card-left">
                <Carousel
                  autoPlay={true}
                  centerMode={true}
                  interval={2000}
                  showArrows={true}
                  showIndicators={true}
                  stopOnHover={true}
                  infiniteLoop={true}
                >
                  <div className="event-card-carousel">Card 1</div>
                  <div className="event-card-carousel">Card 2</div>
                  <div className="event-card-carousel">Card 3</div>
                  <div className="event-card-carousel">Card 4</div>
                </Carousel>
              </div>
              <div className="events-card-right">
                Perceptron was a{" "}
                <b>week long Introduction to ML and Computer Vision workshop</b>
                . Starting with python fundamentals required for machine
                learning, we covered libraries like Numpy, Pandas then we moved
                onto Basic of Neural Networks and then CNNs. Lastly we covered
                Computer Vision specifically OpenCV Library
              </div>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
}
