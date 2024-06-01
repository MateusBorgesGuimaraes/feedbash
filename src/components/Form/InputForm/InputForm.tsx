import React, { InputHTMLAttributes } from "react";
import { useFormContext } from "react-hook-form";
import styles from "./InputForm.module.css";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
}

const InputForm = (props: InputProps) => {
  const { register } = useFormContext();

  console.log(`Registering input: ${props.name}`, register(props.name));
  console.log("useFormContext output:", useFormContext());

  return (
    <input
      id={props.name}
      className={styles.inputForm}
      {...register(props.name)}
      {...props}
    />
  );
};

export default InputForm;
