import { Outlet } from "react-router-dom";
import Footer from "./footer/Footer";
import Navbar from "./navbar/Navbar";
import StoreChat from "../chat/StoreChat";

function Layout({context}) {
  return (
    <>
      <Navbar context={context}></Navbar>
        <Outlet></Outlet>
      <Footer></Footer>
      <StoreChat></StoreChat>
    </>
  );
}

export default Layout;