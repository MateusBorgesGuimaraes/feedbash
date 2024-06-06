import React, { InputHTMLAttributes } from "react";
import { useFormContext } from "react-hook-form";
import styles from "./InputForm.module.css";

type InputProps = React.ComponentProps<"input"> & {
  name: string;
  newColor?: string;
  newBorder?: string;
};

const InputForm = ({
  name,
  newColor = "var(--purple-800)",
  newBorder = "var(--purple-300)",
  ...props
}: InputProps) => {
  const { register } = useFormContext();

  return (
    <input
      style={{
        color: newColor,
        borderLeftColor: newBorder,
      }}
      id={name}
      className={styles.inputForm}
      {...register(name)}
      {...props}
    />
  );
};

export default InputForm;
