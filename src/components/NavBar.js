import React, { useState } from "react";
import { useScrollPosition } from "../hooks/useScrollPosition.js";
import useResizeObserver from "../hooks/useResizeObserver.js";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { mainInfo, about, skills, hobbies, portfolio, experience } from "../MyData.js";
import { NavLink } from "./home/migration.js";

const Navigation = React.forwardRef((props, ref) => {
  // const { showBlog, FirstName } = config;
  const [isTop, setIsTop] = useState(true);
  const [scrollPosition, setScrollPosition] = useState(0);
  const navbarMenuRef = React.useRef();
  const navbarDimensions = useResizeObserver(navbarMenuRef);
  const navBottom = navbarDimensions ? navbarDimensions.bottom : 0;

  const pictureLinkRegex = new RegExp(
    /[(http(s)?):(www.)?a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/
  );

  const [logoUrl, setLogoUrl] = React.useState("");
  const [showPic, setShowPic] = React.useState(Boolean(mainInfo.logo));
  React.useEffect(() => {
    if (!mainInfo.logo && !pictureLinkRegex.test(mainInfo.logo)) {
      setShowPic(false);
    } else {
      setLogoUrl(mainInfo.logo);
    }
  }, [mainInfo.logo]);

  useScrollPosition(
    ({ prevPos, currPos }) => {
      if (!navbarDimensions) return;
      currPos.y + ref.current - navbarDimensions.bottom > 5
        ? setIsTop(true)
        : setIsTop(false);
      setScrollPosition(currPos.y);
    },
    [navBottom]
  );

  React.useEffect(() => {
    if (!navbarDimensions) return;
    navBottom - scrollPosition >= ref.current
      ? setIsTop(false)
      : setIsTop(true);
  }, [navBottom, navbarDimensions, ref, scrollPosition]);

  return (
    <Navbar
      ref={navbarMenuRef}
      className={`px-3 fixed-top  ${!isTop ? "navbar-white" : "navbar-transparent"
        }`}
      expand="lg"
      variant={!isTop ? "light" : "dark"}
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
        <Nav className="navbar-nav mr-auto">
          {/* {
            <NavLink className="nav-item lead">
              <Link to={process.env.PUBLIC_URL + "/blog"}>Blog</Link>
            </NavLink>
          } */}
          <NavLink
            className="nav-item lead fw-bold"
            href={about.resume}
            target="_blank"
            rel="noreferrer noopener"
          >
            Resume
          </NavLink>
          {about.show && (
            <NavLink
              className="nav-item lead fw-bold"
              href={process.env.PUBLIC_URL + "/#aboutme"}
            >
              About
            </NavLink>
          )}
          {skills.show && (
            <NavLink
              className="nav-item lead fw-bold"
              href={process.env.PUBLIC_URL + "/#skills"}
            >
              Skills
            </NavLink>
          )}
          {portfolio.show && (
            <NavLink
              className="nav-item lead fw-bold"
              href={process.env.PUBLIC_URL + "/#projects"}
            >
              Projects
            </NavLink>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
});

export default Navigation;
