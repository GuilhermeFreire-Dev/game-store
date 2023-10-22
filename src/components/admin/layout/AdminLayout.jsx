import { Outlet } from "react-router";
import Footer from "./footer/Footer";
import SideBar from "./sidebar/SideBar";

function AdminLayout() {
  return (
    <>
      <div className="flex">
        <SideBar></SideBar>
        <div className="p-10 w-full">
          <Outlet></Outlet>
          {/* <Footer></Footer> */}
        </div>
      </div>
    </>
  );
}

export default AdminLayout;