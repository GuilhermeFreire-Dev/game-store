import CardV from "../Catalog/CardV";


function ListGames({games}) {
  return (
    <div className="flex flex-wrap h-min items-start">
      { 
        games.length > 0 && (
          games.map(game => {
            return (
              <CardV key={game.id} game={game}></CardV>
            )
          })
        )
      }
    </div>
  );
}

export default ListGames;