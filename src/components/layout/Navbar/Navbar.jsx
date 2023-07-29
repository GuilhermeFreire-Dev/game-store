import { IoPersonCircleSharp } from "react-icons/io5";
import SearchBar from "./SearchBar";
import { useEffect, useState } from "react";

function Navbar({itemsOnCart}) {

  const [qtdItemsCart, setQtdItemsCart] = useState(0);

  useEffect(() => {
    if (!itemsOnCart) {
      console.log("sem itens");
      getCartItems();
    } else {
      console.log("com items");
      setQtdItemsCart(itemsOnCart);
    }
  }, [itemsOnCart]);

  function getCartItems() {
    let cart = sessionStorage.getItem("cart");
    if (cart) {
      let sessionCart = JSON.parse(cart);
      setQtdItemsCart(sessionCart.length);
    }
  }

  return (
    <header className='bg-stone-900 flex items-center justify-between
                        pl-20 pr-20 h-24 w-full z-10
                        fixed top-0'>
      <div className='flex items-center'>
        <a href="#" className="mr-5 w-32">
          <img src="/images/fulllogo.svg" alt="logo"/>
        </a>
        <div className='ml-20'>
          <a className="mr-3 pt-1 pr-3 pb-2 pl-3 rounded-2xl duration-300 hover:bg-stone-600" href="/">Descobrir</a>
          <a className="ml-1 pt-1 pr-3 pb-2 pl-3 rounded-2xl duration-300 hover:bg-stone-600" href="/navegar">Navegar</a>
        </div>
      </div>
      <SearchBar></SearchBar>
      <div>
      <a className="flex ml-1 pt-1 pr-3 pb-2 pl-3 rounded-2xl duration-300 hover:bg-stone-600" href="/carrinho">
        Carrinho
        {
          qtdItemsCart > 0 && (
            <p className="bg-white text-stone-900 text-center text-xs font-bold rounded-full w-4 h-4 pb-2 ml-1">{ qtdItemsCart }</p>
          )
        }
      </a>
      </div>
      <div className="flex items-center pt-1 pr-3 pb-1 pl-3
                      rounded-3xl cursor-pointer
                      hover:bg-stone-600 duration-300">
        <IoPersonCircleSharp className="w-9 h-9"></IoPersonCircleSharp>
        <p className="pl-2">Login</p>
      </div>
    </header>
  );
}

export default Navbar;