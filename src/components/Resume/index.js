import React from 'react';
import '../../assets/styles/Resume.css'
import Fade from 'react-reveal/Fade';
import { SiGraphql, SiJquery } from 'react-icons/si';
import { DiJavascript1, DiCss3, DiBootstrap, DiResponsive, DiMysql, DiMongodb} from 'react-icons/di';
import { TiArrowDownOutline } from 'react-icons/ti';
import { ImHtmlFive } from 'react-icons/im';
import { FaReact, FaGitAlt, FaNodeJs } from 'react-icons/fa';
import { BsGear } from 'react-icons/bs';
import { RiTeamLine } from 'react-icons/ri';


function Resume() {

  return (
     
    <section className="resume">

   

        {/* SVG painter for Icons*/}

        <svg width="0" height="0">
          <linearGradient id="pink-gradient" x1="100%" y1="100%" x2="0%" y2="0%">
            <stop stopColor="pink" offset="0%" />
            <stop stopColor="yellow" offset="100%" />
          </linearGradient>
          <linearGradient id="aqua-gradient" x1="100%" y1="100%" x2="0%" y2="0%">
            <stop stopColor="Chartreuse" offset="0%" />
            <stop stopColor="aqua" offset="100%" />
          </linearGradient>
          <linearGradient id="violet-gradient" x1="100%" y1="100%" x2="0%" y2="0%">
            <stop stopColor="gold" offset="0%" />
            <stop stopColor="palevioletred" offset="100%" />
          </linearGradient>
          <linearGradient id="red-gradient" x1="100%" y1="100%" x2="0%" y2="0%">
            <stop stopColor="crimson" offset="0%" />
            <stop stopColor="darkorchid" offset="100%" />
          </linearGradient>
          <linearGradient id="blue-gradient" x1="100%" y1="100%" x2="0%" y2="0%">
            <stop stopColor="indianred" offset="0%" />
            <stop stopColor="lightblue" offset="100%" />
          </linearGradient>
        </svg>

          {/* Download Resume */}

          <Fade>
            <p className="blurb">
              I use the skills below to build web applications and improve the user experience. It’s a non-exhaustive list as I’m always looking to add more tools to my developer’s toolkit. Need my skills in writing? Download a copy of my resume.
            </p>
          </Fade>
        
          <div className="resume-container">
            <a id="download-link" href={require("../../assets/files/Michelle-AsuamahResume.pdf" ).default} download>
              <Fade>
                <div className="download-box border-gradient resume-gradient border-gradient-pink-yellow">    
                    Download Resume<TiArrowDownOutline style={{ fill: "url(#pink-gradient)" }}/>
                </div>
              </Fade>
            </a> 
          </div>
          
          {/* Skills Section*/}
          
          <div className="skills">

            {/* Skills Header*/}

            <h1>What I Can Do</h1>

            {/* Skills Container*/}

            <div className="skills-container">
              <Fade>
                <div className="skill-box">
                  <h2 className="border-gradient skill-gradient border-gradient-aqua">
                  <DiJavascript1 className="icon" style={{ fill: "url(#aqua-gradient)" }} /> <br />
                    JavaScript
                  </h2>
                </div>
              </Fade>

              <Fade>
                <div className="skill-box">
                  <h2 className="border-gradient skill-gradient border-gradient-violet">
                  <ImHtmlFive className="icon-smaller" style={{ fill: "url(#violet-gradient)" }} /> 
                  <DiCss3 className="icon" style={{ fill: "url(#violet-gradient)" }} /> 
                  <br />
                    HTML & CSS
                  </h2>
                </div>
              </Fade>

              <Fade>
                <div className="skill-box ">
                  <h2 className="border-gradient small-box skill-gradient border-gradient-red">
                  <SiJquery className="icon-smaller" style={{ fill: "url(#red-gradient)" }} /> <br />
                    jQuery
                  </h2>
                </div>
              </Fade>

              <Fade>
                <div className="skill-box">
                  <h2 className="border-gradient small-box skill-gradient border-gradient-blue">
                  <DiBootstrap className="icon-smaller" style={{ fill: "url(#blue-gradient)" }} /> <br />
                    Boostrap
                  </h2>
                </div>
              </Fade>

              <Fade>
                <div className="skill-box">
                  <h2 className="border-gradient small-box skill-gradient border-gradient-aqua">
                  <FaReact className="icon-smaller" style={{ fill: "url(#aqua-gradient)" }} /> <br />
                    React
                  </h2>
                </div>
              </Fade>

              <Fade>
                <div className="skill-box">
                  <h2 className="border-gradient small-box skill-gradient border-gradient-violet">
                  <FaGitAlt className="icon-smaller" style={{ fill: "url(#violet-gradient)" }} /> <br />
                    Git
                  </h2>
                </div>
              </Fade>

              <Fade>
                <div className="skill-box hide">
                  <h2 className="border-gradient hide skill-gradient border-gradient-red">
                  <DiResponsive className="icon" style={{ fill: "url(#red-gradient)" }} /> <br />
                    Responsive Design
                  </h2>
                </div>
              </Fade>

              <Fade>
                <div className="skill-box">
                  <h2 className="border-gradient skill-gradient border-gradient-blue">
                  <FaNodeJs className="icon" style={{ fill: "url(#blue-gradient)" }} /> <br />
                    Node.js
                  </h2>
                </div>
              </Fade>

              <Fade>
                <div className="skill-box">
                  <h2 className="border-gradient skill-gradient border-gradient-aqua">
                  <BsGear className="icon" style={{ fill: "url(#aqua-gradient)" }} /> <br />
                    Express.js
                  </h2>
                </div>
              </Fade>

              <Fade>
                <div className="skill-box">
                  <h2 className="border-gradient skill-gradient border-gradient-violet">
                  <DiMysql className="icon" style={{ fill: "url(#violet-gradient)" }} /> <br />
                    MySQL
                  </h2>
                </div>
              </Fade>

              <Fade>
                <div className="skill-box">
                  <h2 className="border-gradient skill-gradient border-gradient-red">
                  <SiGraphql className="icon" style={{ fill: "url(#red-gradient)" }} /> <br />
                    Graphql
                  </h2>
                </div>
              </Fade>

              <Fade>
                <div className="skill-box">
                  <h2 className="border-gradient skill-gradient border-gradient-blue">
                  <DiMongodb className="icon" style={{ fill: "url(#blue-gradient)" }} /> <br />
                    MongoDB
                  </h2>
                </div>
              </Fade>
  
        </div>
      </div>
    </section>  
  );
}
export default Resume;