import React from "react";
import "./App.css";
import Match from "./components/Match";
import PopupForm from "./components/PopupForm";
import Title from "./components/Title";
import MainSection from "./components/MainSection";
import FrontButton from "./components/FrontButton";
import Background from "./components/Background";

function App() {
  const [dialogOpen, setDialogOpen] = React.useState(false);
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
    <Background>
      <Title>Six Nations Weekly Beer Sweeps - Giovanni Edition!</Title>
      <MainSection>
        <Match details="Saturday 1st Feb - KO 14.15" home={countries.Wales} away={countries.Italy} homePlayer={players[0]} awayPlayer={players[1]} />
        <Match details="Saturday 1st Feb - KO 16.45" home={countries.Ireland} away={countries.Scotland} homePlayer={players[2]} awayPlayer={players[3]} />
        <Match details="Sunday 2nd Feb - KO 15.00" home={countries.France} away={countries.England} homePlayer={players[4]} awayPlayer={players[5]} />
        <FrontButton open={() => setDialogOpen(true)}>LET'S PARTY MOTHERFUCKERS!!!!!</FrontButton>
      </MainSection>
      <PopupForm open={dialogOpen} setOpen={setDialogOpen} setPlayers={setPlayers} />
    </Background>
  );
}

export default App;
