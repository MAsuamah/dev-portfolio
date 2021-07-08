import React from 'react';
import '../../assets/styles/Resume.css'
import { SiJavascript } from 'react-icons/si';
import { TiArrowDownOutline } from 'react-icons/ti';

function Resume() {
  

  return (
    
    <section className="resume">

      <svg width="0" height="0">
        <linearGradient id="red-purple-gradient" x1="100%" y1="100%" x2="0%" y2="0%">
          <stop stopColor="purple" offset="0%" />
          <stop stopColor="red" offset="100%" />
        </linearGradient>
        <linearGradient id="pink-gradient" x1="100%" y1="100%" x2="0%" y2="0%">
          <stop stopColor="pink" offset="0%" />
          <stop stopColor="yellow" offset="100%" />
        </linearGradient>
      </svg>

    
      <div className="border-wrap download-wrap"><div class="download">
        <a href={require("../../assets/files/Michelle-AsuamahResume.pdf" ).default} download>
          <h3>Download Resume<TiArrowDownOutline style={{ fill: "url(#red-purple-gradient)" }}/></h3>
        </a>
      </div></div>
      
      <div className="skills">

        <h1>What I Can Do</h1>
        
        <div className="skills-container">

          <div className="border-wrap"><div class="javascript">
            <SiJavascript style={{ fill: "url(#red-purple-gradient)" }} /> <br />
            JavaScript
          </div></div>


          <div className="border-wrap"><div class="javascript">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero pariatur corporis quaerat voluptatum eos tempora temporibus nisi voluptates sed, exercitationem sequi dolore culpa incidunt accusamus, quasi unde reprehenderit ea molestias.
          </div></div>
          <div className="border-wrap"><div class="javascript">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero pariatur corporis quaerat voluptatum eos tempora temporibus nisi voluptates sed, exercitationem sequi dolore culpa incidunt accusamus, quasi unde reprehenderit ea molestias.
          </div></div>
          <div className="border-wrap"><div class="javascript">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero pariatur corporis quaerat voluptatum eos tempora temporibus nisi voluptates sed, exercitationem sequi dolore culpa incidunt accusamus, quasi unde reprehenderit ea molestias.
          </div></div>
          <div className="border-wrap"><div class="javascript">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero pariatur corporis quaerat voluptatum eos tempora temporibus nisi voluptates sed, exercitationem sequi dolore culpa incidunt accusamus, quasi unde reprehenderit ea molestias.
          </div></div>


        </div>
      </div>
    </section>
  );
}
export default Resume;