import React from "react";
import "./AnimatedText.css";
import { useState, useEffect } from "react";

const AnimatedText = (props) => {
  const [line1, setLine1] = useState("");
  const [line2, setLine2] = useState("");
  const [line3, setLine3] = useState("");

  const text1 = "Hi,";
  const text2 = "I'm Robin Sihag";
  const text3 = "Software Engineer";

  useEffect(() => {
    const typeLine = (text, setLine) => {
      for (let i = 0; i <= text.length; i++) {
        setTimeout(() => {
          setLine(text.substring(0, i));
        }, 100 * i);
      }
    };

    typeLine(text1, setLine1);

    setTimeout(() => {
      typeLine(text2, setLine2);
    }, text1.length * 100);

    setTimeout(() => {
      typeLine(text3, setLine3);
    }, (text1.length + text2.length) * 100);
  }, []);

  return (
    <>
      <div className="bg"></div>
      <div className="bg bg2"></div>
      <div className="bg bg3"></div>

      <div className="animated-text-wrapper">
        <div className="animated-text jump-on-hover">
          <div>{line1} </div>
          <div>{line2} </div>
          <div>{line3} </div>

          <p className="ed-details">
            VESIT, University of Mumbai
            <br /> Batch of 2020
          </p>
        </div>
      </div>
    </>
  );
};

export default AnimatedText;
