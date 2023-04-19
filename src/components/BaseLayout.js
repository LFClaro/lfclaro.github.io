import React from 'react';
import { Route, Routes } from "react-router-dom";

// User data & preferences
import {
   mainInfo, about, skills, hobbies, portfolio, experience
} from '../MyData.js';
// Components
import Main from "./home/Main.js";
import About from "./home/About.js";
import Skills from "./home/Skills.js";
import Hobbies from "./home/Hobbies.js";
import Portfolio from "./home/Portfolio.js";
import Experience from "./home/Experience.js";

// import {Box, Grid} from "@mui/material";

const Home = React.forwardRef((props, ref) => {
   return (
      <>
         <Main
            gradient={mainInfo.gradient}
            fullName={`${mainInfo.firstName} ${mainInfo.middleName} ${mainInfo.lastName}`}
            titles={mainInfo.titles}
            email={mainInfo.email}
            tagline={mainInfo.tagline}
            socials={mainInfo.socials}
            ref={ref}
         />
         {about.show && (
            <About
               heading={about.heading}
               bio={about.bio}
               link={about.profilePictureLink}
               imgSize={about.imageSize}
               resume={about.resume}
            />
         )}
         {/* {hobbies.show && (
            <Hobbies
               heading={hobbies.heading}
               content={hobbies.content}
            />
         )} */}
         {/* {skills.show && (
            <Skills
               heading={skills.heading}
               proficientWith={skills.proficientWith}
               exposedTo={skills.exposedTo}
            />
         )} */}
         {/* {portfolio.show && (
            <Portfolio
               heading={portfolio.heading}
               username={portfolio.gitHubUsername}
               length={portfolio.reposLength}
               specific={portfolio.specificRepos}
               content={portfolio.content}
            />
         )} */}
         {experience.show && (
            <Experience
               heading={experience.heading}
               content={experience.content}
            />
         )
         }
      </>
   );
});

const BaseLayout = () => {
   const titleRef = React.useRef();

   return (
         <Routes >
            <Route path="/" exact element={<Home ref={titleRef} />} />
         </Routes>
         /* {false && <Route path="/blog" exact component={Blog} />}
         {false && <Route path="/blog/:id" component={BlogPost} />} */
   );
};

export default BaseLayout;
