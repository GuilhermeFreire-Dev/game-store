import { useEffect, useState } from "react";
import CardV from "../layout/Catalog/CardV";
import Carousel from "../layout/Catalog/Carousel";
import Footer from "../layout/Footer/Footer";
import Navbar from "../layout/Navbar/Navbar";
import axios from "axios";
import PopularGames from "../layout/Homepage/PopularGames";
import Highlights from "../layout/Homepage/Highlights";


function Home() {

  const [games, setGames] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:1337/api/games")
    .then(response => {
      // console.log(response.data.data);
      setGames(response.data.data);
      // console.log(games); 
    })
    .catch(error => {
      console.log(error);
    })
  }, []); 

  return (
    <>
      <Navbar></Navbar>
      <div className="pl-44 pr-44 pt-5 pb-10">
        <div className="rounded-xl 
                        pt-1 pr-10 pb-5 pl-10 mb-5
                        bg-opacity-80"
        >
          <Carousel></Carousel>
        </div>
        <h3 className="text-2xl mb-5 font-bold">Promoções</h3>
        <div className="flex justify-between overflow-hidden mb-10">
          {
            games.map(game => {
              return (
                <CardV key={game.id} game={game}></CardV>
              );
            })
          }
        </div>
        <Highlights></Highlights>
        <PopularGames></PopularGames>
      </div>
      <Footer></Footer>
    </>
  );
}

export default Home;