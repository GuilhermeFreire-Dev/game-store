import axios from "axios";
import { useEffect, useState } from "react";
import CardV from "../Catalog/CardV";
import { IoChevronForwardOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

function Promotions() {

  const [games, setGames] = useState([]);
  var request = false;

  useEffect(() => {
    if (!request) {
      getPromotions();
    }
  }, []);

  function getPromotions() {
    request = true;
    axios.get(`${process.env.REACT_APP_API_URL}/api/v1/games/promotions?size=10`)
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
    <>
      <div className="inline-flex items-center mb-3 ml-10">
        <h3 className="text-2xl font-bold">Promoções</h3>
        <Link to={"/promocoes"}>
          <IoChevronForwardOutline className="ml-2 mt-1 cursor-pointer"></IoChevronForwardOutline>
        </Link>
      </div>
      <div className="flex justify-around flex-wrap w-fit overflow-y-hidden m-auto mb-5 pb-10 max-h-96">
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