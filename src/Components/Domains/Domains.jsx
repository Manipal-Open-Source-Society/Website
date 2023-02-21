import React, { useState, useEffect } from "react";
import DomainsMobile from "./DomainsMobile";
import DomainsWeb from "./DomainsWeb";

const Domains = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 768;

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);

    // Return a function from the effect that removes the event listener
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return width < breakpoint ? <DomainsMobile /> : <DomainsWeb />;
};

export default Domains;
