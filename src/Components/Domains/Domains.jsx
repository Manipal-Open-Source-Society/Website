import React, { useState, useEffect } from "react";
import "./Domains.css";
import devIcon from "../../assets/icons/devIcon.png";
import csIcon from "../../assets/icons/csIcon.png";
import aiIcon from "../../assets/icons/aiIcon.png";
import designIcon from "../../assets/icons/designIcon.png";
import smIcon from "../../assets/icons/smIcon.png";

import cs from "../../assets/cs.png";
import dev from "../../assets/dev.png";
import ai from "../../assets/ai.png";
import design from "../../assets/design.png";
import sm from "../../assets/sm.png";

export default function Domains() {
  const imgs = {
    cs: cs,
    dev: dev,
    ai: ai,
    design: design,
    sm: sm,
  };
  const [highlight, setHighlight] = useState("cs");

  useEffect(() => {
    const t = setTimeout(() => {
      if (highlight == "cs") {
        setHighlight("ai");
      }
      if (highlight == "ai") {
        setHighlight("dev");
      }
      if (highlight == "dev") {
        setHighlight("design");
      }
      if (highlight == "design") {
        setHighlight("sm");
      }
      if (highlight == "sm") {
        setHighlight("cs");
      }
    }, 2000);

    return () => {
      clearTimeout(t);
    };
  });

  return (
    <div className="domain-container" id="domains">
      <div className="domains-title">Domains</div>
      <div className="domain-box">
        <div className="domain-left">
          <div className="domain-leftBox">
            <div
              className={
                highlight == "cs" ? "domain-listItem-h" : "domain-listItem"
              }
            >
              <img
                src={csIcon}
                className={highlight == "cs" ? "domain-icon-h" : "domain-icon"}
              />
              Core Software
            </div>
            <div
              className={
                highlight == "ai" ? "domain-listItem-h" : "domain-listItem"
              }
            >
              <img
                src={aiIcon}
                className={highlight == "ai" ? "domain-icon-h" : "domain-icon"}
              />{" "}
              AI/ML
            </div>
            <div
              className={
                highlight == "dev" ? "domain-listItem-h" : "domain-listItem"
              }
            >
              <img
                src={devIcon}
                className={highlight == "dev" ? "domain-icon-h" : "domain-icon"}
              />{" "}
              Dev
            </div>
            <div
              className={
                highlight == "design" ? "domain-listItem-h" : "domain-listItem"
              }
            >
              <img
                src={designIcon}
                className={
                  highlight == "design" ? "domain-icon-h" : "domain-icon"
                }
              />{" "}
              Design
            </div>
            <div
              className={
                highlight == "sm" ? "domain-listItem-h" : "domain-listItem"
              }
            >
              <img
                src={smIcon}
                className={highlight == "sm" ? "domain-icon-h" : "domain-icon"}
              />{" "}
              SM & Content
            </div>
          </div>
        </div>
        <div className="domain-right">
          <div className="domain-rightBox">
            <img src={imgs[highlight]} className="right-img" />
          </div>
        </div>
      </div>
    </div>
  );
}
