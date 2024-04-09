import React from "react";
import ButtonUse from "@/components/button/ButtonUse";
import styles from "./event2.module.css";

const event2 = () => {
  return (
    <div className={styles.page}>
      <div className={styles.hero}>
        <p className={`${styles.des}`}></p>
        <h1>
          <p className={`${styles.eventDescription1}`}>GALA OF THE</p>
          <p className={`${styles.eventDescription}`}>CHARITY GALA</p>
          <p className={`${styles.eventDescription2}`}> NOBLE HEART</p>
          <p className={`${styles.dateTitle}`}>MARCH 16</p>
          <p className={`${styles.event}`}>
            "Join us for the 'Gala of the <strong>Noble Heart</strong>' a
            premier charity event celebrating generosity and sophistication.
            Enjoy music, fine dining, and make a meaningful difference."
          </p>

          <div className={styles.buttonContainer}>
            <ButtonUse href="/contact" text="BOOK WITH US NOW" />
          </div>
        </h1>
        <div className={styles.eventDetails}>
          <h2>TIME & PLACE </h2>
          <p>
            March 16, 2024, 19:00 – March 17, 2024, 00:00
            <br />
            New York, 5th Ave, New York, NY, United States
          </p>
          <h3>ABOUT THE EVENT </h3>
          <p>
            Here are some general information about charity galas and tips on
            appropriate attire:
          </p>
          <h4>INFORMATIONS ABOUT CHARITY GALA</h4>
          <p>
            Charity galas are events organized with the purpose of raising funds
            for charitable causes or nonprofit organizations. These events
            typically include gala dinners, silent or live auctions, artistic
            performances, inspiring speeches, and other entertainment. Funds
            raised at charity galas are often used to support social welfare
            programs, poverty alleviation initiatives, medical research,
            educational projects, and other philanthropic endeavors. Charity
            galas provide attendees with the opportunity to contribute to
            important causes while enjoying an elegant and entertaining evening.
          </p>
          <h4>DRESS CODE FOR CHARITY GALAS </h4>
          <p>
            Charity galas are usually formal events where attendees are
            encouraged to dress elegantly. For men, a full suit with a tie or
            bow tie is appropriate. Dark and classic colors such as black, navy,
            or gray are preferred. For women, a cocktail dress or a long gown is
            suitable. Colors and styles may vary depending on the theme of the
            event, but it's generally advised to avoid overly casual outfits or
            overly bright colors. Accessories such as elegant jewelry, clutches,
            and matching shoes can complete the look for a sophisticated
            finishing touch.
          </p>
          <p>
            By following these guidelines, attendees can prepare to have a
            memorable experience at a charity gala while supporting a cause
            close to their hearts.
          </p>
          <div className={styles.buttonContainer2}>
            <ButtonUse href="/events" text="GALLERY" />
          </div>
        </div>
      </div>
      <div>
        <footer className={styles.footer}>
          <section className={styles.tariffs}>
            <h2 className={styles.sectionTitle}>TARIFFS</h2>
            <p className={styles.sectionContent}>
              Please find below the ticket prices for the event:
            </p>
            <ul className={styles.tariffList}>
              <li>General Admission: $100</li>
              <li>VIP Admission: $250</li>
              <li>Corporate Sponsorship: $1000</li>
            </ul>
            <div className={`${styles.buttonContainer3}`}>
              <ButtonUse href="/contact" text="TICKETS" />
            </div>
          </section>
        </footer>
      </div>
    </div>
  );
};

export default event2;
