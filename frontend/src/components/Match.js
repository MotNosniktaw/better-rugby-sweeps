import React from "react";
import Card from "./Card";
import Team from "./Team";
import Flag from "./Flag";
import Player from "./Player";
import CountryPicker from "./CountryPicker";

export default function Match({ countries, details, home, setHome, away, setAway, homePlayer, awayPlayer }) {
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
            <CountryPicker countries={countries} setCountry={setHome} />
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
            <CountryPicker countries={countries} setCountry={setAway} />
          ) : (
            <>
              <Team team={away.name} />
              <Flag flag={away.flag} onClick={() => setAway("")} />
            </>
          )}
          <Player>{awayPlayer}</Player>
        </Card>
      </div>
      <div style={{ flexGrow: "1" }}>{details}</div>
    </div>
  );
}
