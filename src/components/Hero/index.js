import React from 'react';
import "../../assets/styles/Hero.css"
import Fade from 'react-reveal/Fade';


function Hero() {
  return (
    <div className="hero-image">
      <img src={require(`../../assets/images/portfolio-logo.png`).default}></img>
      <Fade delay={1000}>
      <h1>Full Stack</h1>
      </Fade>
      <Fade delay={2000}>
      <h1>Developer</h1>
      </Fade>
    </div>
  );
}

export default Hero;