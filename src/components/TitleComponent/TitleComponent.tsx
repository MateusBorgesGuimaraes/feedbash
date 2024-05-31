import React from "react";
import { assets } from "../../assets/assets";
import styles from "./TitleComponent.module.css";

type TitleComponentProps = {
  children: React.ReactNode;
  color?: string;
};

const TitleComponent = ({
  children,
  color = "var(--purple-700)",
}: TitleComponentProps) => {
  return (
    <div style={{ color: color }} className={styles.titleStyles}>
      {children}
    </div>
  );
};

export default TitleComponent;
