import React from "react";

export default function FrontButton({ children }) {
  return (
    <div
      style={{
        width: "732px",
        margin: "16px",
        border: "2px solid orange",
        height: "40px",
        textAlign: "center",
        background: "rgba(255, 50, 50, 1)",
        fontWeight: "bold",
        padding: "6px"
      }}
    >
      {children}
    </div>
  );
}
