import { useParams } from "react-router-dom";
import Footer from "../layout/Footer/Footer";
import Navbar from "../layout/Navbar/Navbar";
import { useEffect, useState } from "react";
import axios from "axios";
import Utils from "../../scripts/Utils";
import Classification from "../layout/Game/Classification";
import Media from "../layout/Game/Media";
import Specs from "../layout/Game/Specs";

function Game() {

  const params = useParams();
  const [game, setGame] = useState(null);
  const [medias, setMedias] = useState(null);
  const [genres, setGenres] = useState(null);
  const [minimumSpec, setMinimumSpec] = useState(null);
  const [recommendedSpec, setRecommendedSpec] = useState(null);
  const utils = new Utils();

  useEffect(() => {
    if (params) {
      axios.get(`http://localhost:1337/api/games/${params.id}?populate=*`)
      .then(response => {
        setGame(response.data.data);
        setMedias(response.data.data.attributes.game_medias);
        setGenres(response.data.data.attributes.game_genres);
        setMinimumSpec(response.data.data.attributes.game_minimum_spec.data);
        setRecommendedSpec(response.data.data.attributes.game_recommended_spec.data);
      })
      .catch(error => {
        console.log(error);
      })
    }
  }, [])

  return (
    <div>
      <Navbar></Navbar>
      {
        game && (
          <div className="pt-5 pr-44 pb-20 pl-44">
            <h3 className="text-3xl font-semibold">{ game.attributes.name }</h3>
            <div className="flex justify-between mt-5">
              <Media medias={medias}></Media>
              <div className="flex flex-col items-center">
                <img className="w-40 h-60 mb-4 rounded-lg" src={ game.attributes.image_url } alt="far-cry-6" />
                <div className="flex items-end mb-4">
                  <div className="mr-5">
                    <h5 className="text-stone-400 line-through">{ utils.getMonetaryFormat(game.attributes.last_price) }</h5>
                    <h3 className="text-2xl font-bold">{ utils.getMonetaryFormat(game.attributes.current_price) }</h3>
                  </div>
                  <span className="bg-gradient-to-r from-violet-600 to-blue-600
                              w-12 h-6 p-0.5
                              rounded-lg
                              text-center
                              text-sm
                              font-semibold"
                  >
                    -{ utils.getDiscount(game.attributes.current_price, game.attributes.last_price) }%
                  </span>
                </div>
                <div>
                  {
                    game.attributes.edition && (
                      <span className="bg-stone-700 rounded-md
                                  text-xs font-medium
                                  pt-0.5 pr-2 pb-0.5 pl-2">
                        Standard Edition
                      </span>
                    )
                  }
                  <button className="bg-blue-600
                                      pt-2 pb-2 mb-2 mt-2 w-full
                                      rounded-lg
                                      hover:bg-blue-500">
                      COMPRAR
                  </button>
                  <button className="flex border-2 border-solid border-white rounded-lg
                                    pt-2 pr-8 pb-2 pl-8
                                    hover:bg-white hover:bg-opacity-10">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFFFFF">
                      <path d="M0 0h24v24H0V0z" fill="none"/>
                      <path d="M11 9h2V6h3V4h-3V1h-2v3H8v2h3v3zm-4 9c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2zm-8.9-5h7.45c.75 0 1.41-.41 1.75-1.03l3.86-7.01L19.42 4l-3.87 7H8.53L4.27 2H1v2h2l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7l1.1-2z"/>
                    </svg>
                    Adicionar ao carrinho
                  </button>
                </div>
              </div>
            </div>
            <div className="flex justify-between mt-8">
              <div className="w-2/3">
                <h5 className="font-semibold text-2xl mb-2">Sobre o jogo:</h5>
                <p>{ game.attributes.description }</p>
                <div className="flex items-center mt-10 mb-5">
                  <Classification classification={ game.attributes.classification } ></Classification>
                  <span className="border-l border-r 
                                  pl-10 pr-10">
                    <p className="mb-2">Gêneros:</p>
                    <span className="flex">
                      {
                        genres.data.map(genre => {
                          return (
                            <p key={genre.id} className="bg-stone-800 rounded-lg 
                                  pr-3 pb-0.5 pl-3 mr-1 mb-1
                                  flex-wrap">{ genre.attributes.genre }</p>
                          );
                        })
                      }
                    </span>
                  </span>
                  <span className="pl-20">
                    <p>Classificação Metacritic:</p>
                    <p className="text-xl font-bold">{ game.attributes.metacritic_score }</p>
                  </span>
                </div>
              </div>
              <div className="bg-stone-800 rounded-xl 
                              p-5 w-64 max-h-56
                              text-sm font-semibold">
                <p className="border-b mb-2 pb-1">Desenvolvedor: { game.attributes.developer }</p>
                <p className="border-b mb-2 pb-1">Publisher: { game.attributes.publisher }</p>
                <p className="border-b mb-2 pb-1">Lançamento: { utils.getFormattedDate(game.attributes.launch_date) }</p>
                <p className="flex border-b mb-2 pb-1">Plataforma:
                  <img className="w-5 h-5 ml-3" src="/images/icons/windows.png" alt="windows" />
                </p>
                <p className="border-b mb-2 pb-1">Tamanho: { game.attributes.size + game.attributes.measurement }</p>
              </div>
            </div>
            <div className="bg-stone-800 flex 
                            w-2/3 mt-10 pt-4 pb-4
                            rounded-xl text-sm font-medium">
              {
                minimumSpec && ( <Specs specs={minimumSpec}></Specs> )
              }
              {
                recommendedSpec && ( <Specs specs={recommendedSpec}></Specs> )
              }
            </div>
          </div>
        )
      }
      <Footer></Footer>
    </div>
  );
}

export default Game;