import React, { useState, useRef } from 'react';
import LazyLoad from 'react-lazy-load';
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

const Home = React.forwardRef((props, ref) => {
   return (
      <>
         <Main
            wallpapers={mainInfo.wallpapers}
            gradient={mainInfo.gradient}
            fullName={`${mainInfo.firstName} ${mainInfo.middleName} ${mainInfo.lastName}`}
            titles={mainInfo.titles}
            email={mainInfo.email}
            tagline={mainInfo.tagline}
            socials={mainInfo.socials}
            ref={ref}
         />
         {about.show && (
            <LazyLoad width={"100%"} threshold={0.95}>
               <About
                  heading={about.heading}
                  bio={about.bio}
                  link={about.profilePictureLink}
                  imgSize={about.imageSize}
                  resume={about.resume}
               />
            </LazyLoad>
         )}
         {skills.show && (
            <LazyLoad width={"100%"} threshold={0.95}>
               <Skills
                  heading={skills.heading}
                  skillList={skills.skillList}
               />
            </LazyLoad>
         )}
         {portfolio.show && (
            <LazyLoad width={"100%"} threshold={0.95}>
               <Portfolio
                  heading={portfolio.heading}
                  username={portfolio.gitHubUsername}
                  length={portfolio.reposLength}
                  specific={portfolio.specificRepos}
                  content={portfolio.content}
               />
            </LazyLoad>
         )}
         {experience.show && (
            <LazyLoad width={"100%"} threshold={0.95}>
               <Experience
                  heading={experience.heading}
                  content={experience.content}
               />
            </LazyLoad>
         )}
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
