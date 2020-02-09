import React from "react";
import "./App.css";
import Match from "./components/Match";
import PickedMatch from "./components/PickedMatch";
import PopupForm from "./components/PopupForm";
import Title from "./components/Title";
import MainSection from "./components/MainSection";
import FrontButton from "./components/FrontButton";
import Background from "./components/Background";
import SendButton from "./components/SendButton";
import WeekPicker from "./components/WeekPicker";

function App() {
  const [dialogOpen, setDialogOpen] = React.useState(false);
  const [players, setPlayers] = React.useState([]);
  const [matches, setMatches] = React.useState([]);
  const [countryOne, setCountryOne] = React.useState("");
  const [countryTwo, setCountryTwo] = React.useState("");
  const [countryThree, setCountryThree] = React.useState("");
  const [countryFour, setCountryFour] = React.useState("");
  const [countryFive, setCountryFive] = React.useState("");
  const [countrySix, setCountrySix] = React.useState("");
  const [weekNumber, setWeekNumber] = React.useState(1);

  const countries = [countryOne, countryTwo, countryThree, countryFour, countryFive, countrySix];

  const playersValid = players.length === 6 && players[0] !== "" && players[1] !== "" && players[2] !== "" && players[3] !== "" && players[4] !== "" && players[5] !== "";
  const playersUnique = players.every(checkPlayerUnique);
  const countriesValid = countries.length === 6 && countries[0] !== "" && countries[1] !== "" && countries[2] !== "" && countries[3] !== "" && countries[4] !== "" && countries[5] !== "";
  const countriesUnique = countries.every(checkCountryUnique);

  const inputValid = playersValid && playersUnique && countriesValid && countriesUnique;

  function checkPlayerUnique(player) {
    var check = players.filter(i => i === player);
    return check.length === 1;
  }

  function checkCountryUnique(country) {
    var check = countries.filter(i => i.name === country.name);
    return check.length === 1;
  }

  React.useEffect(() => {
    async function getMatches() {
      fetch(`http://localhost:3005/matches/${weekNumber}`).then(async r => {
        const res = await r.json();
        setMatches(res);
      });
    }
    getMatches();
  }, [weekNumber]);

  function handleSubmit() {
    const data = [
      {
        WeekNumber: 1,
        HomeTeam: countryOne,
        HomePlayer: players[0] || "",
        AwayTeam: countryTwo,
        AwayPlayer: players[1] || "",
        Kickoff: new Date()
      },
      {
        WeekNumber: 1,
        HomeTeam: countryThree,
        HomePlayer: players[2] || "",
        AwayTeam: countryFour,
        AwayPlayer: players[3] || "",
        Kickoff: new Date()
      },
      {
        WeekNumber: 1,
        HomeTeam: countryFive,
        HomePlayer: players[4] || "",
        AwayTeam: countrySix,
        AwayPlayer: players[5] || "",
        Kickoff: new Date()
      }
    ];
    fetch("http://localhost:3005/matches", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });
  }

  return (
    <Background>
      <Title>Six Nations Weekly Beer Sweeps - Giovanni Edition!</Title>
      <MainSection>
        <WeekPicker weekNumber={weekNumber} setWeekNumber={setWeekNumber} />
        {matches.length > 1 ? (
          matches.map(m => {
            console.log(m);
            return (
              <>
                <PickedMatch details={m.Kickoff} home={m.HomeTeam} away={m.AwayTeam} homePlayer={m.HomePlayer} awayPlayer={m.AwayPlayer}></PickedMatch>
              </>
            );
            // return <Match details={m} home={countryOne} setHome={setCountryOne} away={countryTwo} setAway={setCountryTwo} homePlayer={players[0]} awayPlayer={players[1]} />;
          })
        ) : (
          <>
            <Match details="Saturday 8th Feb - KO 14.15" home={countryOne} setHome={setCountryOne} away={countryTwo} setAway={setCountryTwo} homePlayer={players[0]} awayPlayer={players[1]} />
            <Match details="Saturday 8th Feb - KO 16.45" home={countryThree} setHome={setCountryThree} away={countryFour} setAway={setCountryFour} homePlayer={players[2]} awayPlayer={players[3]} />
            <Match details="Sunday 9th Feb - KO 15.00" home={countryFive} setHome={setCountryFive} away={countrySix} setAway={setCountrySix} homePlayer={players[4]} awayPlayer={players[5]} />
            <FrontButton open={() => setDialogOpen(true)}>LET'S PARTY MOTHERFUCKERS!!!!!</FrontButton>
            {inputValid && (
              <SendButton
                onClick={() => {
                  handleSubmit();
                }}
              >
                COME ON!!!!!! EVERYONE IS READY NOW!!!!
              </SendButton>
            )}
          </>
        )}
      </MainSection>
      <PopupForm open={dialogOpen} setOpen={setDialogOpen} setPlayers={setPlayers} />
    </Background>
  );
}

export default App;
