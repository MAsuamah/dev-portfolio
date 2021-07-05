import React, { useRef } from 'react'
import "../../assets/styles/Hero.css"
import Fade from 'react-reveal/Fade';
import Typed from 'typed.js';


function Hero() {
  const el = React.useRef(null);
  // Create reference to store the Typed instance itself
	const typed = React.useRef(null);

  React.useEffect(() => {
    const options = {
    	strings: [
        'Hi I’m Michelle!...',
        'Scroll to read about me...',
        'Then check out my work and résumé...',
        'and after that...',
        'let\'s connect!'
      ],
      typeSpeed: 75,
      backSpeed: 50,
      startDelay: 3100,
      loop: true
    };
    
    // elRef refers to the <span> rendered below
    typed.current = new Typed(el.current, options);
    
    return () => {
      // Make sure to destroy Typed instance during cleanup
      // to prevent memory leaks
      typed.current.destroy();
    }
  }, [])

  return (
    <div className="hero-image">
      <img src={require(`../../assets/images/portfolio-logo.png`).default}></img>
      <Fade delay={1000}>
      <h1>Full Stack</h1>
      </Fade>
      <Fade delay={2000}>
      <h1>Developer</h1>
      </Fade>
      <Fade delay={3000}>
      <div className="type-wrap">
        <span style={{ whiteSpace: 'pre' }} ref={el} />
      </div>
      </Fade>
    </div>
  );
}

export default Hero;