import Link from "next/link";
import Image from "next/image";
import styles from "./templatePage.module.css";

export default function TemplatePage({
  title = "Titre",
  description = "Description ",
  textButton1 = "Reserver",
  textButton2 = "cancel",
  src,
  alt,
}) {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.description}>{description}</p>
        <div>
        
          <Link href="/contact" passHref>
            <button className={styles.button}>{textButton1}</button>
          </Link>
          <Link href="/events" passHref>
            <button className={styles.button}> {textButton2}</button>
          </Link>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image src={src} alt={alt} fill />
      </div>
    </div>
  );
}
