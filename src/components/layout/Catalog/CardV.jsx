import { useEffect } from "react";
import Utils from "../../../scripts/Utils";

function CardV({game}) {

  const utils = new Utils();

  useEffect(() => {

  }, [])

  return (
    game && (
      <a href={`/game/${game.id}`}>
        <div className="flex flex-col
                      bg-stone-800 rounded-xl
                        w-52 max-h-96 p-3 m-2
                        h-full
                        select-none
                        cursor-pointer
                        hover:brightness-110"
        >
          <img className="h-60 m-1
                          rounded-lg" src={ game.attributes.image_url } alt="farcry" />
          <div className="mt-3">
            <h5 className="font-bold">{ game.attributes.name }</h5>
            <span className="bg-stone-700 text-xs font-semibold
                              pl-2 pr-2 pb-0.5
                              rounded-lg">jogo base</span>
            <div className="flex justify-between items-center
                            mt-1"
            >
              <div className="mt-2">
                <p className="text-xs text-stone-400 line-through">{ utils.getMonetaryFormat(game.attributes.last_price) }</p>
                <p className="text-lg font-semibold">{ utils.getMonetaryFormat(game.attributes.current_price) }</p>
              </div>
              <span className="bg-gradient-to-r from-violet-600 to-blue-600
                              w-12 p-0.5
                              rounded-lg
                              text-center
                              text-sm
                              font-semibold">
                -{ utils.getDiscount(game.attributes.current_price, game.attributes.last_price) }%
              </span>
          </div>
          </div>
        </div>
      </a>
    )
  );
}

export default CardV;