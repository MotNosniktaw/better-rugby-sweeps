import React from "react";

export default function Background({ children }) {
  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        background: "#ddbb44",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        position: "relative"
      }}
    >
      {children}
    </div>
  );
}
