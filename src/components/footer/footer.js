import React from "react";
import workinggif from "../../assets/working.gif";
import "./footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer-wrapper">
        <div className="under-con">
          <img src={workinggif} alt="hammer" height={100} width={100}></img>
          <div className="disclaimer">
            Under construction: Excuse the virtual chaos
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
