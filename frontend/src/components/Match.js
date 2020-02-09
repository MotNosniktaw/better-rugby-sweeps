import React from "react";
import Card from "./Card";
import Team from "./Team";
import Flag from "./Flag";
import Player from "./Player";
import CountryPicker from "./CountryPicker";
import { DateTime } from "luxon";

export default function Match({ details, home, setHome, away, setAway, homePlayer, awayPlayer }) {
  const dt = new DateTime.fromISO(details).toLocaleString(DateTime.DATETIME_FULL);

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
          {home === "" ? (
            <CountryPicker setCountry={setHome} />
          ) : (
            <>
              <Team team={home.name} />
              <Flag flag={home.flag} onClick={() => setHome("")} />
            </>
          )}
          <Player>{homePlayer}</Player>
        </Card>
        <Card>
          {away === "" ? (
            <CountryPicker setCountry={setAway} />
          ) : (
            <>
              <Team team={away.name} />
              <Flag flag={away.flag} onClick={() => setAway("")} />
            </>
          )}
          <Player>{awayPlayer}</Player>
        </Card>
      </div>
      <div style={{ flexGrow: "1" }}>{dt}</div>
    </div>
  );
}
