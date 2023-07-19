import axios from "axios";
import { useEffect, useState } from "react";
import CardV from "../Catalog/CardV";


function ListGamesFromGenre({selectedGenre}) {

  const [games, setGames] = useState([]);

  useEffect(() => {
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

  function component() {
    if (games.length > 0) {
      return (
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
      );
    }
    else {
      if (selectedGenre) {
        return (
          <>
            <h3 className="text-xl mb-3 ml-3 font-bold">{ selectedGenre.attributes.genre }</h3>
            <h3 className="ml-3 mt-5 text-lg">Nenhum jogo encontrado.</h3>
          </>
        );
      }
    }
  }

  return component();
}

export default ListGamesFromGenre;