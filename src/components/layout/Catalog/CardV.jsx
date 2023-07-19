import Utils from "../../../scripts/Utils";

function CardV({game}) {

  const utils = new Utils();

  return (
    game && (
      <a href={`${process.env.REACT_APP_URL}/game/${game.id}`}>
        <div className="flex flex-col bg-transparent rounded-xl w-52 p-3
                        h-full select-none cursor-pointer
                        hover:brightness-110">
          <img className="h-60 m-1 rounded-lg" src={ game.attributes.image_url } alt={game.attributes.name} />
          <div className="flex flex-col pl-1 pr-1 h-28">
            <h5 className="font-bold">{ game.attributes.name }</h5>
            {
              game.attributes.edition && (
                <span className="bg-stone-700 text-xs font-semibold text-center
                              pl-2 pr-2 pb-0.5 mt-2 w-2/3 rounded-lg">
                  { game.attributes.edition }
                </span>
              )
            }
            <div className="flex justify-between items-center mt-1">
              <div className="mt-2">
                {
                  game.attributes.last_price && (
                    <p className="text-xs text-stone-400 line-through">{ utils.getMonetaryFormat(game.attributes.last_price) }</p>
                  )
                }
                <p className="text-lg font-semibold">{ utils.getMonetaryFormat(game.attributes.current_price) }</p>
              </div>
              {
                utils.getDiscount(game.attributes.current_price, game.attributes.last_price) > 0 && (
                  <span className="bg-gradient-to-r from-violet-600 to-blue-600
                                  w-12 p-0.5 rounded-lg text-center text-sm
                                  font-semibold">
                    { `-${utils.getDiscount(game.attributes.current_price, game.attributes.last_price)}%` }
                  </span>
                )
              }
            </div>
          </div>
        </div>
      </a>
    )
  );
}

export default CardV;