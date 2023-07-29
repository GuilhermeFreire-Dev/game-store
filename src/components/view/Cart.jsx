import { useEffect, useState } from "react";
import CardGameResume from "../layout/Cart/CardGameResume";
import Footer from "../layout/Footer/Footer";
import Navbar from "../layout/Navbar/Navbar";
import axios from "axios";
import Utils from "../../scripts/Utils";

function Cart() {

  const [cartItems, setCartItems] = useState(null);
  const [checkout, setCheckout] = useState(null);
  const utils = new Utils();

  useEffect(() => {
    if (!cartItems) {
      getCartItems();
    }
    calculateCheckout();
  }, [cartItems]);

  function getCartItems() {
    let sessionCart = sessionStorage.getItem("cart");
    if (sessionCart) {
      let cart = JSON.parse(sessionCart);
      if (cart.length) {
        let url = `${process.env.REACT_APP_API_URL}/api/games?`;
        let index = 0;
        cart.forEach(function (cartItem) {
          url = url.concat(index ? "&":"", `filters[id][$eq][${index}]=${cartItem.id}`)
          index++;
        })

        axios.get(url)
        .then(response => {
          setCartItems(response.data.data);
          calculateCheckout();
        })
        .catch(error => {
          console.log(error)
        })
      }
    }
  }

  function calculateCheckout() {
    let items = 0;
    let discounts = 0;
    let subtotal = 0;

    if (cartItems) {
      cartItems.forEach(function(item) {
        items += item.attributes.last_price;
        discounts += item.attributes.current_price - item.attributes.last_price;
        subtotal += item.attributes.current_price;
      });

      setCheckout({
        items: items,
        discounts: discounts,
        subtotal: subtotal
      });
    } else {
      setCheckout(null);
    }
  }

  const removeItemCart = (id) => {
    if (cartItems) {
      let updatedCartItems = cartItems.filter(function(item) {
        return item.id != id;
      });
      let sessionCart = sessionStorage.getItem("cart");
      if (sessionCart) {
        let cart = JSON.parse(sessionCart);
        if (sessionCart.length) {
          let updatedSessionCart = cart.filter(function(item) {
            return item.id != id;
          })
          sessionStorage.setItem("cart", JSON.stringify(updatedSessionCart));
        }
      }
      setCartItems(updatedCartItems);
      calculateCheckout();
    }
  }

  return (
    <>
      <Navbar></Navbar>
      <div className="pl-44 pr-44 pt-5 pb-10 mt-20">
        <h3 className="text-2xl ml-36 font-bold mb-7">Meu carrinho</h3>
        {
          cartItems && checkout && (
            <div className="flex">
              <div className="w-3/4 mr-5">
                {
                  cartItems.map(item => {
                    return (
                      <CardGameResume key={item.id} game={item} removeItemCart={removeItemCart}></CardGameResume>
                    )
                  })
                }
              </div>
              <div className="bg-stone-950 flex flex-col justify-between h-96 w-1/4 p-5 rounded-xl">
                <h4 className="font-semibold text-lg">Resumo do pedido</h4>
                <div>
                  <p className="text-sm flex justify-between">Itens: <strong className="font-medium">{ utils.getMonetaryFormat(checkout.items) }</strong></p>
                  <p className="text-sm flex justify-between">Descontos: <strong className="font-medium text-lime-500">{ utils.getMonetaryFormat(checkout.discounts) }</strong></p>
                  <p className="text-lg mt-2 flex justify-between">Subtotal: <strong>{ utils.getMonetaryFormat(checkout.subtotal) }</strong></p>
                  <button className="bg-blue-600 w-full pt-2 pb-2 mt-5 text-center rounded-lg hover:bg-blue-500">Finalizar compra</button>
                </div>
              </div>
            </div>
          )
        }
      </div>
      <Footer></Footer>
    </>
  );
}

export default Cart;