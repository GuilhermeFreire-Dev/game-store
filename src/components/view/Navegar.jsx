import axios from "axios";
import Footer from "../layout/Footer/Footer";
import Navbar from "../layout/Navbar/Navbar";
import { useEffect, useState } from "react";
import ListGamesFromGenre from "../layout/NavPage/ListGamesFromGenre";


function Navegar() {

  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState(null);

  useEffect(() => {
    if (!genres.length) {
      getGameGenres();
    }
    else {
      if (!selectedGenre) {
        setSelectedGenre(genres[0]);
      }
    }
  }, [genres, selectedGenre]);

  async function getGameGenres() {
    axios.get(`${process.env.REACT_APP_API_URL}/api/game-genres`)
    .then(response => {
      setGenres(response.data.data);
    })
    .catch(error => {
      console.log("error1");
    });
  }

  return (
    <>
      <Navbar></Navbar>
      <div className=" flex pt-5 pr-44 pb-10 pl-44">
        <div>
          <h3 className="text-2xl mb-5 font-bold">Navegar</h3>
          {
            genres && (
              <div className="flex flex-col p-5 w-80 bg-stone-950 rounded-xl">
                {
                  genres.map(genre => {
                    return (
                      selectedGenre && (
                        <span key={genre.id} onClick={() => setSelectedGenre(genre)}
                              className={genre.id === selectedGenre.id ? "bg-stone-500 mb-3 p-2 rounded-md cursor-pointer duration-300" : "bg-stone-800 mb-3 p-2 rounded-md cursor-pointer hover:bg-stone-700 duration-300"}>
                          { genre.attributes.genre }
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