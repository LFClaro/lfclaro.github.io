import profilePic from "./assets/img/profile.png"
import logo from "./assets/img/logo.jpg"
import humber from "./assets/img/companies/humber.png"
import tojobs from "./assets/img/companies/torontojobs.jpeg"
import mock1 from "./assets/img/mocks/mock1.png"
import mock2 from "./assets/img/mocks/mock2.png"
import mock3 from "./assets/img/mocks/mock3.png"
import mock4 from "./assets/img/mocks/mock4.png"
import mock5 from "./assets/img/mocks/mock5.png"

// Styling
import variables from './scss/App.module.scss';


export let colors = [`${variables.blue}, ${variables.lightblue}, ${variables.orange}, ${variables.darkpurple}, ${variables.peach}, ${variables.lightergray}`];
/*
These colour come from variables stored in the variables.modules.scss and exported through App.module.scss.
Feel free to change and/or add new colours.
If you prefere, you can test gradients in a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */


const navBar = {
    show: true,
};

// MAIN INFORMATION SECTION
const mainInfo = {
    firstName: "Luiz",
    middleName: "",
    lastName: "Claro",
    email: "lfclaro@gmail.com",
    logo: logo, // If you prefer to just have your initials instead of a logo image, change this to "".
    initials: "LC", // The example uses first and last, but feel free to use three or more if you like.
    titles: [
        "a Mobile Developer",
        "a Frontend Developer",
        "a Backend Developer",
    ], // Add as many titles as you want for the animation in the splash page
    tagline: "Coding apps that will make you wonder why you haven't hired me yet.",
    gradient: `-webkit-linear-gradient(325deg, ${colors})`, // don't change this either
    baseColor: colors[0],

    socials: [
        {
            url: "https://www.instagram.com/lfclaro/",
            name: 'instagram'
        },
        {
            url: "https://github.com/LFClaro",
            name: 'github'
        },
        {
            url: "https://www.linkedin.com/in/luiz-claro/",
            name: 'linkedin'
        },
        // Feel free to remove any of these that you don't have. You can find icon names at https://simpleicons.org/
        // Just change the urls so that they lead to your social profiles.
    ],
}

// ABOUT SECTION
const about = {
    show: true, // Toggle whether you want to display this section or not
    heading: "About Me",
    bio: "I'm an app developer with a passion for combining cutting-edge technology with user-friendly design. With a background in audiovisual aesthetics, I bring a unique perspective to my work that allows me to create apps that look and feel great. I'm always thinking critically about how to make my apps more intuitive and engaging, and I'm constantly seeking out new opportunities to improve my skills and stay up-to-date with industry trends. I'm looking for full-time opportunities that allow me to bring my creativity and expertise to a collaborative team environment. Let's connect and create something amazing together!",
    resume: "https://drive.google.com/file/d/138XN2O8dLMopmYDY2GY7k2lwGEpbFyHd/view?usp=sharing", // get this link from any provider you host your resume at
    imageSize: 375,
    profilePictureLink: profilePic,
    /* If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
a) Substitute "assets/img/profile.png" for any image you upload to that folder and keep "profile" to import here,
b) Your Instagram username
     i.e:profilePictureLink:"johnDoe123",
c) A link to a hosted image
     i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
d) If you do not want any picture to be displayed, just leave it empty :)
     i.e: profilePictureLink: "",
For Resume either provide link to your resume or import from "assets" directory
    i.e resume: require("../assets/resume.pdf"), */
}

// HOBBIES SECTION
const hobbies = {
    show: false,
    heading: "My Hobbies",
    content: [
        {
            label: 'Reading',
            emoji: '📖'
        },
        {
            label: 'Theater',
            emoji: '🎭'
        },
        {
            label: 'Movies',
            emoji: '🎥'
        },
        {
            label: 'Cooking',
            emoji: '👨🏻‍🍳'
        }
    ]
}

// SKILLS SECTION
const skills = {
    show: true,
    heading: "Skills",
    skillList: {
        // Add skills in the lists below as desired.
        // Rename or add lists following the data structure.
        // To generate the proper names for the icons, search at https://simpleicons.org/
        // If you cant find the skill you're looking for at SimpleIcons, 
        // there's an alternative for brand icons found at https://fontawesome.com/search?o=r&m=free&f=brands
        "Web Development": [
            'html5',
            'css3',
            'javascript',
            'bootstrap',
            'php',
            'laravel',
            'react',
            'nodedotjs',
            'express',
            'sass',
            'jekyll',
            'git',
        ],
        "Mobile Development": [
            'swift',
            'android',
            'flutter',
            'dart',
            'kotlin',
        ],
        "Software Development": [
            'python',
            'java',
            'dotnet',
        ],
        "Database & API": [
            'mysql',
            'mongodb',
            'firebase',
            'fastapi',
            'axios',
            'redis',
        ],
        "UX / UI": [
            'figma',
            'adobexd',
            'adobephotoshop',
            'adobeillustrator',
            'adobeindesign',
        ],
        "Other Tools": [
            'git',
            'github',
            'bitbucket',
            'docker',
            'jira',
        ],
    },
}

// This is where your portfolio projects will be detailed
const portfolio = {
    show: true,
    heading: "Recent Projects",
    gitHubUsername: "LFClaro", //i.e."johnDoe12Gh"
    reposLength: 4,
    specificRepos: [],
    content: [
        {
            title: "Project 1",
            live: "https://paytonpierce.dev", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            source: "https://github.com/paytonjewell", // this should be a link to the **repository** of the project, where the code is hosted.
            image: mock1
        },
        {
            title: "Project 2",
            live: "https://paytonpierce.dev",
            source: "https://github.com/paytonjewell",
            image: mock2
        },
        {
            title: "Project 3",
            live: "https://paytonpierce.dev",
            source: "https://github.com/paytonjewell",
            image: mock3
        },
        {
            title: "Project 4",
            live: "https://paytonpierce.dev",
            source: "https://github.com/paytonjewell",
            image: mock4
        },
        {
            title: "Project 5",
            live: "https://paytonpierce.dev",
            source: "https://github.com/paytonjewell",
            image: mock5
        }
    ]
}

const experience = {
    show: false,
    heading: "Experience",
    content: [
        {
            role: 'iOS Developer',
            companyName: 'TorontoJobs.ca',
            companyLogo: tojobs,
            date: 'Jan 2022 – May 2022',
            description: '',
        },
        {
            role: 'Machine Learning Research Assistant',
            companyName: 'Humber College',
            companyLogo: humber,
            date: 'May 2021 – Sep 2022',
            description: '',
        },
    ]
}

const footerMessage = {
    show: false,
    heading: "Let's connect!",
    message:
        "Thank you for reading all this way! I'm currently looking for full-time Mobile Developer or Web Developer opportunities! If you know of any roles available, if you have any questions, or if you just want to say hi, please feel free to email me at",
}

export { navBar, mainInfo, about, skills, hobbies, portfolio, experience, footerMessage };