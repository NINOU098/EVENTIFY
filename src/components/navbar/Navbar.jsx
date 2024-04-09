import React from "react";
import styles from "./navbar.module.css";
import Links from "./links/Links";
import ToggleTheme from "../toggleTheme/ToggleTheme";
const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>EVENTIFY</div>
      <img src="/logo.png" alt="Eventify Logo" className={styles.logoImage} />
      <ToggleTheme />
      <Links />
    </div>
  );
};

export default Navbar;
