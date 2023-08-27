import Carousel from "../layout/Homepage/Carousel";
import PopularGames from "../layout/Homepage/PopularGames";
import Highlights from "../layout/Homepage/Highlights";
import Promotions from "../layout/Homepage/Promotions";

function Home() {

  return (
    <>
      <div className="pl-44 pr-44 pt-5 pb-10 mt-24">
        <div className="rounded-xl pt-1 pr-10 pb-5 pl-10 mb-5 bg-opacity-80">
          <Carousel></Carousel>
        </div>
        <Promotions></Promotions>
        <Highlights></Highlights>
        <PopularGames></PopularGames>
      </div>
    </>
  );
}

export default Home;