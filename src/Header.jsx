import { useState, useEffect } from "react";

export default function Header({ pokemonData }) {
  let BesScore = 0;

  let score = pokemonData.filter((item) => {
    console.log(item.isClicked);
    return !item.isClicked;
  }).length;
  return (
    <>
      <h1>Memory Game</h1>
      <div>
        <p>Score : {score}</p>
        <p>Best Score : {BesScore}</p>
      </div>
    </>
  );
}
