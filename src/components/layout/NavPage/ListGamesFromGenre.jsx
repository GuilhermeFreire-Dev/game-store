import axios from "axios";
import { useEffect, useState } from "react";
import CardV from "../Catalog/CardV";


function ListGamesFromGenre({selectedGenre}) {

  const [games, setGames] = useState([]);

  useEffect(() => {
    console.log(process.env);
    if (selectedGenre) {
      getGamesByGenre();
    }
  }, [selectedGenre]);

  async function getGamesByGenre() {
    axios.get(`${process.env.REACT_APP_API_URL}/api/game-genres/${selectedGenre.id}?populate=*`)
    .then(response => {
      setGames(response.data.data.attributes.games.data);
    })
    .catch(error => {
      console.log(error);
    });
  }

  return (
    games.length && (
      <>
        <h3 className="text-xl mb-3 ml-3 font-bold">{ selectedGenre.attributes.genre }</h3>
        <div className="flex flex-wrap h-min items-start">
          {
            games && (
              games.map(game => {
                return (
                  <CardV key={game.id} game={game}></CardV>
                )
              })
            )
          }
        </div>
      </>
    )
  );
}

export default ListGamesFromGenre;