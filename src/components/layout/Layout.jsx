import { Outlet } from "react-router-dom";
import Footer from "./Footer/Footer";
import Navbar from "./Navbar/Navbar";
import Chat from "./Chat/Chat";

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