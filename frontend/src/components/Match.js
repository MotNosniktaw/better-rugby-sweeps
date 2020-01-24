import React from "react";
import Card from "./Card";
import Team from "./Team";
import Flag from "./Flag";
import Player from "./Player";

export default function Match({ details, home, away, homePlayer, awayPlayer }) {
  return (
    <div
      style={{
        width: "732px",
        margin: "16px",
        border: "2px solid orange",
        flexGrow: "2",
        background: "rgba(255, 255,255, 0.4)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }}
    >
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-around",
          flexGrow: "5"
        }}
      >
        <Card>
          <Team team={home.name} />
          <Flag flag={home.flag} />
          <Player>{homePlayer}</Player>
        </Card>
        <Card>
          <Team team={away.name} />
          <Flag flag={away.flag} />
          <Player>{awayPlayer}</Player>
        </Card>
      </div>
      <div style={{ flexGrow: "1" }}>{details}</div>
    </div>
  );
}
