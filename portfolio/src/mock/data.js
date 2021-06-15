import { nanoid } from 'nanoid';

// Head data
export const headData = {
    title: 'Name | Developer', // e.g: 'Name | Developer'
    description: 'Welcome to my portfolio', // e.g: Welcome to my website
  };
  
  // Hero data
  export const heroData = {
    title: 'Yo, my name is',
    name: 'Aisha',
    subtitle: 'I\'m a Developer Relations Engineer!',
    cta: 'Learn more',
  };
  
  // About data
  export const aboutData = {
    img: 'profile.jpg',
    paragraphOne: '',
    paragraphTwo: '',
    paragraphThree: '',
    resume: '', // if no resume, the button will not show up
  };
  
  // Projects data
  export const projectsData = [
    {
      id: nanoid(),
      img: 'project.jpg',
      title: '',
      info: '',
      info2: '',
      url: '',
      repo: '', // if no repo, the button will not show up
    },
    {
      id: nanoid(),
      img: 'project.jpg',
      title: '',
      info: '',
      info2: '',
      url: '',
      repo: '', // if no repo, the button will not show up
    },
    {
      id: nanoid(),
      img: 'project.jpg',
      title: '',
      info: '',
      info2: '',
      url: '',
      repo: '', // if no repo, the button will not show up
    },
  ];
  
  // Contact data
  export const contactData = {
    cta: '',
    btn: '',
    email: '',
  };
  
  // Footer data
  export const footerData = {
    networks: [
      {
        id: nanoid(),
        name: 'twitter',
        url: '',
      },
      {
        id: nanoid(),
        name: 'codepen',
        url: '',
      },
      {
        id: nanoid(),
        name: 'linkedin',
        url: '',
      },
      {
        id: nanoid(),
        name: 'github',
        url: '',
      },
    ],
  };
  