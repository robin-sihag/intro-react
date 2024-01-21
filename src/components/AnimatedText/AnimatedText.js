import React from "react";
import "./AnimatedText.css";
import workinggif from "../../assets/working.gif";
const AnimatedText = (props) => {
  return (
    <>
      <div className="animated-text-wrapper">
        <div className="animated-text jump-on-hover">
          Hi, <br />
          I'm Robin Sihag <br />
          Software Developer <br />
        </div>
        <div className="under-con">
          <img src={workinggif} height={100} width={100}></img>
          <div className="disclaimer">
            I know it doesn't look the best, but I am working on it
          </div>
        </div>
      </div>
    </>
  );
};

export default AnimatedText;
