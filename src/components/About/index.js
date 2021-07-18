import React from 'react'
import "../../assets/styles/About.css"
import Fade from 'react-reveal/Fade';
import Typed from 'typed.js';
import { HiOutlineArrowCircleDown } from 'react-icons/hi';

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
      {/* Hero Section */}
      <div className="hero-image">
        <div className="flex-hero">
          <img className="port-logo" src={require(`../../assets/images/portfolio-logo.png`).default} alt="Michelle Asuamah"></img>
        </div>
        <div className = "all-hero-text">
          <Fade>    
            <h1 className="hero-tagline">Full Stack</h1>
          </Fade>
          <Fade delay={1000}>
            <h1 className="hero-tagline dev">Developer</h1>
          </Fade>
          <Fade delay={2000}>
            <div className="type-wrap">
              <span style={{ whiteSpace: 'pre' }} ref={el} />
            </div> 
          </Fade>
          <div className="mobile-intro">
            <p>
              Hi Michelle, a passionate and dedicated Full Stack Developer. Scroll to read about me, then check out my projects  and résumé … after that let's connect!
            </p>
            <p id="about-tag">
              <HiOutlineArrowCircleDown /> About Me
            </p>
          </div> 
        </div>
        
        {/* About Section */}
        
          <section className="about" id="about">
            <div className="inner-about">
              <p className="about-bigger"> 
                <span>First off, thanks for visiting. </span> <br/> I am a highly self-motivated developer with a certificate in full-stack web development from the University of Toronto. I also have a Bachelor’s in Psychology and Employment Relations.
              </p>
              <p className="about-bigger"> 
              <span>I’ve always loved </span> <br/> problem-solving and logical reasoning (my fav subject is Math!), and I've been searching for a way to introduce that back into my everyday life, especially my career. I'm happy to say coding really fuels my passion for solving problems.
              </p>
              <img src={require(`../../assets/images/square-about.png`).default} alt="Michelle Asuamah"></img>
              <p> 
              <span>I love blending my creativity</span> <br/>  and ability to quickly grasp concepts so that I can build applications that provide a remarkable user experience. I’m also able to apply these skills in team settings like when I worked with a small team to develop a CMS style restaurant app, that allows chain restaurant owners to manage their restaurant locations.
              </p>
              <p>
              <span>My current tech skills</span> <br/>  include front-end technologies such as JavaScript, React, HTML, and CSS, as well as back-end technologies including Node.js, Express.js, MongoDB, and MySQL. I have every intention to continue on this journey of increasing my knowledge and skills when it comes to programming. I plan to do so by leveraging my skills in the workforce as part of a quality-driven team and remaining dedicated to my own self-teachings. 
              </p>
              <p>
              <span>That’s all you get for now!</span> <br/> But please feel free to contact me if you’d like to know anything else. Don’t forget to check out my projects. Cheers!
              </p>
            </div>
          </section>
        

      </div>
    </div>
  );
}

export default About;