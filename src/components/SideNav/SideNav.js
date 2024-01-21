import React from "react";
import "./SideNav.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import { faHome, faUser, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const SideNav = (props) => {
  return (
    <>
      <div className="sidenav-wrapper">
        <div className="navigation-link">
          <a href="">
            <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
          </a>
          <a href="">
            <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
          </a>
          <a href="">
            <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
          </a>
        </div>
        <div className="personal-links">
          <a href="">
            <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
          </a>
          <a href="">
            <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
          </a>
        </div>
      </div>
    </>
  );
};

export default SideNav;
