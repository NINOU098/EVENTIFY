import React from "react";
import ButtonUse from "@/components/button/ButtonUse";
import styles from "./event1.module.css";

const Event1 = () => {
  return (
    <div className={styles.page}>
      <div className={styles.heroSection}>
        <div className={styles.intro}>
          <p className={`${styles.des}`}></p>
          <h1 className={`${styles.heroTitle}`} style={{ textAlign: "center" }}>
            <span className={`${styles.titleLine} ${styles.indent1}`}>
              GALA OF{" "}
            </span>
            <p className={`${styles.even}`}>THE</p>
            <span className={`${styles.titleLine} ${styles.indent2}`}>
              STARS
            </span>
          </h1>
          <div className={styles.buttonContainer5}>
            <ButtonUse href="/contact" text="BOOK WITH US NOW" />
          </div>
          <p className={`${styles.des1}`}>OCT21</p>
          <p className={`${styles.event}`}>
            Our site hosts the Fashion Gala, a dazzling showcase of cutting-edge
            style and luxury, where the world's fashion vanguard convenes to
            unveil and celebrate the season's most coveted designs.
          </p>
        </div>

        <section className={styles.eventDetails}>
          <h2>TIME & PLACE </h2>
          <p>
            OCTOBER 21, 2024, 19:00 – OCTOBER 21, 2024, 23:00
            <br />
            New York, 5th Ave, New York, NY, United States
          </p>
          <h3>ABOUT THE EVENT </h3>
          <p>
            Here are some general information about gala of the mode and tips on
            appropriate attire:
          </p>
          <h4>INFORMATION ABOUT GALA OF THE MODE</h4>
          <p>
            Gala of the mode are events organized with the purpose of
            celebrating creativity, innovation, and elegance in the fashion
            industry. These events typically include fashion shows, red carpet
            arrivals, artistic performances, and entertainment. Gala of the mode
            provide attendees with the opportunity to immerse themselves in the
            world of fashion, discover new trends, and network with industry
            professionals.
          </p>
          <h4>DRESS CODE FOR GALA OF THE MODE </h4>
          <p>
            Gala of the mode are usually formal events where attendees are
            encouraged to dress elegantly and stylishly. For men, a
            well-tailored suit with a tie or bow tie is appropriate. Classic
            colors such as black, navy, or gray are commonly chosen. For women,
            a cocktail dress or a formal gown is suitable. It's important to
            consider the theme of the event and choose attire that reflects
            personal style while adhering to the dress code. Accessories such as
            statement jewelry, clutch bags, and elegant shoes can elevate the
            look and add a touch of glamour.
          </p>
          <p>
            By following these guidelines, attendees can prepare to enjoy an
            unforgettable experience at a gala of the mode while celebrating the
            artistry and creativity of the fashion industry.
          </p>
          <div className={styles.buttonContainer}>
            <ButtonUse href="/events" text="GALLERY" />
          </div>
        </section>
      </div>

      <footer className={styles.footer}>
        <section className={styles.tariffs}>
          <h2 className={styles.sectionTitle}>TARIFFS</h2>
          <p className={styles.sectionContent}>
            Please find below the ticket prices for the event:
          </p>
          <ul className={styles.tariffList}>
            <li>General Admission: $300</li>
            <li>VIP Admission: $650</li>
            <li>Corporate Sponsorship: $1300</li>
          </ul>
          <div className={`${styles.buttonContainer3}`}>
            <ButtonUse href="/contact" text="TICKETS" />
          </div>
        </section>
      </footer>
    </div>
  );
};

export default Event1;
