import React from 'react';
import "../../assets/styles/Hero.css"


function Hero() {
  return (
    <div className="hero-image">
      <img src={require(`../../assets/images/portfolio-logo.png`).default}></img>
      <h1>Full Stack Developer</h1>
    </div>
  );
}

export default Hero;