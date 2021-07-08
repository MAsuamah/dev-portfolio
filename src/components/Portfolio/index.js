import React from 'react';
import '../../assets/styles/Portfolio.css'
import { FaLink } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import Fade from 'react-reveal/Fade';

function Portfolio() {
  return (
    <Fade delay={100}>
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
          <img className="icon" src={require(`../../assets/images/zengxiao-lin-fBZsl463vJQ-unsplash.jpg`).default}></img>
            <figcaption>
              <h2>Tech <span>Cup</span> <br />
                <a href="https://tech-cup-blog.herokuapp.com/" target="_blank"><FaLink /></a>
                <a href="https://github.com/MAsuamah/tech-cup-blog" target="_blank"><FaGithub /></a>
              </h2>
              <p>MySQL | Express.js | Node.js </p>
            </figcaption>     
          </figure>
          <figure class="effect-oscar">
            <img className="icon" src={require(`../../assets/images/peinge-nakale-ie0YbSKO0fw-unsplash-copy.jpg`).default}></img>
            <figcaption>
              <h2>Weather <span>App</span> <br />
                <a href="https://masuamah.github.io/weather-dashboard/" target="_blank"><FaLink /></a>
                <a href="https://github.com/MAsuamah/weather-dashboard" target="_blank"><FaGithub /></a>
              </h2>
              <p>JavaScript</p>
            </figcaption>     
          </figure>
          <figure class="effect-oscar">
            <img className="icon" src={require(`../../assets/images/AdobeStock_127928024.jpeg`).default}></img>
            <figcaption>
              <h2>Super <span>Hip</span> <br />
                <a href="https://tech-cup-blog.herokuapp.com/" target="_blank"><FaLink /></a>
                <a href="https://github.com/fraudwheeldrive/Hmbrgr-Hlpr" target="_blank"><FaGithub /></a>
              </h2>
              <p>MySQL | Express.js | Node.js</p>
            </figcaption>     
          </figure>
        </div>

        <div class="grid">
          <figure class="effect-oscar">
          <img className="icon" src={require(`../../assets/images/catherine-hughes-PkEQHH6R7Eg-unsplash.jpg`).default}></img>
            <figcaption>
              <h2>Coding <span>Quiz</span> <br />
                <a href="https://masuamah.github.io/coding-quiz/ " target="_blank"><FaLink /></a>
                <a href="https://github.com/MAsuamah/coding-quiz" target="_blank"><FaGithub /></a>
              </h2>
              <p>JavaScript</p>
            </figcaption>     
          </figure>
          <figure class="effect-oscar">
          <img className="icon" src={require(`../../assets/images/budget.png`).default}></img>
            <figcaption>
              <h2>Trackstar <span>Budget</span> <br />
                <a href="https://trackstar-budget.herokuapp.com/" target="_blank"><FaLink /></a>
                <a href="https://github.com/MAsuamah/trackstar-budget" target="_blank"><FaGithub /></a>
              </h2>
              <p>Progressive Web Application</p>
            </figcaption>     
          </figure>
          <figure class="effect-oscar">
            <img className="icon" src={require(`../../assets/images/ecommerce.png`).default}></img>
            <figcaption>
              <h2>Shop <span>Shop</span> <br />
                <a href="https://masuamah-shop-shop.herokuapp.com/" target="_blank"><FaLink /></a>
                <a href="https://github.com/MAsuamah/shop-shop" target="_blank"><FaGithub /></a>
              </h2>
              <p>MongDB | Express.js. | Node.js | React.js</p>
              <a href="#">View more</a>
            </figcaption>     
          </figure>

        </div>
          
      </div>
    </section>
    </Fade>
  );
}
export default Portfolio;