import React from "react";
import styles from "./StartWeb.module.css";
import { StarsBackground } from "./stars-background";
import { FlipWords } from "./flip-words";
import CountDown from "./CountDown";

export default function StartWeb() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          Hi there! <br /> <span>Welcome to Thanh&apos;s </span>
          <br />
          <FlipWords words={["Portfolio", "Website"]} />
          <div className={styles.aurora}>
            <div className={styles.aurora__item}></div>
            <div className={styles.aurora__item}></div>
            <div className={styles.aurora__item}></div>
            <div className={styles.aurora__item}></div>
          </div>
        </h1>
        <p className={styles.subtitle}>
          I’m a backend-focused developer, specializing in building scalable
          systems and optimizing website performance.
        </p>
      </div>
      <StarsBackground />
      <div className="rounded-full absolute bottom-4 right-4 flex items-center justify-center">
        <CountDown />
      </div>
    </div>
  );
}
