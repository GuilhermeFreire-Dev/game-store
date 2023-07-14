import axios from "axios";
import { useEffect, useState } from "react";
import CardV from "../Catalog/CardV";

function Promotions() {

  const [games, setGames] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:1337/api/games")
    .then(response => {
      // console.log(response.data.data);
      setGames(response.data.data);
      // console.log(games); 
    })
    .catch(error => {
      console.log(error);
    })
  }, []);

  return (
    <>
      <h3 className="text-2xl mb-5 font-bold">Promoções</h3>
      <div className="flex justify-between overflow-hidden mb-10">
        {
          games.map(game => {
            return (
              <CardV key={game.id} game={game}></CardV>
            );
          })
        }
      </div>
    </>
  );
}

export default Promotions;