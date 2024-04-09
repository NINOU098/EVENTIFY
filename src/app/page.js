"use client";
import Card from "@/components/card/Card";
import styles from "./home.module.css";
import TemplatePage from "@/components/templatePage/TemplatePage";
import ButtonUse from "@/components/button/ButtonUse";


const Home = () => {
  return (
    <>
      <div className={styles.imageContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.headerTitle}>
            {" "}
            GALA & CORPORATE EVENTS WITH A TOUCH OF ELEGANCE
          </h1>

          <p className={styles.heroDescription}>
            "EXCLUSIVE CHARITABLE AND CORPORATE GALAS CRAFTING UNFORGETTABLE
            EXPERIENCES"
          </p>
          <ButtonUse href="/event1" text="EXPLORE CHARITY GALAS" />

          <ButtonUse href="/event2" text="DISCOVER FASHION GALAS" />
        </div>
      </div>

      <section className={styles.ourServices}>
        <div className={styles.sectionContainer}>
          <div className={styles.imageWrapper}>
            <img src="/gala53.jpg" alt="" className={styles.sectionImage} />
          </div>
          <div className={styles.textContent}>
            <h2>Our Services :</h2>
            <p>
              Eventify specializes in organizing upscale charity and fashion
              galas in New York's premier locations. With an eye for detail and
              a commitment to luxury, we ensure each event is an unforgettable
              experience.
            </p>
            <ButtonUse href="/contact" text="Learn More" />
          </div>
        </div>
      </section>

      <section className={styles.whoWeAre}>
        <div className={styles.sectionContainer}>
          <div className={styles.imageWrapper}>
            <img src="/gala55.jpg" alt="" className={styles.sectionImage2} />
          </div>
          <div className={styles.textContent}>
            <h2>Who We Are :</h2>
            <p>
              At Eventify, we are a collective of event planning experts
              passionate about crafting events that capture the essence of
              sophistication and class, making every moment special.
            </p>
            <ButtonUse href="/about" text="About Us" />
          </div>
        </div>
      </section>

      <section className={styles.whyChooseUs}>
        <div className={styles.sectionContainer}>
          <div className={styles.imageWrapper}>
            <img src="/gala54.jpg" alt="" className={styles.sectionImage} />
          </div>
          <div className={styles.textContent}>
            <h2>Why Choose Us :</h2>
            <p>
              Choose Eventify for our unwavering dedication to excellence and
              our ability to transform your vision into reality, ensuring your
              event stands out as the pinnacle of elegance and allure.
            </p>
            <ButtonUse href="/contact" text="Get in Touch" />
          </div>
        </div>
      </section>
    </>
  );
};
Home.pageName = "Home";
Home.config = { runtime: "client" };
export default Home;
