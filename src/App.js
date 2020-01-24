import React from "react";
import "./App.css";
import Match from "./components/Match";
import PopupForm from "./components/PopupForm";

function App() {
  const [dialogOpen, setDialogOpen] = React.useState(true);
  const [players, setPlayers] = React.useState([]);
  const countries = {
    England: {
      name: "England",
      flag: "https://www.crwflags.com/fotw/images/g/gb-eng.gif"
    },
    France: {
      name: "France",
      flag: "https://www.crwflags.com/fotw/images/f/fr.gif"
    },
    Ireland: {
      name: "Ireland",
      flag: "https://www.crwflags.com/FOTW/images/i/ie.gif"
    },
    Italy: {
      name: "Italy",
      flag: "https://www.crwflags.com/fotw/images/i/it.gif"
    },
    Scotland: {
      name: "Scotland",
      flag: "https://www.crwflags.com/fotw/images/g/gb-scotl.gif"
    },
    Wales: {
      name: "Wales",
      flag: "https://www.crwflags.com/fotw/images/g/gb-wales.gif"
    }
  };

  return (
    <div style={{ position: "relative" }}>
      <div
        style={{
          height: "100vh",
          width: "100%",
          background: "#ddbb44",
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}
      >
        <div
          style={{
            fontSize: "36px",
            textAlign: "center"
          }}
        >
          Six Nations Weekly Beer Sweeps - Giovanni Edition!
        </div>
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
            <Match
              details="Saturday 1st Feb - KO 14.15"
              home={countries.Wales}
              away={countries.Italy}
              homePlayer={players[0]}
              awayPlayer={players[1]}
            />
            <Match
              details="Saturday 1st Feb - KO 16.45"
              home={countries.Ireland}
              away={countries.Scotland}
              homePlayer={players[2]}
              awayPlayer={players[3]}
            />
            <Match
              details="Sunday 2nd Feb - KO 15.00"
              home={countries.France}
              away={countries.England}
              homePlayer={players[4]}
              awayPlayer={players[5]}
            />
            <div
              style={{
                width: "732px",
                margin: "16px",
                border: "2px solid orange",
                height: "40px",
                textAlign: "center",
                background: "rgba(255, 255,255, 0.4)",
                fontWeight: "bold",
                padding: "6px"
              }}
              onClick={() => setDialogOpen(true)}
            >
              LET'S PARTY MOTHERFUCKERS!!!!!
            </div>
          </div>
        </div>
      </div>
      <PopupForm
        open={dialogOpen}
        setOpen={setDialogOpen}
        setPlayers={setPlayers}
      />
    </div>
  );
}

export default App;
