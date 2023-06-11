import { useEffect, useState } from "react";

function Carousel() {

  const [index, setIndex] = useState(0);
  const images = [
    {
      id: 0,
      data: 'The Last of Us part I',
      src: 'https://image.api.playstation.com/vulcan/ap/rnd/202206/0720/ca6Dr3k7PXKaDgEbhN9eODeD.png'
    },
    {
      id: 1,
      data: 'Spider Man Remastered',
      src: 'https://cdn1.epicgames.com/offer/4bc43145bb8245a5b5cc9ea262ffbe0e/EGS_MarvelsSpiderManRemastered_InsomniacGamesNixxesSoftware_S1_2560x1440-73702d11161b29a0b7c40a8b489b1808'
    },
    {
      id: 2,
      data: 'Forza Horizon 5',
      src: 'https://images.alphacoders.com/116/1168382.jpg'
    },
    {
      id: 3,
      data: 'Grand Theft Auto V',
      src: 'https://cdn.awsli.com.br/2500x2500/1610/1610163/produto/177700813/poster-grand-theft-auto-v-gta-5-c-afe2ac45.jpg'
    },
    {
      id: 4,
      data: 'Far Cry 6',
      src: 'https://image.api.playstation.com/vulcan/ap/rnd/202012/1522/MEtJOQHXbVy0ux0Emo9HInke.jpg'
    }
  ];

  function sideTo(index) {
    setIndex(index);
    return;
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 4000);

    return () => {
      clearInterval(interval)
    };
  }, images.length);


  return (
    <div className="flex justify-evenly">
      <div className="w-2/3">
        <div className="relative overflow-hidden rounded-xl md:h-96">
          {
            images.map(item => {
              return (
                <div key={item.id} className="" >
                  <div className={item.id === index ? "bg-cover bg-no-repeat bg-center h-96 p-5 flex items-end" : "hidden"} 
                    style={{backgroundImage: `url(${item.src})`}}
                  >
                    <p className="text-2xl font-semibold">{item.data}</p>
                  </div>
                </div>
              );
            })
          }
        </div>
      </div>
      <div className="w-1/3 pl-10">
        {
          images.map(item => {
            return (
              <div className={index === item.id ? "bg-stone-500 p-5 mb-3 w-full rounded-xl cursor-pointer duration-300" : "bg-stone-800 p-5 mb-3 w-full rounded-xl cursor-pointer duration-300 hover:bg-stone-700"}
                onClick={() => sideTo(item.id)}
              >
                <p>{item.data}</p>
              </div>
            );
          })
        }
      </div>
    </div>
  );
}

export default Carousel;