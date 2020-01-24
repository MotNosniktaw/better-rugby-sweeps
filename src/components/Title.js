import React from "react";

export default function Title({ children }) {
  return (
    <div
      style={{
        fontSize: "36px",
        textAlign: "center"
      }}
    >
      {children}
    </div>
  );
}
