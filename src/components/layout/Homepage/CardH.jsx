
function CardH({game}) {
  return (
    <a className="w-1/2" href={`${process.env.REACT_APP_URL}/game/${game.id}`}>
      <div className="bg-stone-800 rounded-xl
                      p-4 pb-0 m-2 min-h-full select-none
                      hover:brightness-110">
        <div className="w-full rounded-lg h-72 mb-5 bg-cover bg-center bg-no-repeat"
          style={{backgroundImage: `url(${game.attributes.thumb})`}}></div>
        <div>
          <h4 className="text-xl font-bold pb-2">{ game.attributes.name }</h4>
          <p>{ game.attributes.short_description }</p>
        </div>
      </div>
    </a>
  );
}

export default CardH;