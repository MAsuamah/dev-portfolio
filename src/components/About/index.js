import React from 'react'
import "../../assets/styles/About.css"
import Fade from 'react-reveal/Fade';
import Typed from 'typed.js';

function About() {
  const el = React.useRef(null);
  // Create reference to store the Typed instance itself
	const typed = React.useRef(null);

  React.useEffect(() => {
    const options = {
    	strings: [
        'Hi I’m Michelle! ...',
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
    <div>
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
      <Fade>
        <section className="about" id="about">
          <div className="inner-about">
            <img src={require(`../../assets/images/geo-port.png`).default}></img>
            <p> 
              Here’s a bit about me…I am a highly self-motivated developer with an imminent certificate in full-stack web development. In previous studies I earned a Bachelor’s degree in Psychology and Human Resources, and my all-time favourite school subject is …math!
            </p>
            <p>
              I’ve always loved problem-solving and logical reasoning, and I've been searching for a way to introduce that back into my everyday life, especially my career. It took me a while, but I’m so happy I found coding because I feel it really fuels my passion for solving problems. I also consider myself a life-long learner, and I’m always eager to build and create. Hence, learning how to build web applications has been a fulfilling journey for me so far.
            </p>
            <p>
              My current technological skills include frontend technologies such as JavaScript, HTML, and CSS, as well as backend technologies including Node.js, Express.js, and MySQL. I have every intention to continue on this journey of increasing my knowledge and skills when it comes to programming.I plan to do so through work experience and remaining dedicated to my own self-teachings. 
            </p>
            <p>
              That’s all you get for now, but feel free to contact me if you’d like to know more! Don’t forget to check out my projects below. Cheers!
            </p>
          </div>
        </section>
      </Fade>
    </div>
  );
}

export default About;