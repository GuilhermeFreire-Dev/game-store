import axios from "axios";
import { useEffect, useState } from "react";
import CardH from "./CardH";

function Highlights() {

  const [games, setGames] = useState([]);

  useEffect(() => {
    if (!games.length) {
      getHighlightsGames();
    }
  }, []);

  async function getHighlightsGames() {
    await axios.get(`${process.env.REACT_APP_API_URL}/api/games?filters[highlighted][$eq]=true`)
    .then(response => {
      setGames(response.data.data);
    })
    .catch(error => {
      console.log(error);
    })
  }

  return (
    games.length > 0 && (
      <>
        <h3 className="text-2xl mb-5 ml-10 font-bold">Destaques</h3>
        <div className="inline-flex w-fit pr-5 pl-5 mb-10">
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