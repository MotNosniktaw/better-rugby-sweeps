import React from "react";

export default function PlayerInput({ children, player, setPlayer }) {
  return (
    <div
      style={{
        width: "250px",
        height: "80px",
        border: "orange 2px solid",
        borderRadius: "8px",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        margin: "8px"
      }}
    >
      <div
        style={{
          width: "100%",
          height: "30px",
          fontWeight: "bold",
          textAlign: "center"
        }}
      >
        {children}
      </div>
      <input
        type="text"
        value={player}
        style={{
          width: "70%",
          height: "32px",
          borderRadius: "8px",
          border: "black 2px dashed",
          background: "rgba(255, 255, 255, 0.6",
          textAlign: "center",
          fontSize: "20px"
        }}
        onChange={e => setPlayer(e.target.value)}
      ></input>
    </div>
  );
}
