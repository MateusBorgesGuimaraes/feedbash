import React from "react";
import { lighten } from "polished";

type ButtonProps = React.ComponentProps<"button"> & {
  children: React.ReactNode;
  background?: string;
  color?: string;
};

const Button = ({
  children,
  background = "hsl(218, 5%, 71%)",
  color = "white",
  ...rest
}: ButtonProps) => {
  const defaultStyles: React.CSSProperties = {
    border: "none",
    display: "flex",
    alignItems: "center",
    background: "hsl(218, 5%, 71%)",
    padding: "1.125rem 1.5rem",
    fontSize: "1.5rem",
    color: "white",
    fontWeight: "700",
    borderRadius: "0.5rem",
    gap: ".375rem",
    cursor: "pointer",
    transition: "background 0.3s ease",
    boxShadow: "4px 4px hsl(219, 82%, 34%, 20%)",
  };

  const customStyles: React.CSSProperties = {
    background,
    color,
  };

  const hoverBackground = lighten(0.1, background);

  const combinedStyles = { ...defaultStyles, ...customStyles };

  return (
    <button
      style={combinedStyles}
      {...rest}
      onMouseEnter={(e) => (e.currentTarget.style.background = hoverBackground)}
      onMouseLeave={(e) => (e.currentTarget.style.background = background)}
    >
      {children}
    </button>
  );
};

export default Button;
