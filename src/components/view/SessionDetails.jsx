import { useEffect, useState } from "react";
import Footer from "../layout/Footer/Footer";
import Navbar from "../layout/Navbar/Navbar";
import axios from "axios";
import CardV from "../layout/Catalog/CardV";


function SessionDetails({sessionName, contentUrl}) {

  const [games, setGames] = useState(null);
  var request = false;

  useEffect(() => {
    if (!request) {
      getGames();
    }
  },[]);

  function getGames() {
    request = true;
    axios.get(`${process.env.REACT_APP_API_URL}${contentUrl}`)
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
      <Navbar></Navbar>
      <div className=" flex pt-5 pr-40 pb-10 pl-44 mt-24">
        <div>
          <h3 className="text-2xl mb-5 font-bold">{ sessionName }</h3>
          <div className="flex flex-col p-5 mr-5 w-80 bg-stone-950 rounded-xl">
            <p>Filtros</p>
          </div>
        </div>
        <div className="flex flex-wrap h-min items-start">
          { 
            games && (
              games.map(game => {
                return (
                  <CardV key={game.id} game={game}></CardV>
                )
              })
            )
          }
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

export default SessionDetails;