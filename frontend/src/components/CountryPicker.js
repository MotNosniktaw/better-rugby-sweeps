import React from "react";

export default function({ setCountry }) {
  const [countries, setCountries] = React.useState([]);

  React.useEffect(() => {
    async function getCountries() {
      fetch(`http://localhost:3005/countries/`).then(async r => {
        const res = await r.json();
        setCountries(res);
      });
    }
    getCountries();
  }, []);

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
              key={country.id}
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
