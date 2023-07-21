import CardGameResume from "../layout/Cart/CardGameResume";
import Footer from "../layout/Footer/Footer";
import Navbar from "../layout/Navbar/Navbar";

function Cart() {
  return (
    <>
      <Navbar></Navbar>
      <div className="pl-44 pr-44 pt-5 pb-10 mt-24 flex">
        <CardGameResume></CardGameResume>
        <div className="bg-stone-950 h-10 w-1/3">

        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

export default Cart;