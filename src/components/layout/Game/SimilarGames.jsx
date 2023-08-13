import { useEffect, useState } from "react";
import CardV from "../Catalog/CardV";
import axios from "axios";


function SimilarGames({genres, gameId}) {

  const [similarGames, setSimilarGames] = useState([]);
  var request = false;

  useEffect(() => {
   if (gameId && genres.length && !request) {
    getGamesByGenre();
   }
  }, []);

  async function getGamesByGenre() {
    let genreIds = "";
    request = true;
    await genres.forEach(genre => {
      genreIds = genreIds.concat(`${genre.id}+`);
    });
    const url = `${process.env.REACT_APP_API_URL}/api/v1/games/similar-games/${gameId}?genres=${genreIds}`;

    axios.get(url)
    .then((response) => {
      setSimilarGames(response.data.data);
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      request = false;
    })
  }

  return (
    similarGames.length > 0 && (
      <>
        <h3 className="text-2xl mb-5 mt-10 font-bold">Você pode se interessar por</h3>
        <div className="flex justify-start flex-wrap 
                      overflow-y-hidden 
                      m-auto mb-5 pb-10 max-h-96">
          {
            similarGames.map(game => {
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