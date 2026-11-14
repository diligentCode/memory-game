import { useState, useEffect } from "react";

export default function Cards({ pokemonData }) {
  return (
    <>
      <div>
        {pokemonData.map((item, index) => {
          return (
            <img
              id={index + 1}
              key={index}
              src={item.image}
              alt=""
              width={200}
            />
          );
        })}
      </div>
    </>
  );
}
