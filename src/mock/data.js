import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Dalia Walid | Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my portfolio', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: '',
  subtitle: '',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'me.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://drive.google.com/file/d/10ch85oVvE6DXKtfhZ1B5HX0FsJuDQNox/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'proj1.jpg',
    title: 'Corona Tracker',
    info: 'Built this web App with React js, CSS, and HTML.It shows the number of infected, recovered and deaths of Covid-19 worldwide.',
    info2: ' It contains real data statistics based on real data API.',
    url: 'https://upbeat-elion-5d07ff.netlify.app/',
    repo: 'https://github.com/DaliaW/Covid19-Tracker', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'proj2.jpg',
    title: 'Priority Do',
    info: 'Priority Do is an android app built with kotlin.',
    info2: 'The idea of the app is to add tasks and sort them based on priorities. the app is still in development',
    url: 'https://github.com/DaliaW/Priority_do_Kotlin_App',
    repo: 'https://github.com/DaliaW/Priority_do_Kotlin_App', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'proj3.jpg',
    title: 'My personal portfolio',
    info: 'Built my personal portfolio using Gatsby, React, html, css.',
    info2: 'I have also created my own svg image in figma and animated it using css.',
    url: '/',
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'dalia.hewedy@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/dalia-walid-63a74b190/',
    },
    
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
