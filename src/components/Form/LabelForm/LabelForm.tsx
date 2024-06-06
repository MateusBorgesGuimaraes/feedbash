import React from "react";
import styles from "./LabelForm.module.css";

type LabelFormProps = React.ComponentProps<"label"> & {
  colorNew?: string;
};

const LabelForm = ({
  colorNew = "var(--purple-100)",
  ...props
}: LabelFormProps) => {
  return (
    <label
      style={{ color: colorNew }}
      className={styles.labelForm}
      {...props}
    />
  );
};

export default LabelForm;
