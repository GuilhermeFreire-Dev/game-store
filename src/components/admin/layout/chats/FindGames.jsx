import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { MdSearch } from "react-icons/md";
import Loader from '../../../store/layout/Loader';
import Utils from "../../../../scripts/Utils";

function FindGames({setAttach}) {

  const [games, setGames] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const searchRef = useRef(null);
  const utils = new Utils();
  let request = false;

  useEffect(() => {
    if (!request) {
      getGames();
    }
  }, [searchTerm])

  function getGames() {
    request = true;
    axios.get(`${process.env.REACT_APP_API_URL}/api/v1/games/find?term=${searchTerm}`)
    .then((response) => {
      setGames(response.data);
    })
    .catch((error) => {
      console.error(error);
    })
    .finally(()=> {
      request = false;
    })
  }

  function search() {
    if (searchRef.current) {
      setSearchTerm(searchRef.current.value);
    }
  }

  function autoSend(event) {
    if (event.key === 'Enter' || searchRef.current.value.length%3 === 0) {
      search();
    }
  }

  function sendAttach(game) {
    if (game) {
      const attach = {
        type: 'suggestion',
        id: game.id,
        name: game.name,
        price: game.current_price,
        image: game.image_url
      }
      setAttach(attach);
    }
  }

  return (
    <div>
      <div className="flex items-center mt-3">
        <input 
          className="h-8 pl-2 w-full pb-1 bg-stone-700 rounded-s-lg focus:outline-none" 
          type="text" 
          placeholder="pesquisar" 
          ref={searchRef} 
          onKeyDown={autoSend}/>
        <button className="w-6 h-8 rounded-e-lg bg-stone-700" onClick={search}>
          <MdSearch></MdSearch>
        </button>
      </div>
      <div className="mt-8 h-96 overflow-y-scroll">
        {
          !request && games && (
            games.map((game) => {
              return (
                <div className="flex mt-3 mb-3 p-2 hover:bg-stone-700 rounded-lg cursor-pointer" onClick={() => sendAttach(game)}>
                  <img className="w-12 h-16 rounded-lg" src={game.image_url} alt={game.name} />
                  <div className="ml-3">
                    <p>{ game.name }</p>
                    <p>{ utils.getMonetaryFormat(game.current_price) }</p>
                  </div>
                </div>
              )
            })
          )
        }
        {
          request && <div className="w-full h-full flex justify-center items-center"><Loader></Loader></div>
        }
      </div>
    </div>
  )
}

export default FindGames;