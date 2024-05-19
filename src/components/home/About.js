import React from "react";
import LazyLoad from 'react-lazy-load';
import { Jumbotron } from "./migration";
import { TypeAnimation } from 'react-type-animation';

// User data & preferences
import { hobbies } from '../../MyData.js';
import Hobbies from "./Hobbies.js";

const pictureLinkRegex = new RegExp(
  /[(http(s)?):(www.)?a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/
);

const parseHtml = require('html-react-parser');

const AboutMe = ({ heading, bio, link, imgSize, resume }) => {
  const [profilePicUrl, setProfilePicUrl] = React.useState("");
  const [showPic, setShowPic] = React.useState(Boolean(link));
  // https://stackoverflow.com/questions/55840294/how-to-fix-missing-dependency-warning-when-using-useeffect-react-hook
  React.useEffect(() => {
    const handleRequest = async () => {
      const githubLink = "https://avatars.githubusercontent.com/";
      try {
        setProfilePicUrl(githubLink + link);
      } catch (error) {
        setShowPic(false);
        console.error(error.message);
      }
    };

    if (link && !pictureLinkRegex.test(link)) {
      handleRequest();
    } else {
      setProfilePicUrl(link);
    }
  }, [link]);



  return (
    <Jumbotron id="aboutme" className="m-0">
      <div className="container row">
        <div className="col-5 d-none d-lg-block align-self-center">
          {showPic && (
            <img
              className="border border-secondary rounded-circle"
              src={profilePicUrl}
              alt="profilepicture"
              width={imgSize}
              height={imgSize}
            />
          )}
        </div>
        <div className={`col-lg-${showPic ? "7" : "12"}`}>
          <h2 className="display-4 pb-5 text-center text-dark">
            <TypeAnimation cursor={true} sequence={[heading, 3000, '']} repeat={Infinity} />
          </h2>
          <p className="lead text-center pb-5">{parseHtml(bio)}</p>
          {hobbies.show && (
            <LazyLoad width={"100%"} threshold={0.95}>
              <Hobbies
                heading={hobbies.heading}
                content={hobbies.content}
              />
            </LazyLoad>
          )}
          {resume && (
            <p className="lead text-center">
              <br />
              <a
                className="btn btn-outline-dark btn-lg"
                href={resume}
                target="_blank"
                rel="noreferrer noopener"
                role="button"
                aria-label="Resume/CV"
              >
                View my Resume
              </a>
            </p>
          )}
        </div>
      </div>
    </Jumbotron>
  );
};

export default AboutMe;
