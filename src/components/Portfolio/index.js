import React from 'react';
import '../../assets/styles/Portfolio.css'
import Fade from 'react-reveal/Fade';
import Project from "../Project";

function Portfolio() {
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
    
              <Project
                img={require(`../../assets/images/zengxiao-lin-fBZsl463vJQ-unsplash.jpg`).default}
                alt= 'espresso cup resting on a macbook keyboard'
                title='Tech'
                span='Cup'
                link='https://tech-cup-blog.herokuapp.com/'
                github='https://github.com/MAsuamah/tech-cup-blog'
                tech='MySQL | Express.js | Node.js'
                description='A blog site where users can create a personal user account and post about tech. Tech Cup provides a community for those looking to interact with like-minded people.'  
              />
              
            <Project 
              img={require(`../../assets/images/peinge-nakale-ie0YbSKO0fw-unsplash-copy.jpg`).default}
              alt= 'a tree in the sky. The tree features bright green foliage and the sky is clear with some fluffy white clouds.'
              title='Weather'
              span='App'
              link='https://masuamah.github.io/weather-dashboard/'
              github='https://github.com/MAsuamah/weather-dashboard'
              tech='JavaScript'
              description='A weather app that can find the forecast of any city. This weather app also keeps track of your search history for quicker searches in the future.'    
            />
     
            <Project 
              img={require(`../../assets/images/AdobeStock_127928024.jpeg`).default}
              alt= 'a juicy double hamburger'
              title='Super'
              span='Hip'
              link='https://hmbrgr-hlpr.herokuapp.com/'
              github='https://github.com/fraudwheeldrive/Hmbrgr-Hlpr'
              tech='MySQL | Express.js | Node.js' 
              description='A CMS restaurant app that helps owners manage the individual menus and locations of their chain restaurants from one app.'     
            />
      
          </div>

          <div className="grid">

            <Project 
              img={require(`../../assets/images/catherine-hughes-PkEQHH6R7Eg-unsplash.jpg`).default} 
              alt= 'a white analog alarm clock"'
              title='Coding'
              span='Quiz'
              link='https://masuamah.github.io/coding-quiz/'
              github='https://github.com/MAsuamah/coding-quiz'
              tech='JavaScript' 
              description='A timed quiz that can keep track of high scores so you can compare your rank with your friends.'   
            />
     
            <Project
              img={require(`../../assets/images/budget.png`).default} 
              alt= 'a graduation cap, a house, a piggybank, a shopping cart, a plane, and wedding rings resting on stacked coins'
              title='Trackstar'
              span='Budget'
              link='https://trackstar-budget.herokuapp.com/'
              github='https://github.com/MAsuamah/trackstar-budget'
              tech='Progressive Web Application'
              description='A budgeting app where you can track expenses and deposits. This app can be used offline and saved on mobile devices so you can keep track of your financials at any time.'   
            />
           
            <Project
              img={require(`../../assets/images/ecommerce.png`).default}
              alt= 'a shopping cart resting on a laptop keyboard'
              title='Shop'
              span='Shop'
              link='https://masuamah-shop-shop.herokuapp.com/'
              github='https://github.com/MAsuamah/shop-shop'
              tech='MongDB | Express.js. | Node.js | React.js'
              description='An E-commerce website that uses Global State and stripe to provide an easy, reliable and secure check out experience for customers.'    
            />

          </div>  
        </div>
      </section>
    </Fade>
  );
}
export default Portfolio;