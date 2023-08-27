import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Utils from "../../scripts/Utils";
import Classification from "../layout/Game/Classification";
import Media from "../layout/Game/Media";
import Specs from "../layout/Game/Specs";
import SimilarGames from "../layout/Game/SimilarGames";
import { MdAddShoppingCart, MdCheckCircle } from "react-icons/md";

function Game({context}) {

  const params = useParams();
  const [game, setGame] = useState(null);
  const [medias, setMedias] = useState(null);
  const [genres, setGenres] = useState(null);
  const [minimumSpec, setMinimumSpec] = useState(null);
  const [recommendedSpec, setRecommendedSpec] = useState(null);
  const [itemOnCart, setItemOnCart] = useState(false);
  const utils = new Utils();

  useEffect(() => {
    if (params && !game) {
      axios.get(`${process.env.REACT_APP_API_URL}/api/games/${params.id}?populate=*`)
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
  }, []);

  useEffect(() => {
    checkItemOnCart();
  }, [game]);

  async function checkItemOnCart() {
    if (context.cart && game) {
      setItemOnCart(await context.cart.checkItemOnCart(game));
    }
  }

  function addToCart() {
    context.cart.addToCart(game);
    setItemOnCart(true);
  }

  return (
    <div>
      {
        game && (
          <div className="pt-5 pr-44 pb-20 pl-44 mt-24">
            <h3 className="text-3xl font-semibold">{ game.attributes.name }</h3>
            <div className="flex justify-between mt-5">
              <Media medias={medias}></Media>
              <div className="flex flex-col items-center">
                <img className="w-40 h-60 mb-4 rounded-lg" src={ game.attributes.image_url } alt="far-cry-6" />
                <div className="flex items-end mb-4">
                  <div className="mr-5">
                    {
                      game.attributes.last_price && (
                        <h5 className="text-stone-400 line-through">{ utils.getMonetaryFormat(game.attributes.last_price) }</h5>
                      )
                    }
                    <h3 className="text-2xl font-bold">{ utils.getMonetaryFormat(game.attributes.current_price) }</h3>
                  </div>
                  {
                    utils.getDiscount(game.attributes.current_price, game.attributes.last_price) > 0 && (
                      <span className="bg-gradient-to-r from-violet-600 to-blue-600
                                      w-12 h-6 p-0.5 rounded-lg text-center text-sm font-semibold">
                        { `-${utils.getDiscount(game.attributes.current_price, game.attributes.last_price)}%` }
                      </span>
                    )
                  }
                </div>
                <div>
                  {
                    game.attributes.edition && (
                      <span className="bg-stone-700 rounded-md text-xs font-medium pt-1 pr-2 pb-1 pl-2">
                        { game.attributes.edition }
                      </span>
                    )
                  }
                  {
                    !itemOnCart && (
                      <>
                        <button type="button" className="bg-blue-600 pt-2 pb-2 mb-2 mt-2 w-full rounded-lg hover:bg-blue-500">
                          COMPRAR
                        </button>
                        <button type="button" onClick={addToCart} className="flex items-center border-2 border-solid border-white rounded-lg pt-2 pr-8 pb-2 pl-8 hover:bg-white hover:bg-opacity-10">
                          <MdAddShoppingCart className="w-5 h-5 mr-2 ml-2"></MdAddShoppingCart>
                          Adicionar ao carrinho
                        </button>
                      </>
                    )
                  }
                 {
                  itemOnCart && (
                    <p className="flex items-center justify-center bg-lime-500 rounded-lg pt-2 pr-8 pb-2 pl-8 mt-2 select-none">
                      <MdCheckCircle className="mr-2 w-5 h-5"></MdCheckCircle>
                      Adicionado ao carrinho
                    </p>
                  )
                 }
                </div>
              </div>
            </div>
            <div className="flex justify-between mt-8">
              <div className="w-2/3">
                <h5 className="font-semibold text-2xl mb-2">Sobre o jogo:</h5>
                <p>{ game.attributes.description }</p>
                <div className="flex items-center mt-10 mb-5">
                  <Classification classification={ game.attributes.classification } ></Classification>
                  <span className="border-l border-r pl-5 pr-5">
                    <p className="mb-2">Gêneros:</p>
                    <span className="flex flex-wrap">
                      {
                        genres.data.map(genre => {
                          return (
                            <p key={genre.id} className="bg-stone-800 rounded-lg pr-3 pb-0.5 pl-3 mr-1 mb-1 flex-wrap">
                              { genre.attributes.genre }
                            </p>
                          );
                        })
                      }
                    </span>
                  </span>
                  <span className="pl-5">
                    <p>Classificação Metacritic:</p>
                    <p className="text-xl font-bold">{ game.attributes.metacritic_score }</p>
                  </span>
                </div>
              </div>
              <div className="bg-stone-800 rounded-xl p-5 w-64 max-h-56 text-sm font-semibold">
                <p className="border-b mb-2 pb-1">Desenvolvedor: { game.attributes.developer }</p>
                <p className="border-b mb-2 pb-1">Publisher: { game.attributes.publisher }</p>
                <p className="border-b mb-2 pb-1">Lançamento: { utils.getFormattedDate(game.attributes.launch_date) }</p>
                <p className="flex border-b mb-2 pb-1">Plataforma:
                  <span className="bg-stone-700 rounded-xl pr-2 pb-0.5 pl-2 mr-1 mb-1 ml-1">
                    { game.attributes.platform }
                  </span>
                </p>
                <p className="border-b mb-2 pb-1">Tamanho: { game.attributes.size + game.attributes.measurement }</p>
              </div>
            </div>
            <div className="bg-stone-800 flex w-2/3 mt-10 pt-4 pb-4 rounded-xl text-sm font-medium">
              { minimumSpec && ( <Specs specs={minimumSpec} nvl={"mínimos"}></Specs> ) }
              { recommendedSpec && ( <Specs specs={recommendedSpec} nvl={"recomendados"}></Specs> ) }
            </div>
            <SimilarGames genres={genres.data} gameId={game.id}></SimilarGames>
          </div>
        )
      }
    </div>
  );
}

export default Game;