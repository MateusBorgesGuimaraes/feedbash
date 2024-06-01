import React from "react";
import styles from "./LabelForm.module.css";

const LabelForm = (props: React.ComponentProps<"label">) => {
  return <label className={styles.inputForm} {...props} />;
};

export default LabelForm;
