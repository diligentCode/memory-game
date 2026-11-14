import { useState, useEffect } from "react";
import Header from "./Header.jsx";
import Cards from "./Cards.jsx";
function App() {
  const [pokemonData, setPokemonData] = useState(null);
  useEffect(() => {
    async function getPokeObject() {
      const response = await fetch(
        "https://pokeapi.co/api/v2/pokemon?limit=12",
      );
      const data = await response.json();
      const newData = await Promise.all(
        data.results.map(async (pokeItem) => {
          const response = await fetch(pokeItem.url);
          const details = await response.json();

          return {
            id: details.id,
            name: details.name,
            image: details.sprites.other["official-artwork"].front_shiny,
            isClicked: false,
          };
        }),
      );
      await setPokemonData(newData);
      console.log(newData);
    }
    getPokeObject();
  }, []);

  function handleClick(e) {
    let wrongMove = false;
    const updateData = pokemonData.map((item) => {
      if (item.id == e.target.id) {
        if (item.isClicked == true) {
          wrongMove = true;
        }
        return { ...item, isClicked: true };
      } else {
        return item;
      }
    });
    if (!wrongMove) {
      setPokemonData(updateData);
    } else {
      resetGame();
    }
  }

  function resetGame() {
    const updateData = pokemonData.map((item) => {
      return { ...item, isClicked: false };
    });
    setPokemonData(updateData);
  }

  if (pokemonData === null) {
    return (
      <>
        <p>Loading...</p>
      </>
    );
  } else {
    return (
      <>
        <Header pokemonData={pokemonData}></Header>
        <Cards pokemonData={pokemonData} handleClick={handleClick}></Cards>
      </>
    );
  }
}

export default App;
