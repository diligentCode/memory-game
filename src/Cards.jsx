import { useState, useEffect } from "react";

export default function Cards({ pokemonData, handleClick }) {
  return (
    <>
      <div>
        {pokemonData.map((item, index) => {
          return (
            <img
              id={item.id}
              key={index}
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
