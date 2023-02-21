import React from "react";
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

const DomainsMobile = () => {
  return (
    <div className="domain-container" id="domains">
      <div className="domains-title">DOMAINS</div>
      <div className="domain-box">
        <div className="domain-listItem">
          <div>
            <img
              src={csIcon}
              className={"domain-icon"}
              alt={"core-software-icon"}
            />
            Core Software
          </div>
          <img src={cs} className="right-img" alt="core-software" />
        </div>
        <div className="domain-listItem">
          <div>
            <img src={aiIcon} className={"domain-icon"} alt={"ai-icon"} />
            AI/ML
          </div>
          <img src={ai} className="right-img" alt="ai" />
        </div>
        <div className="domain-listItem">
          <div>
            <img src={devIcon} className={"domain-icon"} alt={"dev-icon"} />
            Dev
          </div>
          <img src={dev} className="right-img" alt="dev" />
        </div>
        <div className="domain-listItem">
          <div>
            <img
              src={designIcon}
              className={"domain-icon"}
              alt={"design-icon"}
            />
            Design
          </div>
          <img src={design} className="right-img" alt="design" />
        </div>
        <div className="domain-listItem">
          <div>
            <img src={smIcon} className={"domain-icon"} alt={"sm-icon"} />
            SM & Content
          </div>
          <img src={sm} className="right-img" alt="sm & content" />
        </div>
      </div>
    </div>
  );
};

export default DomainsMobile;
