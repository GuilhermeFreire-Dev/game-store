import CardV from "../layout/Catalog/CardV";
import Carousel from "../layout/Homepage/Carousel";
import Footer from "../layout/Footer/Footer";
import Navbar from "../layout/Navbar/Navbar";
import PopularGames from "../layout/Homepage/PopularGames";
import Highlights from "../layout/Homepage/Highlights";
import Promotions from "../layout/Homepage/Promotions";


function Home() {

  return (
    <>
      <Navbar></Navbar>
      <div className="pl-44 pr-44 pt-5 pb-10">
        <div className="rounded-xl 
                        pt-1 pr-10 pb-5 pl-10 mb-5
                        bg-opacity-80"
        >
          <Carousel></Carousel>
        </div>
        <Promotions></Promotions>
        <Highlights></Highlights>
        <PopularGames></PopularGames>
      </div>
      <Footer></Footer>
    </>
  );
}

export default Home;