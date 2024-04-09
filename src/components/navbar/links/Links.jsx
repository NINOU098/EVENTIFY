"use client";
import Link from "next/link";
import React, { Fragment, useState } from "react";
import styles from "./links.module.css";
import { usePathname } from "next/navigation";
import MenuIcon from "@mui/icons-material/Menu";

const tab = [
  {
    title: "HOME",
    path: "/",
  },
  {
    title: "GALA OF THE STARS",
    path: "/event1",
  },
  {
    title: "GALA OF THE NOBLE HEART",
    path: "/event2",
  },
  {
		title: "Evenments",
		path: "/events",
	},
  {
    title: "CONTACT",
    path: "/contact",
  },
];

const Links = () => {
  const [open, setOpen] = useState(false);
  const pathName = usePathname();

  const onClickHandler = () => {
    setOpen(!open);
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.LinksContainer}>
          {tab.map((item, index) => (
            <div key={index}>
              <Link
                className={`${pathName === item.path ? styles.active : ""}`}
                href={item.path}
              >
                {item.title}
              </Link>
            </div>
          ))}
        </div>
        <div>
          <MenuIcon onClick={onClickHandler} className={styles.mobileButton} />
          {open && (
            <div className={styles.mobileLinks}>
              {tab.map((item, index) => (
                <div key={index}>
                  <Link
                    className={pathName === item.path && styles.active}
                    href={item.path}
                  >
                    {item.title}
                  </Link>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Links;

