import React, { useState, useRef } from 'react';
import { Route, Routes } from "react-router-dom";
import LazyLoad from 'react-lazy-load';

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
         <LazyLoad width={"100%"} threshold={0.95}>
            {about.show && (
               <About
                  heading={about.heading}
                  bio={about.bio}
                  link={about.profilePictureLink}
                  imgSize={about.imageSize}
                  resume={about.resume}
               />
            )}
         </LazyLoad>
         {hobbies.show && (
            <Hobbies
               heading={hobbies.heading}
               content={hobbies.content}
            />
         )}
         <LazyLoad width={"100%"} threshold={0.95}>
            {skills.show && (
               <Skills
                  heading={skills.heading}
                  skillList={skills.skillList}
               />
            )}
         </LazyLoad>
         <LazyLoad width={"100%"} threshold={0.95}>
         {portfolio.show && (
            <Portfolio
               heading={portfolio.heading}
               username={portfolio.gitHubUsername}
               length={portfolio.reposLength}
               specific={portfolio.specificRepos}
               content={portfolio.content}
            />
         )}
         </LazyLoad>
         <LazyLoad width={"100%"} threshold={0.95}>
         {experience.show && (
            <Experience
               heading={experience.heading}
               content={experience.content}
            />
         )}
         </LazyLoad>
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
