import React, { useState, useEffect } from "react";
import { useScrollPosition } from "../hooks/useScrollPosition.js";
import useResizeObserver from "../hooks/useResizeObserver.js";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { mainInfo, about, skills, hobbies, portfolio, experience } from "../MyData.js";
import { NavLink } from "./home/migration.js";

const Navigation = React.forwardRef((props, ref) => {
  // const { showBlog, FirstName } = config;
  const [scrolling, setScrolling] = useState(false);
  const navbarMenuRef = React.useRef();

  const pictureLinkRegex = new RegExp(
    /[(http(s)?):(www.)?a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/
  );

  const [logoUrl, setLogoUrl] = React.useState("");
  const [showPic, setShowPic] = React.useState(Boolean(mainInfo.logo));
  useEffect(() => {
    if (!mainInfo.logo && !pictureLinkRegex.test(mainInfo.logo)) {
      setShowPic(false);
    } else {
      setLogoUrl(mainInfo.logo);
    }
  }, [mainInfo.logo]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const navbarStyle = {
    backgroundColor: scrolling ? 'rgba(0, 0, 0, 0.8)' : 'transparent',
    transition: 'background-color 0.5s ease',
  };

  return (
    <Navbar
      ref={navbarMenuRef}
      className={`px-3 fixed-top`}
      style={navbarStyle}
      expand="lg"
      // variant={!isTop ? "light" : "dark"}
    >
      <Navbar.Brand className="navbar-brand" href={process.env.PUBLIC_URL + "/#home"}>
        {showPic ? (
          <img
            src={logoUrl}
            alt="logo"
            height="36"
          />
        ) : (
          `<${mainInfo.initials} />`
        )}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" className="toggler" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto justify-content-end">
          {/* {
            <NavLink className="nav-item lead">
              <Link to={process.env.PUBLIC_URL + "/blog"}>Blog</Link>
            </NavLink>
          } */}
          <NavLink
            className="nav-item lead px-2"
            href={about.resume}
            target="_blank"
            rel="noreferrer noopener"
          >
            RESUME
          </NavLink>
          {about.show && (
            <NavLink
              className="nav-item lead px-2"
              href={process.env.PUBLIC_URL + "/#aboutme"}
            >
              ABOUT
            </NavLink>
          )}
          {skills.show && (
            <NavLink
              className="nav-item lead px-2"
              href={process.env.PUBLIC_URL + "/#skills"}
            >
              SKILLS
            </NavLink>
          )}
          {portfolio.show && (
            <NavLink
              className="nav-item lead px-2"
              href={process.env.PUBLIC_URL + "/#projects"}
            >
              PROJECTS
            </NavLink>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
});

export default Navigation;
