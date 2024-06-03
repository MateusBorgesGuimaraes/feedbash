import React from "react";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";
import { lighten } from "polished";
import styles from "./ButtonLinkSmall.module.css";

type ButtonLinkSmallProps = React.ComponentProps<"a"> & {
  children: React.ReactNode;
  icon: string;
  link: string;
  background?: string;
  color?: string;
};

const ButtonLinkSmall = ({
  children,
  icon,
  link,
  color = "white",
  background = "hsl(268, 46%, 39%)",
  ...rest
}: ButtonLinkSmallProps) => {
  const customStyles: React.CSSProperties = {
    background,
    color,
  };

  const hoverBackground = lighten(0.1, background);

  return (
    <Link
      className={styles.smallButton}
      style={customStyles}
      to={link}
      {...rest}
      onMouseEnter={(e) => (e.currentTarget.style.background = hoverBackground)}
      onMouseLeave={(e) => (e.currentTarget.style.background = background)}
    >
      <img src={icon} alt="" />
      {children}
    </Link>
  );
};

export default ButtonLinkSmall;
