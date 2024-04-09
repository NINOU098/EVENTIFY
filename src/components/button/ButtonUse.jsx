import React from "react";
import Link from "next/link";
import styles from "./buttonUse.module.css";

const ButtonUse = ({ href, text }) => {
  return (
    <Link href={href}>
      <button className={styles.Button}>{text}</button>
    </Link>
  );
};

export default ButtonUse;


