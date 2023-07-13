import React from "react";
import styles from "./Logo.module.scss";
import logo from "assets/logo.png";
import { Link } from "react-router-dom";
const Logo = () => {
  return (
    <div className={styles.logo}>
      <Link to="/">
        <div className={styles["logo-box"]}>
          <img src={logo} alt="A hand holding a cellphone" />
        </div>
        <h2>Mood For Food</h2>
      </Link>
    </div>
  );
};

export default Logo;
