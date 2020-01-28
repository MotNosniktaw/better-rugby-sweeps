import React from "react";

export default function Card({ children }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "350px",
        flexGrow: "1",
        justifyContent: "space-around",
        position: "relative"
      }}
    >
      {children}
    </div>
  );
}
