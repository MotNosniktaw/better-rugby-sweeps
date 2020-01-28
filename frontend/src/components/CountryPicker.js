import React from "react";

export default function({ countries, setCountry }) {
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
        {countries.map(country => (
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
