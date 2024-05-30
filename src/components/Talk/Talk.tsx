import React from "react";
import { assets } from "../../assets/assets";
import styles from "./Talk.module.css";

type TalkPros = {
  children: React.ReactNode;
  iconPosition?: "left" | "right";
  icon?: string;
};

const Talk = ({ children, iconPosition, icon }: TalkPros) => {
  return (
    <div className={styles.talkContainer}>
      {iconPosition === "left" && (
        <img className={styles.talkImg} src={icon} alt="" />
      )}
      <p className={styles.talkP}>{children}</p>
      {iconPosition === "right" && (
        <img className={styles.talkImg} src={icon} alt="" />
      )}
    </div>
  );
};

export default Talk;
