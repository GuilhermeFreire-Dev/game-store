import { useEffect, useState } from "react";
import axios from "axios";
import ListGames from "../../store/session/ListGames";
import Filter from "../../store/session/Filter";


function SessionDetails({sessionName, contentUrl}) {

  const [games, setGames] = useState([]);
  const [genres, setGenres] = useState([]);
  var request = false;

  useEffect(() => {
    if (!request) {
      getGameGenres();
    }
  }, []);

  function getGameGenres() {
    request = true;
    axios.get(`${process.env.REACT_APP_API_URL}/api/v1/genres`)
    .then((response) => {
      setGenres(response.data.data);
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      request = false;
    })
  }

  function componentListGames() {
    if (games.length) {
      return (<ListGames games={games}></ListGames>);
    }
    else {
      return (
        <div className="w-full text-center">
          <h3 className="font-bold text-2xl mb-3 mt-20">{ `Nenhum resultado encontrado :(` }</h3>
          <p>Tente mudar os filtros de busca para encontrar resultados...</p>
        </div>
      )
    }
  }

  return (
    <div className=" flex pt-5 pr-40 pb-10 pl-40 mt-24">
      <div>
        <h3 className="text-2xl mb-5 font-bold">{ sessionName }</h3>
        <Filter filteredResults={setGames} genres={genres}></Filter>
      </div>
      <div className="pt-10 pb-10 pl-10 w-full">
        { componentListGames() }
      </div>
    </div>
  );
}

export default SessionDetails;