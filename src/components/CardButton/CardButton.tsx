import React from "react";
import styles from "./CardButton.module.css";
import { Link } from "react-router-dom";
import { assets } from "../../assets/assets";

type CardButton = React.ComponentProps<"a"> & {
  children: React.ReactNode;
  img: string;
  link?: string;
};

const CardButton = ({ children, img, link, ...rest }: CardButton) => {
  return (
    <Link
      {...rest}
      className={styles.cardButtonContainer}
      to={link ? link : "/"}
    >
      <img src={img} alt="" />
      <p>{children}</p>
    </Link>
  );
};

export default CardButton;
