import React from 'react';
import '../../assets/styles/Portfolio.css'


function Portfolio() {
  return (
    <section>
      <div className="quote">
        <h3>love of learning</h3>
        <p>
          is the most necessary passion . . . in it lies our happiness. <br />
          It's a sure remedy for what ails us, an unending source of pleasure.
          Develop a passion for learning. If you do, you will never cease to grow.
        </p>
        <p id="author">-Émilie du Châtelet & Anthony J. D'Angelo</p>
      </div>
      <div className="portfolio">
        <div class="grid">
            <figure class="effect-oscar">
              <img className="icon" src="https://tympanus.net/Development/HoverEffectIdeas/img/9.jpg" alt="img09"/>
              <figcaption>
                <h2>Warm <span>Oscar</span></h2>
                <p>Oscar is a decent man. He used to clean porches with pleasure.</p>
                <a href="#">View more</a>
              </figcaption>     
            </figure>
            <figure class="effect-oscar">
              <img className="icon" src="https://tympanus.net/Development/HoverEffectIdeas/img/10.jpg" alt="img10"/>
              <figcaption>
                <h2>Warm <span>Oscar</span></h2>
                <p>Oscar is a decent man. He used to clean porches with pleasure.</p>
                <a href="#">View more</a>
              </figcaption>     
            </figure>
            <figure class="effect-oscar">
              <img className="icon" src="https://tympanus.net/Development/HoverEffectIdeas/img/10.jpg" alt="img10"/>
              <figcaption>
                <h2>Warm <span>Oscar</span></h2>
                <p>Oscar is a decent man. He used to clean porches with pleasure.</p>
                <a href="#">View more</a>
              </figcaption>     
            </figure>
          </div>
      </div>
    </section>
  );
}
export default Portfolio;