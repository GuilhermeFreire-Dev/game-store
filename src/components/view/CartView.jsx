import { useEffect, useState } from "react";
import CardGameResume from "../layout/Cart/CardGameResume";
import axios from "axios";
import Utils from "../../scripts/Utils";
import { Link } from "react-router-dom";

function CartView({cart}) {

  const [cartItems, setCartItems] = useState([]);
  const [checkout, setCheckout] = useState(null);
  const [games, setGames] = useState([]);
  const utils = new Utils();
  var request = false;
  
  useEffect(() => {
    if (cart && !cartItems.length && !request) {
      setCartItems(cart.getCart.items);
    }
    calculateCheckout();
  }, [games]);

  useEffect(() => {
    getGames();
  }, [cartItems]);

  async function getGames() {
    if (cartItems.length) {
      let paramGames = "?games=";
      cartItems.forEach((game) => {
        paramGames = paramGames.concat(`${game.id}+`);
      });

      request = true;
      axios.get(`${process.env.REACT_APP_API_URL}/api/v1/games${paramGames}`)
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
    else {
      setGames([]);
    }
  }

  function calculateCheckout() {
    let items = 0;
    let subtotal = 0;

    if (games.length) {
      games.forEach((game) => {
        items += game.last_price > game.current_price ? game.last_price : game.current_price;
        subtotal += game.current_price;
      });

      setCheckout({
        items: items,
        discounts: subtotal - items,
        subtotal: subtotal
      });
    } else {
      setCheckout(null);
    }
  }

  async function removeItemCart(item) {
    await cart.removeItemOnCart(item);
    // setCartItems(await cart.getCart.items);
  }

  return (
    <>
      <div className="pl-44 pr-44 pt-5 pb-10 mt-20">
        <h3 className="text-2xl ml-36 font-bold mb-7">Meu carrinho</h3>
        {
          checkout && games.length > 0 && (
            <div className="flex">
              <div className="w-3/4 mr-5">
                {
                  games.map(game => {
                    return (
                      <CardGameResume key={game.id} game={game} removeItemCart={removeItemCart}></CardGameResume>
                    )
                  })
                }
              </div>
              <div className="bg-stone-950 flex flex-col justify-between h-96 w-1/4 p-5 rounded-xl">
                <h4 className="font-semibold text-lg">Resumo do pedido</h4>
                <div>
                  <p className="text-sm flex justify-between">Itens: <strong className="font-medium">{ utils.getMonetaryFormat(checkout.items) }</strong></p>
                  {
                    checkout.discounts < 0 && (
                      <p className="text-sm flex justify-between">Descontos: <strong className="font-medium text-lime-500">{ utils.getMonetaryFormat(checkout.discounts) }</strong></p>
                    )
                  }
                  <p className="text-lg mt-2 flex justify-between">Subtotal: <strong>{ utils.getMonetaryFormat(checkout.subtotal) }</strong></p>
                  <button className="bg-blue-600 w-full pt-2 pb-2 mt-5 text-center rounded-lg hover:bg-blue-500">Finalizar compra</button>
                </div>
              </div>
            </div>
          )
        }
        {
          !checkout && (
            <div className="w-1/2 m-auto mt-16 mb-20 text-center">
              <h3 className="text-3xl font-bold mb-10">{ "Seu carrinho está vazio :(" }</h3>
              <Link className="bg-blue-600 p-3 pt-2 rounded-lg hover:bg-blue-500" to={"/"}>Continuar comprando</Link>
            </div>
          )
        }
      </div>
    </>
  );
}

export default CartView;