import axios from "axios";
import { useEffect, useState } from "react";
import CardV from "../Catalog/CardV";

function Promotions() {

  const [games, setGames] = useState([]);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/api/games`)
    .then(response => {
      setGames(response.data.data);
    })
    .catch(error => {
      console.log(error);
    })
  }, []);

  return (
    <>
      <h3 className="text-2xl mb-5 font-bold">Promoções</h3>
      <div className="flex justify-between w-fit overflow-hidden m-auto pb-10">
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