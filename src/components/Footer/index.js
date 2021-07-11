import React from 'react';
import '../../assets/styles/Footer.css'
import { FaRegHeart, FaCodepen, FaLinkedin } from 'react-icons/fa';
import { FiGithub } from 'react-icons/fi';

function Footer() {

  const style = { color: "#f92f94" }

  return (
    <footer>
      <h3>Let's Connect! <span className="wave">🤝</span></h3>
      <div className="connect-icons">
        <a href="https://www.linkedin.com/in/michelle-asuamah/" target="_blank">
          <FaLinkedin/> 
        </a>
        <a href="https://github.com/MAsuamah" target="_blank">
          <FiGithub/>
        </a>
        <a href="https://codepen.io/masuamah" target="_blank">
          <FaCodepen/>
        </a>
      </div>  
      <p>Made with <FaRegHeart style={style} /> by Michelle Asuamah, &copy; 2021 </p>
    </footer>
  );
}

export default Footer;