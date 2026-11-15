import { useState, useEffect } from "react";

export default function Cards({ pokemonData, handleClick }) {
  return (
    <>
      <div>
        {pokemonData.map((item) => {
          return (
            <img
              key={item.id}
              id={item.id}
              src={item.image}
              alt=""
              width={200}
              onClick={handleClick}
            />
          );
        })}
      </div>
    </>
  );
}
