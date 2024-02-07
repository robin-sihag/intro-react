import React from "react";
import "./SideNav.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faHome, faUser, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

const SideNav = (props) => {
  return (
    <>
      <div className="sidenav-wrapper">
        <div className="navigation-link ">
          <NavLink
            exact="true"
            className={({ isActive }) =>
              isActive ? "active-class" : "non-active-class"
            }
            to="/"
          >
            <FontAwesomeIcon icon={faHome} className="jump-on-hover"/>
          </NavLink>
          <NavLink
            exact="true"
            className={({ isActive }) =>
              isActive ? "active-class" : "non-active-class"
            }
            to="/about"
          >
            <FontAwesomeIcon icon={faUser} className="jump-on-hover" />
          </NavLink>
          <NavLink
            exact="true"
            className={({ isActive }) =>
              isActive ? "active-class" : "non-active-class"
            }
            to="/contact"
          >
            <FontAwesomeIcon icon={faEnvelope} className="jump-on-hover" />
          </NavLink>
        </div>
        <div className="personal-links">
          <a
            // href="https://github.com/robin-sihag"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
          </a>
          <a
            href="https://www.linkedin.com/in/robin-sihag-38158b17b/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
          </a>
        </div>
      </div>
    </>
  );
};

export default SideNav;
