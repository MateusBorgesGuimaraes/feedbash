import React from "react";
import { lighten } from "polished";
import styles from "./ButtonSmall.module.css";

type ButtonSmallProps = React.ComponentProps<"button"> & {
  children: React.ReactNode;
  icon: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  background?: string;
  color?: string;
};

const ButtonSmall = ({
  children,
  icon,
  onClick,
  color = "white",
  background = "hsl(268, 46%, 39%)",
  ...rest
}: ButtonSmallProps) => {
  const customStyles: React.CSSProperties = {
    background,
    color,
  };

  const hoverBackground = lighten(0.1, background);

  return (
    <button
      className={styles.smallButton}
      style={customStyles}
      onClick={onClick}
      {...rest}
      onMouseEnter={(e) => (e.currentTarget.style.background = hoverBackground)}
      onMouseLeave={(e) => (e.currentTarget.style.background = background)}
    >
      <img src={icon} alt="" />
      {children}
    </button>
  );
};

export default ButtonSmall;
