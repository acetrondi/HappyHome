import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faWhatsapp
} from "@fortawesome/free-brands-svg-icons";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <ul className="footer-list">
       
        <li className="footer-item">
          <h3>Contact</h3>
          <a href="/">Bungalow No 67, Near Plot No 713, Opp. Dnyanvardhini School, Sector 7, Charkop, Kandivali West, Mumbai 67</a>
          <a href="/">Phone: +91 8976068944</a>
          <a href="/">Email: saviorlifecare@gmail.com</a>
        </li>
      </ul>


<div className="icon-bar">
  <a href="https://www.facebook.com/saviorlifecare" className="facebook"><FontAwesomeIcon icon={faFacebook} size="1x" /></a> 
  <a href="https://www.instagram.com/saviorlifecare" className="instagram"><FontAwesomeIcon icon={faInstagram} size="1x" /></a> 
  <a href="https://wa.me/918976068944" className="whatsapp"><FontAwesomeIcon icon={faWhatsapp} size="1x" /></a>
</div>
      <p className="footer-copyright">
        <small>&copy;2022 All Rights Reserved by Happy Home.</small>
      </p>
    </footer>
  );
};

export default Footer;
