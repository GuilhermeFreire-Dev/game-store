import axios from "axios";
import { useEffect, useState } from "react";
import CardH from "./CardH";

function Highlights() {

  const [games, setGames] = useState(null);

  useEffect(() => {
    getHighlightsGames();
  }, [])

  async function getHighlightsGames() {
    if (!games) {
      await axios.get("http://localhost:1337/api/games?filters[highlighted][$eq]=true")
      .then(response => {
        setGames(response.data.data);
      })
      .catch(error => {
        console.log("error");
      })
    }
  }

  return (
    games && (
      <>
        <h3 className="text-2xl mb-5 font-bold">Destaques</h3>
        <div className="inline-flex w-full mb-10">
          {
            games.map(game => {
              return (
                <CardH key={game.id} game={game}></CardH>
              );
            })
          }
        </div>
      </>
    )
  );
}

export default Highlights;