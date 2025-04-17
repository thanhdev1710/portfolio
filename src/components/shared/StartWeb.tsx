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
          Xin chào! <br /> <span>Mình là ThanhDev </span>
          <br />
          <FlipWords
            duration={500}
            className="text-white"
            words={["Trang cá nhân", "Website"]}
          />
          <div className={styles.aurora}>
            <div className={styles.aurora__item}></div>
            <div className={styles.aurora__item}></div>
            <div className={styles.aurora__item}></div>
            <div className={styles.aurora__item}></div>
          </div>
        </h1>
        <p className={`text-white ${styles.subtitle}`}>
          Mình là lập trình viên web, chuyên xây dựng ứng dụng web từ giao diện
          người dùng đến hệ thống phía sau, với mục tiêu tối ưu trải nghiệm và
          hiệu năng toàn diện.
        </p>
      </div>
      <StarsBackground />
      <div className="rounded-full absolute bottom-4 right-4 flex items-center justify-center">
        <CountDown />
      </div>
    </div>
  );
}
