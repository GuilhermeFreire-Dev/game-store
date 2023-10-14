import { Outlet } from "react-router-dom";
import Footer from "./footer/Footer";
import Navbar from "./navbar/Navbar";
import Chat from "../chat/Chat";

function Layout({context}) {
  return (
    <>
      <Navbar context={context}></Navbar>
        <Outlet></Outlet>
      <Footer></Footer>
      <Chat></Chat>
    </>
  );
}

export default Layout;