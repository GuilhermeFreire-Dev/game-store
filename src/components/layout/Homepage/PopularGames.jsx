import axios from "axios";
import { useEffect, useState } from "react";
import CardV from "../Catalog/CardV";

function PopularGames() {

  const [games, setGames] = useState([]);

  useEffect(() => {
    if (!games.length) {
      axios.get(`${process.env.REACT_APP_API_URL}/api/games?sort=popularity%3Adesc&pagination[pageSize]=5`)
      .then(response => {
        setGames(response.data.data);
      })
      .catch(error => {
        console.log("error");
      })
    }
  }, []);

  return (
    games.length > 0 && (
      <>
        <h3 className="text-2xl mb-5 ml-10 font-bold">Mais populares</h3>
        <div className="flex w-fit justify-start m-auto pb-10">
          {
            games.map(game => ((
              <CardV key={game.id} game={game}></CardV>
            )))
          }
        </div>
      </>
    )
  );
}

export default PopularGames;