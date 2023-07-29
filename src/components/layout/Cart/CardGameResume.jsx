import Utils from "../../../scripts/Utils";

function CardGameResume({game, removeItemCart}) {

  const utils = new Utils();

  return (
    game && (
      <div className="bg-stone-950 flex w-4/6 mb-5 m-auto p-5 rounded-xl">
        <img className="w-2/12 h-32 rounded-lg" src={game.attributes.image_url} alt="game" />
        <div className="pl-5 pr-5 w-2/3">
          <h4 className="font-bold text-xl mb-2">{ game.attributes.name }</h4>
          {
            game.attributes.edition && (
              <p className="bg-stone-700 w-2/4 rounded-lg pb-0.5 mb-2 text-xs text-center font-semibold">{ game.attributes.edition }</p>
            )
          }
          <p className="text-xs font-semibold">{ game.attributes.platform }</p>
        </div>
        <div className="flex flex-col justify-between">
          <a onClick={() => removeItemCart(game.id)} href="#" className="text-stone-400 font-semibold text-end">Remover</a>
          <div className="inline-flex items-end">
            <div className="mr-3">
              <p className="text-stone-400 line-through">{ `${utils.getMonetaryFormat(game.attributes.last_price)}` }</p>
              <p className="font-semibold text-xl">{ `${utils.getMonetaryFormat(game.attributes.current_price)}` }</p>
            </div>
           {
            utils.getDiscount(game.attributes.current_price, game.attributes.last_price) > 0 && (
              <span className="bg-gradient-to-r from-violet-600 to-blue-600 rounded-xl pt-1 pr-3 pb-1 pl-3
                            text-center font-semibold">
              { `-${utils.getDiscount(game.attributes.current_price, game.attributes.last_price)}%` }
              </span>
            )
           }
          </div>
        </div>
      </div>
    )
  );
}

export default CardGameResume;