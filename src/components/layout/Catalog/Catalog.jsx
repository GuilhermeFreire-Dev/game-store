
import CardH from "./CardH";
import CardV from "./CardV";
import Carousel from "./Carousel";

function Catalog() {
  return (
      <div className="pl-44 pr-44 pt-10 pb-20">
        <div className="bg-stone-950 rounded-xl 
                        pt-10 pr-20 pb-10 pl-20 mb-10
                        bg-opacity-80"
        >
          <Carousel></Carousel>
        </div>
        <h3 className="text-2xl mb-5 font-bold">Promoções</h3>
        <div className="flex justify-between mb-10">
          <CardV></CardV>
          <CardV></CardV>
          <CardV></CardV>
          <CardV></CardV>
          <CardV></CardV>
          <CardV></CardV>
        </div>
        <h3 className="text-2xl mb-5 font-bold">Destaques</h3>
        <div className="flex justify-between mb-10">
          <CardH></CardH>
          <CardH></CardH>
          <CardH></CardH>
        </div>
        <h3 className="text-2xl mb-5 font-bold">Principais categorias</h3>

        <h3 className="text-2xl mb-5 font-bold">Mais populares</h3>
        <div className="flex justify-between mb-10">
          <CardV></CardV>
          <CardV></CardV>
          <CardV></CardV>
          <CardV></CardV>
          <CardV></CardV>
          <CardV></CardV>
        </div>
      </div>
  );
}

export default Catalog;