import React from "react";
import "./PastEvents.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Carousel from "react-bootstrap/Carousel";
import talk1 from '../../assets/events/talk1.jpg'
import talk2 from '../../assets/events/talk2.jpg'
import talk3 from '../../assets/events/talk3.jpg'


import p1 from '../../assets/events/p1.jpeg'
import p2 from '../../assets/events/p2.jpeg'
import p3 from '../../assets/events/p3.jpeg'

export default function PastEvents() {
  return (
    <div className="events-container" id="events-car">
      <div className="events-title">Our Past Events</div>
      <div className="events-carousel-container">
        <Carousel id="events-car" interval={6000}>
          <Carousel.Item>
            <div className="events-carousel">
              <div className="event-title">Gateway To Open Source</div>
              <div className="event-date">11th Feb 2023</div>
              <hr />
              <div className="event-carousel-box">
                <div className="events-card-left">
                  <Carousel id="individal-car" interval={1000}>
                    <Carousel.Item>
                      <img
                        className="d-block w-100 events-ind-car-im"
                        src={talk1}
                        alt="First slide"
                      />

                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        className="d-block w-100 events-ind-car-im"
                        src={talk2}
                        alt="First slide"
                      />

                    </Carousel.Item>

                    <Carousel.Item>
                      <img
                        className="d-block w-100 events-ind-car-im"
                        src={talk3}
                        alt="First slide"
                      />

                    </Carousel.Item>


                  </Carousel>
                </div>
                <div className="events-card-right">
                  <a
                    href="https://www.linkedin.com/in/avinal/"
                    target={"_blank"}
                  >
                    <b>Avinal Kumar </b>
                  </a>
                  and
                  <a
                    href="https://www.linkedin.com/in/bhanvi-menghani/"
                    target={"_blank"}
                  >
                    <b> Bhanavi Meghani</b>
                  </a>
                  , both associate software engineers at Red Hat, were invited
                  for an online talk on
                  <b>"Gateway to Open Source"</b>. During the event, they
                  discussed the benefits of open source software, how to
                  contribute to open source projects, and provided tips on
                  getting started. They also shared their own experiences
                  working in open source, including the challenges and rewards.
                  The event was well-received by 80+ attendees who attended the
                  event in offline mode and were keenly interested in learning
                  more about open source and how to become involved in the
                  community.
                </div>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="events-carousel">
              <div className="event-title">Perceptron</div>
              <div className="event-date">10th-15th March 2022</div>
              <hr />
              <div className="event-carousel-box">
                <div className="events-card-left">
                  <Carousel id="individal-car" interval={1000}>
                    <Carousel.Item>
                      <img
                        className="d-block w-100 events-ind-car-im"
                        src={p1}
                        alt="First slide"
                      />

                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        className="d-block w-100 events-ind-car-im"
                        src={p2}
                        alt="First slide"
                      />

                    </Carousel.Item>

                    <Carousel.Item>
                      <img
                        className="d-block w-100 events-ind-car-im"
                        src={p3}
                        alt="First slide"
                      />

                    </Carousel.Item>


                  </Carousel>
                </div>
                <div className="events-card-right">
                  Perceptron was a
                  <b>
                    {" "}
                    week long Introduction to ML and Computer Vision workshop
                  </b>
                  . Starting with python fundamentals required for machine
                  learning, we covered libraries like Numpy, Pandas then we
                  moved onto Basic of Neural Networks and then CNNs. Lastly we
                  covered Computer Vision specifically OpenCV Library
                </div>
              </div>
            </div>
          </Carousel.Item>

        </Carousel>
      </div>
    </div>
  );
}
