import axios from "axios";
import Footer from "../layout/Footer/Footer";
import Navbar from "../layout/Navbar/Navbar";
import { useEffect, useState } from "react";
import ListGamesFromGenre from "../layout/NavPage/ListGamesFromGenre";


function Navegar() {

  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState(null);
  var request = false;

  useEffect(() => {
    if (!genres.length && !request) {
      getGameGenres();
    }
    else {
      setSelectedGenre(genres[0]);
    }
  }, [genres]);

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

  return (
    <>
      <Navbar></Navbar>
      <div className=" flex pt-5 pr-44 pb-10 pl-44 mt-24">
        <div>
          <h3 className="text-2xl mb-5 font-bold">Navegar</h3>
          {
            genres.length > 0 && (
              <div className="flex flex-col p-5 w-80 bg-stone-950 rounded-xl">
                {
                  genres.map(genre => {
                    return (
                      selectedGenre && (
                        <span key={genre.id} onClick={() => setSelectedGenre(genre)}
                              className={genre.id === selectedGenre.id ? "bg-stone-500 mb-3 p-2 rounded-md cursor-pointer duration-300" : "bg-stone-800 mb-3 p-2 rounded-md cursor-pointer hover:bg-stone-700 duration-300"}>
                          { genre.genre }
                        </span>
                      )
                    );
                  })
                }
              </div>
            )
          }
        </div>
        <div className="pt-10 pb-10 pl-10">
          <ListGamesFromGenre selectedGenre={selectedGenre}></ListGamesFromGenre>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

export default Navegar;