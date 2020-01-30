import React from "react";
import "./App.css";
import Match from "./components/Match";
import PopupForm from "./components/PopupForm";
import Title from "./components/Title";
import MainSection from "./components/MainSection";
import FrontButton from "./components/FrontButton";
import Background from "./components/Background";
import SendButton from "./components/SendButton";

function App() {
  const [dialogOpen, setDialogOpen] = React.useState(false);
  const [players, setPlayers] = React.useState([]);
  // const [countries, setCountries] = React.useState([]);
  const [countryOne, setCountryOne] = React.useState("");
  const [countryTwo, setCountryTwo] = React.useState("");
  const [countryThree, setCountryThree] = React.useState("");
  const [countryFour, setCountryFour] = React.useState("");
  const [countryFive, setCountryFive] = React.useState("");
  const [countrySix, setCountrySix] = React.useState("");

  // const sendButton = players.length === 6 && countryOne !== "" && countryTwo !== "" && countryThree !== "" && countryFour !== "" && countryFive !== "" && countrySix !== "";
  const sendButton = true;

  // const res = fetch("https://localhost:5000/api/countries", {
  //   method: "GET",
  //   headers: { Accept: "application/json", "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" }
  // })
  //   .then(r => console.log(r))
  //   .catch(err => console.log(err));
  const countries = [
    {
      id: 1,
      name: "England",
      flag: "https://www.crwflags.com/fotw/images/g/gb-eng.gif"
    },
    {
      id: 2,
      name: "France",
      flag: "https://www.crwflags.com/fotw/images/f/fr.gif"
    },
    {
      id: 3,
      name: "Ireland",
      flag: "https://www.crwflags.com/FOTW/images/i/ie.gif"
    },
    {
      id: 4,
      name: "Italy",
      flag: "https://www.crwflags.com/fotw/images/i/it.gif"
    },
    {
      id: 5,
      name: "Scotland",
      flag: "https://www.crwflags.com/fotw/images/g/gb-scotl.gif"
    },
    {
      id: 6,
      name: "Wales",
      flag: "https://www.crwflags.com/fotw/images/g/gb-wales.gif"
    }
  ];

  function handleSubmit() {
    const data = [
      {
        WeekNumber: 1,
        HomeTeam: countryOne,
        HomePlayer: players[0],
        AwayTeam: countryTwo,
        AwayPlayer: players[1],
        Kickoff: new Date()
      },
      {
        WeekNumber: 1,
        HomeTeam: countryThree,
        HomePlayer: players[2],
        AwayTeam: countryFour,
        AwayPlayer: players[3],
        Kickoff: new Date()
      },
      {
        WeekNumber: 1,
        HomeTeam: countryFive,
        HomePlayer: players[4],
        AwayTeam: countrySix,
        AwayPlayer: players[5],
        Kickoff: new Date()
      }
    ];

    fetch("https://localhost:5000/api/Matches", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      },
      method: "POST",
      body: JSON.stringify(data)
    }).then(res => console.log(res));
  }

  return (
    <Background>
      <Title>Six Nations Weekly Beer Sweeps - Giovanni Edition!</Title>
      <MainSection>
        <Match
          details="Saturday 1st Feb - KO 14.15"
          countries={countries}
          home={countryOne}
          setHome={setCountryOne}
          away={countryTwo}
          setAway={setCountryTwo}
          homePlayer={players[0]}
          awayPlayer={players[1]}
        />
        <Match
          details="Saturday 1st Feb - KO 14.15"
          countries={countries}
          home={countryThree}
          setHome={setCountryThree}
          away={countryFour}
          setAway={setCountryFour}
          homePlayer={players[2]}
          awayPlayer={players[3]}
        />
        <Match
          details="Saturday 1st Feb - KO 14.15"
          countries={countries}
          home={countryFive}
          setHome={setCountryFive}
          away={countrySix}
          setAway={setCountrySix}
          homePlayer={players[4]}
          awayPlayer={players[5]}
        />
        <FrontButton open={() => setDialogOpen(true)}>LET'S PARTY MOTHERFUCKERS!!!!!</FrontButton>
        {sendButton ? (
          <SendButton
            onClick={() => {
              console.log("FAAARRT");
              handleSubmit();
            }}
          >
            COME ON!!!!!! EVERYONE IS READY NOW!!!!
          </SendButton>
        ) : (
          ""
        )}
      </MainSection>
      <PopupForm open={dialogOpen} setOpen={setDialogOpen} setPlayers={setPlayers} />
    </Background>
  );
}

export default App;
