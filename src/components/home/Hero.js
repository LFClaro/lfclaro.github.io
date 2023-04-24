import React from "react";
import SocialIcon from "./SocialIcon.js";

import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion'

function Hero(props) {
  const { fullName, titles, tagline, email, socials } = props;

  const titlesList = [1000, fullName]

  titles.map((title) => titlesList.push(3000, title));

  // titles.array.forEach(t => {
  //   titlesList.push(3000, t);
  // });

  titlesList.push(1000, '');

  return (
    <motion.div className="hero">
      <h1 className='display-5'>Hello there!<span className="hand">🤚</span></h1>
      <h2 className='display-5'>
        <motion.span initial={{ opacity: window.innerWidth < 996 ? '100%' : '0%' }} animate={{ opacity: '100%' }} transition={{ delay: '0.3', duration: '2' }}>
          I'm &nbsp;
        </motion.span>
        <motion.span initial={{ opacity: window.innerWidth < 996 ? '100%' : '0%' }} animate={{ opacity: '100%' }} transition={{ delay: '0.5', duration: '2' }} exit={{ opacity: '0%', y: '200%' }}>
          &#60;
          <TypeAnimation cursor={true} sequence={titlesList} repeat={Infinity} className='block' />
          &nbsp;/&#62;
        </motion.span>
      </h2>
      <motion.p className='lead fw-bold' initial={{ opacity: window.innerWidth < 996 ? '100%' : '0%' }} animate={{ opacity: '100%' }} transition={{ delay: '2', duration: '2' }}>
        {tagline}
      </motion.p>
      <motion.div className="p-5" initial={{ opacity: window.innerWidth < 996 ? '100%' : '0%' }} animate={{ opacity: '100%' }} transition={{ delay: '2', duration: '2' }}>
        {socials.map((social, index) => (
          <SocialIcon
            key={index}
            url={social.url}
            name={social.name}
          />
        ))}
      </motion.div>
      <motion.div className="p-5" initial={{ opacity: window.innerWidth < 996 ? '100%' : '0%' }} animate={{ opacity: '100%' }} transition={{ delay: '2', duration: '2' }}>
        <a
          className="btn btn-outline-light btn-lg "
          href={`mailto:${email}`}
          target="_blank"
          rel="noreferrer noopener"
          role="button"
          aria-label="Learn more about me"
        >
          Let's talk!
        </a>
      </motion.div>
    </motion.div>
  );
}
export default Hero;