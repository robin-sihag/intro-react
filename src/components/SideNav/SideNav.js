import React from "react";
import "./SideNav.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import { faHome, faUser, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Link, NavLink } from 'react-router-dom'

const SideNav = (props) => {
  return (
    <>
      <div className="sidenav-wrapper">
        <div className="navigation-link">

        <NavLink exact="true" activeclassname="active" to="/"> 
        <FontAwesomeIcon icon={faHome} color="#4d4d4e" />

        </NavLink>
        <NavLink exact="true" activeclassname="active" to="/about"> 
        <FontAwesomeIcon icon={faUser} color="#4d4d4e" />

        </NavLink><NavLink exact="true" activeclassname="active" to="/contact"> 
        <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />

        </NavLink>
        
        </div>
        <div className="personal-links">
        <a
            href="https://github.com/robin-sihag"
            target="_blank"
            rel="noreferrer"
          >            <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
          </a>
          <a
            href="https://www.linkedin.com/in/robin-sihag-38158b17b/"
            target="_blank"
            rel="noreferrer"
          >            <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
          </a>
        </div>
      </div>
    </>
  );
};

export default SideNav;
