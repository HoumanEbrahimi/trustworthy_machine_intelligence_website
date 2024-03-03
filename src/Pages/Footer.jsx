// Footer.js
import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { SocialIcon } from 'react-social-icons'

/*

          <FontAwesomeIcon className="icons-change" icon={faInstagram} size="3x" transform="left-36" target="_blank"
color='orange'/>

*/
const Footer = () => {
  return (
    <footer className="footer">
      <div className="alignment"> 
      <h1 className="footer-align" style={{fontFamily:"Tahoma",fontSize:"23px"}}>Contact Us</h1>
      <div className="footer-content">
        <a href="https://www.instagram.com/uoft_epai/" >
        <SocialIcon url="https://www.instagram.com/uoft_epai/" target="_blank"/>                   

        </a>
        &nbsp;&nbsp; &nbsp;&nbsp; 

        <a href="https://discord.com/channels/1110690752658415668/1110694536579121273" target="_blank"
>
        <SocialIcon url="https://discord.com/channels/1110690752658415668/1110694536579121273" target="_blank"/>                   
        </a>
        &nbsp;&nbsp; &nbsp;&nbsp; 
        <a href="https://discord.com/channels/1110690752658415668/1110694536579121273" >
        <SocialIcon style={{ marginRight: '60px' }} url="https://email.com" target="_blank"/>                   
        </a>

      </div>
      <img
            src="https://github.com/HoumanEbrahimi/Lol/blob/main/TMI.png?raw=true"
            alt=""
            width="65"
            height="65"
          />
      </div>

    </footer>
  );
};

export default Footer;
