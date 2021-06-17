import React, { useState, useEffect } from 'react';
import {
  heroData,
  aboutData,
  projectsData,
  contactData,
  footerData
} from './mock/data';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [hero, setHero] = useState({});
  const [about, setAbout] = useState({});
  const [projects, setProject] = useState([]);
  const [contact, setContact] = useState({});
  const [footer, setFooter] = useState({});

  useEffect(() => {
    setHero({ ...heroData });
    setAbout({ ...aboutData });
    setProject([ ...projectsData ]);
    setContact({ ...contactData });
    setFooter({ ...footerData });
  }, []);

  return (
    <div>
      <Hero hero={hero} />
      <About about={about} />
      <Projects projects={projects} />
      <Contact contact={contact} />
      <Footer footer={footer} />
    </div>
  );
}

export default App;
