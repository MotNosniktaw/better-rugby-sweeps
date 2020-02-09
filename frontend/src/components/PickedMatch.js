import React from "react";
import Card from "./Card";
import Team from "./Team";
import Flag from "./Flag";
import Player from "./Player";

export default function Match({ details, home, away, homePlayer, awayPlayer }) {
  const [homeFlag, setHomeFlag] = React.useState("");
  const [awayFlag, setAwayFlag] = React.useState("");

  React.useEffect(() => {
    async function getFlags() {
      fetch(`http://localhost:3005/flag/${home}`).then(async r => {
        const res = await r.json();
        setHomeFlag(res[0].flag);
      });
      fetch(`http://localhost:3005/flag/${away}`).then(async r => {
        const res = await r.json();
        setAwayFlag(res[0].flag);
      });
    }
    getFlags();
  }, [away, home]);
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
          <Team team={home} />
          <Flag flag={homeFlag} />
          <Player>{homePlayer}</Player>
        </Card>
        <Card>
          <Team team={away} />
          <Flag flag={awayFlag} />
          <Player>{awayPlayer}</Player>
        </Card>
      </div>
      <div style={{ flexGrow: "1" }}>{details}</div>
    </div>
  );
}
