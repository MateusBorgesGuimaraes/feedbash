import React from "react";
import { lighten } from "polished";
import styles from "./ButtonForm.module.css";

type ButtonProps = React.ComponentProps<"button"> & {
  children: React.ReactNode;
  background?: string;
  color?: string;
};

const ButtonForm = ({
  children,
  background = "hsl(218, 5%, 71%)",
  color = "white",
  ...rest
}: ButtonProps) => {
  const customStyles: React.CSSProperties = {
    background,
    color,
  };

  const hoverBackground = lighten(0.1, background);

  return (
    <button
      style={customStyles}
      {...rest}
      className={styles.buttonForm}
      onMouseEnter={(e) => (e.currentTarget.style.background = hoverBackground)}
      onMouseLeave={(e) => (e.currentTarget.style.background = background)}
    >
      {children}
    </button>
  );
};

export default ButtonForm;
