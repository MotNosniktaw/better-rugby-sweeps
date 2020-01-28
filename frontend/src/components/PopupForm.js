import React from "react";
import PlayerInput from "./PlayerInput";

export default function PopupForm({ open, setOpen, setPlayers }) {
  const [playerOne, setPlayerOne] = React.useState("");
  const [playerTwo, setPlayerTwo] = React.useState("");
  const [playerThree, setPlayerThree] = React.useState("");
  const [playerFour, setPlayerFour] = React.useState("");
  const [playerFive, setPlayerFive] = React.useState("");
  const [playerSix, setPlayerSix] = React.useState("");

  function loadPlayers() {
    let playersIn = [playerOne, playerTwo, playerThree, playerFour, playerFive, playerSix];

    let playersOut = [];

    while (playersIn.length > 0) {
      playersOut.push(playersIn.splice(Math.floor(Math.random() * playersIn.length), 1)[0]);
    }

    setPlayers(playersOut);
    setOpen(false);
  }

  return (
    <div
      style={{
        position: "absolute",
        background: "rgba(0,0,0,0.5)",
        width: "100%",
        height: "100%",
        top: 0,
        left: 0,
        display: open ? "flex" : "none",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <div
        style={{
          width: "600px",
          height: "450px",
          background: "#ffeeaa",
          border: "2px solid orange",
          borderRadius: "8px",
          padding: "16px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          alignItems: "center"
        }}
      >
        <div style={{ fontSize: "28px", fontWeight: "bold" }}>Input Player Names</div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between"
          }}
        >
          <PlayerInput setPlayer={setPlayerOne} player={playerOne}>
            Player 1
          </PlayerInput>
          <PlayerInput setPlayer={setPlayerTwo} player={playerTwo}>
            Player 2
          </PlayerInput>
          <PlayerInput setPlayer={setPlayerThree} player={playerThree}>
            Player 3
          </PlayerInput>
          <PlayerInput setPlayer={setPlayerFour} player={playerFour}>
            Player 4
          </PlayerInput>
          <PlayerInput setPlayer={setPlayerFive} player={playerFive}>
            Player 5
          </PlayerInput>
          <PlayerInput setPlayer={setPlayerSix} player={playerSix}>
            Player 6
          </PlayerInput>
        </div>
        <div
          style={{
            width: "100%",
            height: "80px",
            display: "flex",
            justifyContent: "space-around"
          }}
        >
          <div
            style={{
              width: "250px",
              height: "60px",
              border: "2px solid orange",
              background: "#EEBB88",
              borderRadius: "8px",
              textAlign: "center",
              fontSize: "24px",
              fontWeight: "bold",
              margin: "8px"
            }}
            onClick={() => loadPlayers()}
          >
            Let's do this!!!
          </div>
          <div
            style={{
              width: "250px",
              height: "60px",
              border: "2px solid orange",
              background: "#EE9966",
              borderRadius: "8px",
              textAlign: "center",
              fontSize: "24px",
              fontWeight: "bold",
              margin: "8px"
            }}
            onClick={() => setOpen(false)}
          >
            Cancel
          </div>
        </div>
      </div>
    </div>
  );
}
