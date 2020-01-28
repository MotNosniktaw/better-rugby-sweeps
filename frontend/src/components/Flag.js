import React from "react";

export default function Flag({ flag, onClick }) {
  return (
    <div onClick={onClick}>
      <img src={flag} style={{ height: "80px" }} alt="A flag....duuuurrr!" />
    </div>
  );
}
