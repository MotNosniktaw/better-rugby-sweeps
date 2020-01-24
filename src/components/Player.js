import React from "react";

export default function Player({ children }) {
  return (
    <div
      style={{
        width: "70%",
        height: "32px",
        borderRadius: "8px",
        border: "black 2px dashed",
        background: "rgba(255, 255, 255, 0.6",
        textAlign: "center",
        fontSize: "20px"
      }}
    >
      {children}
    </div>
  );
}
