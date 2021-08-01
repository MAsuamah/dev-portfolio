import React from 'react';
import '../../assets/styles/Portfolio.css'
import Fade from 'react-reveal/Fade';
import Project from "../Project";

function Portfolio() {
  return (
    
    
      <section>
        {/* Quote*/}
        <Fade >
          <div className="quote">
            <h3>Projects</h3>
            <p>
              Here are some of my favourite projects that I’ve worked on, provided with descriptions and links to each GitHub Repo and Deployed Site. Take a look!
            </p>
          </div>
        </Fade>

        {/* Portfolio*/}

        <div className="portfolio"> 
          <div className="grid">

          <Project
            img={require(`../../assets/images/mia-anderson-2k6v10Y2dIg-unsplash.jpg`).default} 
            alt= 'two dogs playing'
            title='Puppy'
            span='Love'
            link='https://puppy-love-date.herokuapp.com/'
            github='https://github.com/MAsuamah/puppy-love'
            tech='MongoDB| Express.js | React.js | Node.js'
            description="Puppy Love is an app designed to find man's best friend a friend. Join the community of dog lovers online and set up doggy dates. This is a social app for pets where the user can sign their pets up and make a pet profile with images."   
          />

          <Project
            img={require(`../../assets/images/markus-winkler-LNzuOK1GxRU-unsplash.jpg`).default}
            alt= 'a typewriter printing out a sheet with the word goal on it'
            title='Habit'
            span='Tracker'
            link='https://peterw712.github.io/habit-tracker/'
            github='https://github.com/peterw712/habit-tracker'
            tech='JavaScript | Bootstrap'
            description='Habit Tracker is a way to hold yourself accountable for good habits every day. Enter your habits and give yourself a score to represent how much effort you put in. Also keep an eye on your 30 day record to see your progress.'    
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
              img={require(`../../assets/images/nick-fewings-f2Bi-VBs71M-unsplash.jpg`).default} 
              alt= 'books sitting in a bookshelf'
              title='Book'
              span='It'
              link='https://masuamah.github.io/coding-quiz/'
              github='https://github.com/MAsuamah/coding-quiz'
              tech='MongoDB| Express.js | React.js | Node.js' 
              description= "A book search engine with a simple user interface that can be used to find your next read. Save and keep track of books you'd like to read in the future to create your own virtual 'To Read' catalogue."   
            />

          </div>  

          <div className="grid">

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
              link='https://masuamah-shop-shop-redux.herokuapp.com/'
              github='https://github.com/MAsuamah/shop-shop-redux'
              tech='MERN Stack | Redux | Stripe'
              description='An E-commerce website that uses Redux to handle Global State and stripe to provide an easy, reliable and secure check out experience for customers.'    
            />

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

          </div> 
        </div>
      </section>
  );
}
export default Portfolio;