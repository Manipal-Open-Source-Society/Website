import "./Contact.css";
import React, { useState, useEffect } from "react";
import { AiOutlineDoubleRight } from "react-icons/ai";
import { TiTick } from "react-icons/ti";

export default function Contact() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  useEffect(() => {
    
    if(count==4){
      setTimeout(()=>{
        window.location.reload();
      }, 5000);

    }
   
  }, [count])
  
  return (
    <div id="contact" className="contact-container">
      {count == 0 && (
        <div className="contact-h">
          Team MOSS is looking forward to getting in touch with you
        </div>
      )}
      {count == 1 && (
        <div className="contact-h">
          Please Tell Us Your Name
          <input
            placeholder=""
            onChange={(e) => setName(e.target.value)}
            className="c-form-inp"
          ></input>
        </div>
      )}
      {count == 2 && (
        <div className="contact-h">
          Hi {name}, could you please provide your email address
          <input
            placeholder=""
            onChange={(e) => setEmail(e.target.value)}
            className="c-form-inp"
          ></input>
        </div>
      )}
      {count == 3 && (
        <div className="contact-h">
          What would you like to talk to us regarding?
          <input
            placeholder=""
            onChange={(e) => setMsg(e.target.value)}
            className="c-form-inp"
          ></input>
        </div>
      )}
      {count == 4 && (
        <div className="contact-h">
          Thank you for reaching out to us, we will get back to you shortly.
        </div>
      )}
      <div className="">
        {count == 0 && (
          <button className="next-btn" onClick={() => setCount(count + 1)}>
            NEXT >
          </button>
        )}
        {count > 0 && count < 3 && (
          <button className="next-btn-2" onClick={() => setCount(count + 1)}>
            <AiOutlineDoubleRight className="dr" />
          </button>
        )}
        {count == 3 && (
          <button className="next-btn-2" onClick={() => setCount(count + 1)}>
            <TiTick className="dr" />
          </button>
        )}
      </div>
      <>
        {/* <video width="750" height="500" controls >
      <source src={video} type="video/mp4"/>
     </video> */}
      </>
    </div>
  );
}
