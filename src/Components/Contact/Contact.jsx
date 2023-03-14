import "./Contact.css";
import React, { useState, useEffect } from "react";
import {
  AiOutlineDoubleRight,
  AiFillLinkedin,
  AiFillInstagram,
} from "react-icons/ai";
import { BsMedium } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { TiTick } from "react-icons/ti";
import robot from "../../assets/robot.gif";
import tyRobot from "../../assets/ty-robot.png";
export default function Contact() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const updateCount = (c) => {
    document.getElementById(`c${c}`).style.opacity = 0;
    document.getElementById(`btn-id`).style.opacity = 0;

    setTimeout(() => {
      setCount(count + 1);
      setTimeout(() => {
        document.getElementById(`c${c + 1}`).style.opacity = 1;
        document.getElementById(`btn-id`).style.opacity = 1;
      }, 500);
    }, 500);
  };
  useEffect(() => {
    if (count == 4) {
      setTimeout(() => {
        window.location.reload();
      }, 5000);
    }
  }, [count]);
  const handleKeyDown = (e) => {
    if (count == 1) {
      if (name) {
        if (e.key === 'Enter') {
          updateCount(count)
        }
      }

    }
    if (count == 2) {
      if (email) {
        if (e.key === 'Enter') {
          updateCount(count)
        }
      }

    }
    if (count == 3) {
      if (msg) {
        if (e.key === 'Enter') {
          updateCount(count)
        }
      }

    }
  }
  return (
    <div id="contact" className="contact-container">
      <form action="https://formsubmit.co/mossmanipal@gmail.com" method="POST">
      <input type="hidden" name="_subject" value="Website Contact Form Submission"/>
      <input type="hidden" name="_captcha" value="false"/>
      <input type="hidden" name="_autoresponse" value="Thank you for reaching out to us. We will get back to you shortly."/>
      <input type="hidden" name="_template" value="box"/>

      {count == 0 && <div className="contact-title">Contact Us</div>}
      {count == 0 && (
        <div className="contact-h3" id={"c0"}>
          Team MOSS is looking forward to getting in touch with you
        </div>
      )}
      {count == 1 && (
        <>

          <div className="contact-h" id={"c1"}>
            Please Tell Us Your Name
          </div>
          <div>
            <input
              placeholder=""
              onChange={(e) => setName(e.target.value)}
              className="c-form-inp"
              onKeyDown={(e) => { handleKeyDown(e) }}
              name="Name"
            ></input>
          </div>
        </>
      )}
      {count == 2 && (
        <>
          <div className="contact-h" id={"c2"}>
            Hi {name}, could you please provide your email address
          </div>
          <div>
            <input
              placeholder=""
              onChange={(e) => setEmail(e.target.value)}
              className="c-form-inp"
              onKeyDown={(e) => { handleKeyDown(e) }}
              type="email"
              name="email"
            ></input>
          </div>
        </>

      )}
      {count == 3 && (
        <>

          <div className="contact-h" id={"c3"}>
            What would you like to talk to us regarding?
          </div>
          <div>
            <input
              placeholder=""
              onChange={(e) => setMsg(e.target.value)}
              className="c-form-inp"
              onKeyDown={(e) => { handleKeyDown(e) }}
              name="Message"
            ></input>
          </div>
        </>

      )}
      {count == 4 && (
        <div className="ty">
          <img src={tyRobot} className="ty-robot" id={"c4"} />
          <div className="contact-h2">
            We have recieved your message, will get back to you shortly.
          </div>
        </div>
      )}
      <div>
        {count == 0 && (
          <button
          type={'button'}
            className="next-btn"
            style={{ opacity: 1 }}
            id="btn-id"
            onClick={() => updateCount(count)}
          >
            NEXT >
          </button>
        )}
        {count == 1 && (

          <div>

            <button
          type={'button'}
              className="next-btn-2"
              id="btn-id"
              onClick={() => updateCount(count)}
            >
              <AiOutlineDoubleRight className="dr" />
            </button>
          </div>
        )}
        {count == 2 && (

          <div>

            <button
          type={'button'}
              className="next-btn-2"
              id="btn-id"
              onClick={() => updateCount(count)}
            >
              <AiOutlineDoubleRight className="dr" />
            </button>
          </div>
        )}
        {count == 3 && (
          <div>

            <button
              className="next-btn-2"
              id="btn-id"
              onClick={() => updateCount(count)}
              type="submit"
            >
              <TiTick className="dr" />
            </button>
          </div>
        )}
        {count != 4 && <img src={robot} className="robot-gif" id={count==0 && 'robot-gif2'}/>}
      </div>
      </form>
      <div className="icon-container">
        <a
          href="https://www.linkedin.com/company/manipal-open-source-society/"
          target={"_blank"}
        >
          <AiFillLinkedin className="contact-icon" />
        </a>
        <a href="https://www.instagram.com/moss.manipal/" target={"_blank"}>
          <AiFillInstagram className="contact-icon" />
        </a>
        <a href="mailto:mossmanipal@gmail.com" target="_top">
          <MdEmail className="contact-icon" />
        </a>
        <a href="https://medium.com/@mossmanipal" target="_blank">
          <BsMedium className="contact-icon" />
        </a>
      </div>
    </div>
  );
}
