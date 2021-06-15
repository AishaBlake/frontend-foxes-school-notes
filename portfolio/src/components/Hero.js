import React from 'react';
import CtaButton from './CtaButton';

const Hero = ({ hero }) => {

  return (
    <section className="hero">
      <div className="hero__container">
        <h1 className="hero__title">
          { hero.title || 'Hi, my name is' }
        <span> { hero.name || 'Your name' }</span>
        <br />
        { hero.subtitle || 'I\'m a developer.' }
        </h1>
        <CtaButton cta={hero.cta} />
      </div>
    </section>
  );
}

export default Hero;
