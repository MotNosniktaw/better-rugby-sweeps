import React from "react";

export default function({ setCountry }) {
  // const [countries, setCountries] = React.useState([]);
  // const [thing] = React.useState("");

  // async function getCountries() {
  //   const res = await fetch("http://localhost:3005/countries");
  //   res.json().then(res => setCountries(res));
  // }

  // React.useEffect(() => {
  //   getCountries();
  // }, [thing]);

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

  return (
    <div style={{ height: "130px", position: "relative" }}>
      Click here to pick home team!
      <div
        style={{
          width: "200px",
          position: "absolute",
          top: "30px",
          background: "#BB9947",
          borderRadius: "8px",
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-around",
          border: "1px solid #997727"
        }}
      >
        {countries &&
          countries.map(country => (
            <div
              style={{ padding: "4px", width: "90px", textAlign: "center" }}
              onClick={() => {
                setCountry(country);
              }}
            >
              {country.name}
            </div>
          ))}
      </div>
    </div>
  );
}
