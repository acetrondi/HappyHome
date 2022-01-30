import React from "react";
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

      <p className="footer-copyright">
        <small>&copy;2022 All Rights Reserved by Happy Home.</small>
      </p>
    </footer>
  );
};

export default Footer;
