import CardGameResume from "../layout/Cart/CardGameResume";
import Footer from "../layout/Footer/Footer";
import Navbar from "../layout/Navbar/Navbar";

function Cart() {
  return (
    <>
      <Navbar></Navbar>
      <div className="pl-44 pr-44 pt-5 pb-10 mt-20">
        <h3 className="text-2xl ml-36 font-bold mb-7">Meu carrinho</h3>
        <div className="flex">
          <div className="w-3/4 max-h-96 mr-5 overflow-y-scroll">
            <CardGameResume></CardGameResume>
            <CardGameResume></CardGameResume>
            <CardGameResume></CardGameResume>
          </div>
          <div className="bg-stone-950 flex flex-col justify-between h-auto w-1/4 p-5 rounded-xl">
            <h4 className="font-semibold text-lg">Resumo do pedido</h4>
            <div>
              <p className="text-sm flex justify-between">Itens: <strong className="font-medium">R$750,80</strong></p>
              <p className="text-sm flex justify-between">Descontos: <strong className="font-medium text-lime-500">-R$300,32</strong></p>
              <p className="text-lg mt-2 flex justify-between">Total: <strong>R$450,48</strong></p>
              <button className="bg-blue-600 w-full pt-2 pb-2 mt-5 text-center rounded-lg hover:bg-blue-500">Finalizar</button>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

export default Cart;