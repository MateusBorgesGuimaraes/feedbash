import React from "react";

type ErrorGeneralProps = {
  error: string;
};

const ErrorGeneral = ({ error }: ErrorGeneralProps) => {
  return (
    <div
      style={{
        fontSize: "14px",
        color: "var(--purple-900)",
        fontWeight: "600",
      }}
    >
      {error}
    </div>
  );
};

export default ErrorGeneral;
