import React from "react";
import Card from "./Card";
import Team from "./Team";
import Flag from "./Flag";
import Player from "./Player";
import beer from "../beer.jpg";
import sad from "../sadLukins.jpeg";

export default function Match({ callback, matchId, details, home, away, homePlayer, awayPlayer, winner }) {
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

  async function sendResults(result) {
    if (!winner) {
      fetch("http://localhost:3005/matches/result", {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ _id: matchId, Winner: result })
      });
    }

    window.location.reload();
    return false;
  }

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
        <Card onClick={() => sendResults("home")}>
          <Team team={home} />
          <Flag flag={homeFlag} />
          <Player>{homePlayer}</Player>
          {winner &&
            (winner === "home" ? (
              <img src={beer} style={{ position: "absolute", width: "100px", transform: "rotate(30deg)" }} />
            ) : (
              <img src={sad} style={{ position: "absolute", width: "120px", transform: "rotate(-30deg)" }} />
            ))}
        </Card>
        <Card onClick={() => sendResults("away")}>
          <Team team={away} />
          <Flag flag={awayFlag} />
          <Player>{awayPlayer}</Player>
          {winner &&
            (winner === "away" ? (
              <img src={beer} style={{ position: "absolute", width: "100px", transform: "rotate(30deg)" }} />
            ) : (
              <img src={sad} style={{ position: "absolute", width: "120px", transform: "rotate(-30deg)" }} />
            ))}
        </Card>
      </div>
      <div style={{ flexGrow: "1" }}>{details}</div>
    </div>
  );
}
