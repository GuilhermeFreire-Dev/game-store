import { Outlet } from "react-router-dom";
import Footer from "./Footer/Footer";
import Navbar from "./Navbar/Navbar";

function Layout({context}) {
  return (
    <>
      <Navbar cart={context.cart.getCart}></Navbar>
        <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
}

export default Layout;