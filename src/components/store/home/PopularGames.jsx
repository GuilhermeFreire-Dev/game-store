import axios from "axios";
import { useEffect, useState } from "react";
import CardV from "../layout/CardV";
import { IoChevronForwardOutline } from "react-icons/io5";

function PopularGames() {

  const [games, setGames] = useState([]);
  var request = false;

  useEffect(() => {
    if (!request) {
      getGames();
    }
  }, []);

  function getGames() {
    request = true;
    axios.get(`${process.env.REACT_APP_API_URL}/api/v1/games/popular-games`)
    .then((response) => {
      setGames(response.data.data);
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      request = false;
    })
  }

  return (
    games.length > 0 && (
      <>
        <div className="inline-flex items-center mb-3 ml-10">
          <h3 className="text-2xl font-bold">Mais populares</h3>
          <IoChevronForwardOutline className="ml-2 mt-1 cursor-pointer"></IoChevronForwardOutline>
        </div>
        <div className="flex justify-around flex-wrap w-fit overflow-y-hidden m-auto mb-5 pb-10 max-h-96">
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