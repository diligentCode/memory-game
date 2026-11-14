import { useState, useEffect } from "react";
function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    async function getPokeObject() {
      const response = await fetch(
        "https://pokeapi.co/api/v2/pokemon?limit=12",
      );
      const data = await response.json();
      const newData = await data.results.map(async (pokeItem) => {
        let link = pokeItem.url;
        let pokeItemData = await fetch(link);
        let newPokeItemData = await pokeItemData.json();
        return {
          id: newPokeItemData.id,
          name: newPokeItemData.name,
          url: newPokeItemData.sprites.other["official-artwork"].front_shiny,
        };
      });
      return newData;
    }
    console.log(getPokeObject());
  }, []);

  return <> </>;
}

export default App;
