import { Link } from "react-router-dom";
import Utils from "../../../scripts/Utils";

function CardV({game}) {

  const utils = new Utils();

  return (
    game && (
      <Link to={`${process.env.REACT_APP_URL}/game/${game.id}`}>
        <div className="flex flex-col bg-transparent rounded-xl w-52 p-3 h-full select-none cursor-pointer hover:brightness-110">
          <img className="h-60 m-1 rounded-lg" src={ game.image_url } alt={game.name} />
          <div className="flex flex-col pl-1 pr-1 h-28">
            <h5 className="font-bold">{ game.name }</h5>
            {
              game.edition && (
                <span className="bg-stone-700 text-xs font-semibold text-center pl-2 pr-2 pb-0.5 mt-2 w-2/3 rounded-lg">
                  { game.edition }
                </span>
              )
            }
            <div className="flex justify-between items-center mt-1">
              <div className="mt-2">
                {
                  game.last_price > game.current_price && (
                    <p className="text-xs text-stone-400 line-through">{ utils.getMonetaryFormat(game.last_price) }</p>
                  )
                }
                <p className="text-lg font-semibold">{ utils.getMonetaryFormat(game.current_price) }</p>
              </div>
              {
                utils.getDiscount(game.current_price, game.last_price) > 0 && (
                  <span className="bg-gradient-to-r from-violet-600 to-blue-600 w-12 p-0.5 rounded-lg text-center text-sm font-semibold">
                    { `-${utils.getDiscount(game.current_price, game.last_price)}%` }
                  </span>
                )
              }
            </div>
          </div>
        </div>
      </Link>
    )
  );
}

export default CardV;