import { useState } from "react";
import "./Header.css";
export default function Header({ pokemonData }) {
  const [bestScore, setBestScore] = useState(0);
  let score = pokemonData.filter((item) => {
    return item.isClicked;
  }).length;

  if (score > bestScore) {
    setBestScore(score);
  }
  return (
    <>
      <h1>Memory Game</h1>
      <div>
        <p>Score : {score}</p>
        <p>Best Score : {bestScore}</p>
      </div>
    </>
  );
}
