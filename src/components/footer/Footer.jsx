import React from "react";
import {
  IoLogoInstagram,
  IoLogoFacebook,
  IoLogoTwitter,
} from "react-icons/io5";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerSection}>
        <div>
          <div className={styles.footerTitle}>Contact US</div>
          <p>5th St, New York, NY, États-Unis</p>
          <p>(718) 555-0123</p>
          <p>bookings@eventify.com</p>
        </div>
        <div>
          <div className={styles.footerTitle}>OPENING HOURS</div>
          <p>Monday- Thursday: 9h - 18h</p>
          <p>Friday - Sunday: 10h - 23h</p>
        </div>
      </div>
      <div className={styles.footerSection}>
        <div className={styles.footerTitle}>Follow Us</div>
        <div className={styles.footerSocialIcons}>
          <a
            href="https://www.instagram.com/eventify.gala"
            target="_blank"
            rel="noreferrer"
            className={styles.footerSocialIcon}
          >
            <IoLogoInstagram />
            <span className={styles.footerSocialText}>@eventify.gala</span>
          </a>
          <a
            href="https://www.facebook.com/eventify.gala"
            target="_blank"
            rel="noreferrer"
            className={styles.footerSocialIcon}
          >
            <IoLogoFacebook />
            <span className={styles.footerSocialText}>@eventify.gala</span>
          </a>
          <a
            href="https://www.twitter.com/eventifygala"
            target="_blank"
            rel="noreferrer"
            className={styles.footerSocialIcon}
          >
            <IoLogoTwitter />
            <span className={styles.footerSocialText}>@eventifygala</span>
          </a>
        </div>
      </div>
      <div className={styles.footerBottom}>
        &copy; {new Date().getFullYear()} EVENTIFY. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
