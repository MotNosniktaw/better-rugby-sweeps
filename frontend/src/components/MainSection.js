import React from "react";

export default function MainSection({ children }) {
  return (
    <div
      style={{
        flexGrow: "1",
        boxSizing: "border-box",
        padding: "16px",
        width: "800px"
      }}
    >
      <div
        style={{
          height: "100%",
          border: "2px orange solid",
          display: "flex",
          flexDirection: "column"
        }}
      >
        {children}
      </div>
    </div>
  );
}
