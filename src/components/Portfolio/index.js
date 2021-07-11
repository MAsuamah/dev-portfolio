import React from 'react';
import '../../assets/styles/Portfolio.css'
import Fade from 'react-reveal/Fade';
import Projects from "../Projects";

function Portfolio({project}) {
  return (
    
    <Fade >
      <section>
        {/* Quote*/}
        <div className="quote">
          <h3>love of learning</h3>
          <p>
            is the most necessary passion . . . in it lies our happiness. <br />
            It's a sure remedy for what ails us, an unending source of pleasure.
            Develop a passion for learning. If you do, you will never cease to grow.
          </p>
          <p id="author">-Émilie du Châtelet & Anthony J. D'Angelo</p>
        </div>

        {/* Portfolio*/}

        <div className="portfolio"> 

          <div className="grid">

              <Projects 
                img={require(`../../assets/images/zengxiao-lin-fBZsl463vJQ-unsplash.jpg`).default}
                alt= 'espresso cup resting on a macbook keyboard'
                title='Tech'
                span='Cup'
                link='https://tech-cup-blog.herokuapp.com/'
                github='https://github.com/MAsuamah/tech-cup-blog'
                tech='MySQL | Express.js | Node.js'    
              />
              
            <Projects 
              img={require(`../../assets/images/peinge-nakale-ie0YbSKO0fw-unsplash-copy.jpg`).default}
              alt= 'a tree in the sky. The tree features bright green foliage and the sky is clear with some fluffy white clouds.'
              title='Weather'
              span='App'
              link='https://masuamah.github.io/weather-dashboard/'
              github='https://github.com/MAsuamah/weather-dashboard'
              tech='JavaScript'    
            />
     
            <Projects 
              img={require(`../../assets/images/AdobeStock_127928024.jpeg`).default}
              alt= 'a juicy double hamburger'
              title='Super'
              span='Hip'
              link='https://hmbrgr-hlpr.herokuapp.com/'
              github='https://github.com/fraudwheeldrive/Hmbrgr-Hlpr'
              tech='MySQL | Express.js | Node.js'    
            />
      
          </div>

          <div className="grid">

            <Projects 
              img={require(`../../assets/images/catherine-hughes-PkEQHH6R7Eg-unsplash.jpg`).default} 
              alt= 'a white analog alarm clock"'
              title='Coding'
              span='Quiz'
              link='https://masuamah.github.io/coding-quiz/'
              github='https://github.com/MAsuamah/coding-quiz'
              tech='JavaScript'    
            />
     
            <Projects 
              img={require(`../../assets/images/budget.png`).default} 
              alt= 'a graduation cap, a house, a piggybank, a shopping cart, a plane, and wedding rings resting on stacked coins'
              title='Trackstar'
              span='Budget'
              link='https://trackstar-budget.herokuapp.com/'
              github='https://github.com/MAsuamah/trackstar-budget'
              tech='Progressive Web Application'    
            />
           
            <Projects 
              img={require(`../../assets/images/ecommerce.png`).default}
              alt= 'a shopping cart resting on a laptop keyboard'
              title='Shop'
              span='Shop'
              link='https://masuamah-shop-shop.herokuapp.com/'
              github='https://github.com/MAsuamah/shop-shop'
              tech='MongDB | Express.js. | Node.js | React.js'    
            />

          </div>  
        </div>
      </section>
    </Fade>
  );
}
export default Portfolio;