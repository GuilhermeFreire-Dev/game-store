import CardC from "../layout/Catalog/CardC";
import CardV from "../layout/Catalog/CardV";
import Menu from "../layout/Catalog/Menu";
import Footer from "../layout/Footer/Footer";
import Navbar from "../layout/Navbar/Navbar";


function Navegar() {
  return (
    <>
      <Navbar></Navbar>
      <div className=" flex pt-10 pr-44 pb-20 pl-44">
        <div>
          <h3 className="text-2xl mb-5 font-bold">Navegar</h3>
          <Menu></Menu>
        </div>
        <div className="flex flex-wrap h-min items-start pt-16 pb-10 pl-10">
          <CardV></CardV>
          <CardV></CardV>
          <CardV></CardV>
          <CardV></CardV>
          <CardV></CardV>
          <CardV></CardV>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

export default Navegar;