import axios from "axios";
import { useEffect, useState } from "react";
import CardV from "../Catalog/CardV";

function PopularGames() {

  const [games, setGames] = useState(null);

  useEffect(() => {
    if (!games) {
      axios.get("http://localhost:1337/api/games?sort=popularity%3Adesc&pagination[pageSize]=5")
      .then(response => {
        setGames(response.data.data);
      })
      .catch(error => {
        console.log("error");
      })
    }
  }, []);

  return (
    games && (
      <>
        <h3 className="text-2xl mb-5 font-bold">Mais populares</h3>
        <div className="flex justify-between mb-10">
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