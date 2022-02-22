import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <ul className="footer-list">
        <li className="footer-item">
          <h3>Social</h3>
          <a href="/">Facebook</a>
          <a href="/">Twitter</a>
          <a href="/">Instagram</a>
        </li>
        <li className="footer-item">
          <h3>Contact</h3>
          <a href="/">Bungalow No 67, Near Plot No 713, Opp. Dnyanvardhini School, Sector 7, Charkop, Kandivali West, Mumbai 67</a>
          <a href="/">Phone: +91 8976068944</a>
          <a href="/">Email: saviorlifecare@gmail.com</a>
        </li>
      </ul>


      <div class="social-container">
     
      <a href="https://www.facebook.com/saviorlifecare"
        className="facebook social">
        <FontAwesomeIcon icon={faFacebook} size="2x" />
      </a>
      {/* <a href="https://www.twitter.com/jamesqquick" className="twitter social">
        <FontAwesomeIcon icon={faTwitter} size="2x" />
      </a> */}
      <a href="https://www.instagram.com/saviorlifecare"
        className="instagram social">
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>


</div>
      <p className="footer-copyright">
        <small>&copy;2022 All Rights Reserved by Happy Home.</small>
      </p>
    </footer>
  );
};

export default Footer;
