import React from "react";
import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <div className={styles.contactContainer}>
      <div className={styles.backgroundImage}>
        <div className={styles.formContainer}>
          <h1 className={styles.contactTitle}>Contact Us</h1>
          <form className={styles.contactForm}>
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Your Email" />
            <textarea placeholder="Your Message"></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
      <div className={styles.detailsAndMapContainer}>
        <div className={styles.eventInfo}>
          <h2> Are you ready to host an unforgettable event?</h2>
          <p>
            At Eventify, we specialize in crafting gala events that epitomize
            sophistication and glamour. From exclusive charity balls to high-end
            fashion galas, our team is dedicated to creating experiences that
            not only impress but also leave a lasting impression. Book with us
            and let us elevate your next event into a luxurious celebration. Get
            in touch today, and let's start planning your event of elegance.
          </p>
        </div>
        <div className={styles.mapContainer}>
          <div className={styles.additionalInfo}>
            <h2>Questions or Comments:</h2>
            <p>5th St, New York, NY, États-Unis</p>
            <p>bookings@eventify.com</p>
            <p>(718) 555-0123</p>
          </div>
          <h2 className={styles.mapTitle}>How to Get There?</h2>
          <iframe
            className={styles.googleMap}
            title="Location Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.481318311256!2d-73.96482913318505!3d40.773431462519504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25894f6830e11%3A0xb2a302b01ff335e5!2sThe%20Carlyle%2C%20A%20Rosewood%20Hotel!5e0!3m2!1sfr!2sca!4v1707105625516!5m2!1sfr!2sca"
            frameBorder="0"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
