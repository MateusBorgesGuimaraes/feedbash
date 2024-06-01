import React from "react";
import { useFormContext } from "react-hook-form";

type ErrorProps = {
  field: string;
};

/* eslint-disable @typescript-eslint/no-explicit-any */
function get(obj: Record<any, any>, path: string) {
  const travel = (regexp: RegExp) =>
    String.prototype.split
      .call(path, regexp)
      .filter(Boolean)
      .reduce(
        (res, key) => (res !== null && res !== undefined ? res[key] : res),
        obj
      );

  const result = travel(/[,[\]]+?/) || travel(/[,[\].]+?/);

  return result;
}
/* eslint-enable @typescript-eslint/no-explicit-any */

const ErrorForm = ({ field }: ErrorProps) => {
  const {
    formState: { errors },
  } = useFormContext();
  const fieldError = get(errors, field);
  if (!fieldError) {
    return null;
  }
  return (
    <p
      style={{
        fontSize: "14px",
        color: "var(--purple-900)",
        fontWeight: "600",
      }}
    >
      {fieldError.message?.toString()}
    </p>
  );
};

export default ErrorForm;
