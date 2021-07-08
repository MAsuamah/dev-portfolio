import React from 'react';
import '../../assets/styles/Resume.css'
import { SiJavascript } from 'react-icons/si';
import { TiArrowDownOutline } from 'react-icons/ti';
import Fade from 'react-reveal/Fade';


function Resume() {

  return (
     
    <section className="resume">

      {/* SVG painter for Icons*/}

      <svg width="0" height="0">
        <linearGradient id="red-purple-gradient" x1="100%" y1="100%" x2="0%" y2="0%">
          <stop stopColor="#F5C15D" offset="0%" />
          <stop stopColor="#F92F94" offset="100%" />
        </linearGradient>
        <linearGradient id="pink-gradient" x1="100%" y1="100%" x2="0%" y2="0%">
          <stop stopColor="pink" offset="0%" />
          <stop stopColor="yellow" offset="100%" />
        </linearGradient>
      </svg>

 

        {/* Download Resume */}

        <div className="resume-container">
          <a id="download-link" href={require("../../assets/files/Michelle-AsuamahResume.pdf" ).default} download>
            <Fade>
              <div className="download-box border-gradient resume-gradient border-gradient-purple">    
                  Download Resume<TiArrowDownOutline style={{ fill: "url(#red-purple-gradient)" }}/>
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
                <h2 class="border-gradient skill-gradient border-gradient-purple">
                <SiJavascript style={{ fill: "url(#red-purple-gradient)" }} /> <br />
                  JavaScript
                </h2>
              </div>
            </Fade>

            <Fade>
              <div className="skill-box">
                <h2 class="border-gradient skill-gradient border-gradient-purple">
                <SiJavascript style={{ fill: "url(#red-purple-gradient)" }} /> <br />
                  JavaScript
                </h2>
              </div>
            </Fade>

            <Fade>
              <div className="skill-box">
                <h2 class="border-gradient skill-gradient border-gradient-purple">
                <SiJavascript style={{ fill: "url(#red-purple-gradient)" }} /> <br />
                  JavaScript
                </h2>
              </div>
            </Fade>

            <Fade>
              <div className="skill-box">
                <h2 class="border-gradient skill-gradient border-gradient-purple">
                <SiJavascript style={{ fill: "url(#red-purple-gradient)" }} /> <br />
                  JavaScript
                </h2>
              </div>
            </Fade>

            <Fade>
              <div className="skill-box">
                <h2 class="border-gradient skill-gradient border-gradient-purple">
                <SiJavascript style={{ fill: "url(#red-purple-gradient)" }} /> <br />
                  JavaScript
                </h2>
              </div>
            </Fade>

            <Fade>
              <div className="skill-box">
                <h2 class="border-gradient skill-gradient border-gradient-purple">
                <SiJavascript style={{ fill: "url(#red-purple-gradient)" }} /> <br />
                  JavaScript
                </h2>
              </div>
            </Fade>
  

        </div>

      </div>
    </section>
    
  );
}
export default Resume;