import axios from "axios";
import { useEffect, useState } from "react";

function Carousel() {

  const [index, setIndex] = useState(0);
  const [carousel, setCarousel] = useState(null);

  useEffect(() => {
    getCarousel();

    if (carousel) {
      const interval = setInterval(() => {
        setIndex((index) => index % carousel.length + 1)
      }, 4000);
  
      return () => {
        clearInterval(interval)
      };
    }
  }, []);

  function getCarousel() {
    if (!carousel) {
      axios.get("http://localhost:1337/api/game-carousels/1?populate=*")
      .then(response => {
        setCarousel(response.data.data.attributes.games.data);
      })
      .catch(error => {
        console.log("error");
      })
    }
  }

  function sideTo(index) {
    setIndex(index);
    return;
  }

  return (
    carousel && (
      <div className="flex justify-evenly">
        <div className="w-2/3">
          <div className="relative overflow-hidden rounded-xl md:h-96">
            {
              carousel.map(function (item, id = 0) {
                return (
                  <a key={item.id} href={`game/${item.id}`}>
                    <div>
                      <div className={++id === index ? "bg-cover bg-no-repeat bg-center h-96 p-5 flex items-end" : "hidden"}
                        style={{backgroundImage: `url(${item.attributes.thumb})`}}
                      >
                        <p className="text-2xl font-semibold">{item.attributes.name}</p>
                      </div>
                    </div>
                  </a>
                );
              })
            }
          </div>
        </div>
        <div className="flex flex-col justify-between 
                        w-1/3 pl-10">
          {
            carousel.map(function(item, id = 0) {
              return (
                <div className={++id === index ? "bg-stone-500 p-5 w-full rounded-xl cursor-pointer duration-300" : "bg-stone-800 p-5 w-full rounded-xl cursor-pointer duration-300 hover:bg-stone-700"}
                  onClick={() => sideTo(id)}
                >
                  <p>{item.attributes.name}</p>
                </div>
              );
            })
          }
        </div>
      </div>
    )
  );
}

export default Carousel;