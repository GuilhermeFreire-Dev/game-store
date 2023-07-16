import { useEffect, useState } from "react";
import CardV from "../Catalog/CardV";
import axios from "axios";


function SimilarGames({genres, gameId}) {

  const [games, setGames] = useState([]);

  useEffect(() => {
   if (gameId && genres.length) {
    getGamesByGenre();
   }
  }, []);

  function getGamesByGenre() {

    let url = `${process.env.REACT_APP_API_URL}/api/games?filters[id][$ne]=${gameId}`;
    let index = genres.length;

    genres.forEach(function (genre) {
      url = url.concat("&", `filters[game_genres][id][$in][${genres.length - index}]=${genre.id}`);
      index--;
    });

    axios.get(url)
    .then(response => {
      setGames(response.data.data);
    })
    .catch(error => {
      console.log(error);
    }); 
  }

  return (
    games.length > 0 && (
      <>
        <h3 className="text-2xl mb-5 mt-10 font-bold">Você pode se interessar por</h3>
        <div className="flex justify-start w-fit">
          {
            games.map(game => {
              return (
                <CardV key={game.id} game={game}></CardV>
              );
            })
          }
        </div>
      </>
    )
  );
}

export default SimilarGames;