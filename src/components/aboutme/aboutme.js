import React, { useState, useEffect } from "react";
import "./aboutme.css";
import { InfinitySpin } from "react-loader-spinner";
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
    }, 1000);

    return () => clearTimeout(animationTimeout);
  }, []);
  return (
    <>
      {showLoading && (
        <div className="loading-animation">
          <InfinitySpin color="orange" />
        </div>
      )}
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
            <FontAwesomeIcon
              className="jump-on-hover"
              icon={faReact}
              color={IconColor}
            />
            <FontAwesomeIcon
              className="jump-on-hover"
              icon={faAngular}
              color={IconColor}
            />
            <FontAwesomeIcon
              className="jump-on-hover"
              icon={faNode}
              color={IconColor}
            />
            <FontAwesomeIcon
              className="jump-on-hover"
              icon={faHtml5}
              color={IconColor}
            />
            <FontAwesomeIcon
              className="jump-on-hover"
              icon={faCss3}
              color={IconColor}
            />
            <FontAwesomeIcon
              className="jump-on-hover"
              icon={faJs}
              color={IconColor}
            />
          </div>
          <div className="closing-text">
            I am always learning new things to grow this little list of mine.
            Motivation to do that? Well i just like to know how things work
            <br />
            Outside of this virtual world, i like exploring the great outdoors,
            i find adventure in slow revving bikes, hiking mountains and talking
            to people who are different than me. As an avid technology
            enthusiast, I like to keep up with the innovations that shape our
            world. I am constantly seeking new experiences and I like to
            approach life with curiosity and an open mind. Whether conquering
            challenging trails or immersing myself in the latest technological
            developments, I believe in growth through exploration. This blend of
            outdoor escapades and tech-driven curiosity defines my journey, and
            I eagerly look forward to discovering the undiscovered adventures
            that life has to offer
          </div>
        </div>
      )}
    </>
  );
};

export default AboutMe;
