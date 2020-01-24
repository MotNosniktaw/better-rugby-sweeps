import React from "react";

export default function FrontButton({ children, open }) {
  return (
    <div
      style={{
        width: "732px",
        margin: "16px",
        border: "2px solid orange",
        height: "40px",
        textAlign: "center",
        background: "rgba(255, 255,255, 0.4)",
        fontWeight: "bold",
        padding: "6px"
      }}
      onClick={open}
    >
      {children}
    </div>
  );
}
