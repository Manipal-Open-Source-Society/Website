import React, { useEffect } from "react";
import TopNav from "../../Components/Navbar/Navbar";
import "./Landing.css";
import logo from "../../assets/logo.png";
import l1 from "../../assets/1.png";
import l2 from "../../assets/2.png";
import l3 from "../../assets/3.png";
import l4 from "../../assets/4.png";
import btn_bg from "../../assets/btn_bg.png";
import arrow from "../../assets/arrow.png";

export default function Landing() {
  useEffect(() => {
    const canvas = document.getElementById("binary-canvas");
    const ctx = canvas.getContext("2d");
    let raf;

    ctx.canvas.width = window.innerWidth;
    ctx.canvas.height = window.innerHeight;

    ctx.font = "14px Arial";
    ctx.fillStyle = "#444444";

    const fontSize = 14;
    const columns = Math.floor(canvas.width / fontSize);
    const rows = Math.floor(canvas.height / fontSize);

    const binChars = ["0", "1"];
    const bits = [];
    const bitHeight = fontSize;
    const bitWidth = fontSize;

    // Populate array of 'bits'
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < columns; c++) {
        bits.push({
          x: c * bitWidth,
          y: r * bitHeight,
          value: binChars[Math.floor(Math.random() * binChars.length)],
          hasDrawn: false,
        });
      }
    }

    // Vars for manually calculating frame rate
    const fps = 5;
    const interval = 1000 / fps;
    let now;
    let then = Date.now();
    let delta;

    // Draw all bits once before starting animation
    for (let bit of bits) {
      ctx.clearRect(bit.x, bit.y, bitWidth, bitHeight);
      ctx.fillText(bit.value, bit.x, bit.y + bitHeight);
      bit.hasDrawn = true;
    }

    function draw() {
      raf = window.requestAnimationFrame(draw);
      now = Date.now();
      delta = now - then;

      if (delta > interval) {
        for (let bit of bits) {
          if (bit.hasDrawn === true && Math.random() * 100 > 95) {
            // If passes the randomness check
            let newVal = bit.value === binChars[1] ? binChars[0] : binChars[1];

            ctx.clearRect(bit.x, bit.y, bitWidth, bitHeight);
            ctx.fillText(newVal, bit.x, bit.y + bitHeight);
            bit.value = newVal;
          }
        }
        then = now - (delta % interval);
      }
    }
    draw();
  }, []);
  var i = 0;
  const changeColour = (i) => {
    // const arr = ['#2aa536', '#122914', '#246d6d']
    const arr = ["#68a977b1", "#2e4f30e3", "#43dc5094"];
    const canvas = document.getElementById("binary-canvas");
    const ctx = canvas.getContext("2d");
    if (i > 2) {
      i = i % 3;
    }
    ctx.fillStyle = arr[i];
  };

  setInterval(() => {
    changeColour(i);
    i = i + 1;
  }, 2000);

  return (
    <>
      <img src={logo} className="landing-logo" />
      <div className="home_box">
        <canvas id="binary-canvas" style={{ zIndex: 3, position: "fixed" }} />
        <div className="landing-title">
          <div className="images">
            <img src={l1} className="title-img" />
          </div>
          <div className="images">
            <img src={l2} className="title-img" id="img-o" />
          </div>
          <div className="images">
            <img src={l3} className="title-img" id="img-s1" />
          </div>
          <div className="images">
            <img src={l4} className="title-img" id="img-s2" />
          </div>
        </div>
        <div className="landing-div">
          <img src={btn_bg} className={"btn_bg"} />
          <a href="/home">
            <img src={arrow} className={"arrow"} />
          </a>
        </div>
      </div>
    </>
  );
}
