import React, { useState, useEffect } from 'react';
import "./aboutme.css";
import { InfinitySpin } from 'react-loader-spinner'

import profile_img from "../../assets/profile-img.jpg";
import {
  faAngular,
  faCss3,
  faHtml5,
  faJs,
  faNode,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AboutMe = (props) => {
  const IconColor = "#ffd43b";
  
  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    const animationTimeout = setTimeout(() => {
      setShowLoading(false);
    }, 2000); 

    return () => clearTimeout(animationTimeout);
  }, []);
  return (

    <>


{showLoading && <div className="loading-animation">      <InfinitySpin color="orange"  />
</div>}
      {!showLoading && (
        <div className="about-me-wrapper">
        <div className="heading">About Me</div>
        <div className="about-me-text">
          <img
            src={profile_img}
            alt="PROFILE_IMAGE"
            height={200}
            width={200}
          ></img>
          <div className="desc">
            MCA Batch of 2020 <br /> VESIT, University of Mumbai <br />
            Software developer with experience in building interactive and
            responsive web-based solutions <br />
            <br />
          </div>
        </div>
        <div className="icons-gallery">
          <FontAwesomeIcon icon={faReact} color={IconColor} />
          <FontAwesomeIcon icon={faAngular} color={IconColor} />
          <FontAwesomeIcon icon={faNode} color={IconColor} />
          <FontAwesomeIcon icon={faHtml5} color={IconColor} />
          <FontAwesomeIcon icon={faCss3} color={IconColor} />
          <FontAwesomeIcon icon={faJs} color={IconColor} />
        </div>
        <div className="closing-text">
          {/* I'm quiet confident, naturally curious, and perpetually working on
          improving my chops one problem at a time.
          <br />
          If I need to define myself in one sentence that would be a marvel fan,
          a sports fanatic, and tech-obsessed.
          <br /> */}
          I am always learning new technologies to grow my this list of mine.
          Motivation to do that? Well i just like to know how things work <br />
          Passionate about exploring the great outdoors, I find solace in bike
          trips and hiking adventures, embracing the raw beauty of nature. An
          avid technology enthusiast, I thrive on staying at the forefront of
          innovations that shape our world. Constantly seeking new experiences,
          I approach life with curiosity and an open mind. Whether conquering
          challenging trails or immersing myself in the latest technological
          developments, I believe in the power of growth through exploration.
          This blend of outdoor escapades and tech-driven curiosity defines my
          journey, and I eagerly look forward to discovering the uncharted
          realms that life has to offer
        </div>
      </div>
      )}
      
    </>
  );
};

export default AboutMe;
