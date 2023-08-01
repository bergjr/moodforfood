import React from "react";
import styles from "./Footer.module.scss";
const Footer = () => {
  return (
    <footer id="footer">
      <div className={styles.container}>
        <ul>
          <li>
            <a href="#home">About</a>
          </li>
          <li>
            <a href="#home">Location</a>
          </li>
          <li>
            <a href="#home">FAQs</a>
          </li>
          <li>
            <a href="#home">Careers</a>
          </li>
          <li>
            <a href="#home">Contact Us</a>
          </li>
        </ul>
        <p>All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
