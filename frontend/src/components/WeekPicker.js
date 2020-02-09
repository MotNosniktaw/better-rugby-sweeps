import React from "react";

export default function WeekPicker({ weekNumber, setWeekNumber }) {
  return (
    <>
      <div style={{ display: "flex", width: "100%", justifyContent: "space-around" }}>
        <div
          style={{
            border: "2px solid orange",
            background: "rgba(255, 255,255, 0.4)",
            padding: "8px"
          }}
        >
          Week:
        </div>
        <div
          style={{
            border: "2px solid orange",
            background: "rgba(255, 255,255, 0.4)",
            padding: "8px"
          }}
          onClick={() => setWeekNumber(1)}
        >
          1
        </div>
        <div
          style={{
            border: "2px solid orange",
            background: "rgba(255, 255,255, 0.4)",
            padding: "8px"
          }}
          onClick={() => setWeekNumber(2)}
        >
          2
        </div>
        <div
          style={{
            border: "2px solid orange",
            background: "rgba(255, 255,255, 0.4)",
            padding: "8px"
          }}
          onClick={() => setWeekNumber(3)}
        >
          3
        </div>
        <div
          style={{
            border: "2px solid orange",
            background: "rgba(255, 255,255, 0.4)",
            padding: "8px"
          }}
          onClick={() => setWeekNumber(4)}
        >
          4
        </div>
        <div
          style={{
            border: "2px solid orange",
            background: "rgba(255, 255,255, 0.4)",
            padding: "8px"
          }}
          onClick={() => setWeekNumber(5)}
        >
          5
        </div>
      </div>
      <div style={{ width: "100%", textAlign: "center" }}>Week: {weekNumber}</div>
    </>
  );
}
