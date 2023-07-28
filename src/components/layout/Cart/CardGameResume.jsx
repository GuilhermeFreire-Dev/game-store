
function CardGameResume() {

  const game = {
    "id": 1,
    "attributes": {
        "name": "Far Cry 6",
        "createdAt": "2023-06-10T23:21:03.119Z",
        "updatedAt": "2023-07-16T14:06:17.663Z",
        "publishedAt": "2023-06-10T23:21:12.730Z",
        "description": "Far Cry 6 é um jogo de tiro em primeira pessoa de mundo aberto desenvolvido pela Ubisoft. Situado em uma ilha fictícia chamada Yara, inspirada na cultura e história de Cuba, o jogo transporta os jogadores para um cenário de revolução e resistência contra um regime ditatorial.",
        "current_price": 225.24,
        "last_price": 375.4,
        "image_url": "https://cdn1.epicgames.com/b4565296c22549e4830c13bc7506642d/offer/TETRA_PREORDER_STANDARD%20EDITION_EPIC_Store_Portrait_1200x1600-1200x1600-ca8b802ff13813c37a44ebf68d0946a2.png",
        "developer": " Ubisoft",
        "publisher": "Ubisoft Entertainment",
        "size": 60,
        "launch_date": "2021-10-07",
        "metacritic_score": 74,
        "measurement": "GB",
        "edition": "Standard edition",
        "classification": 18,
        "thumb": "https://image.api.playstation.com/vulcan/ap/rnd/202012/1522/MEtJOQHXbVy0ux0Emo9HInke.jpg",
        "short_description": null,
        "highlighted": false,
        "popularity": 0.05,
        "platform": "Windows"
    }
  };

  return (
    <div className="bg-stone-950 flex w-4/6 mb-5 m-auto p-5 rounded-xl">
      <img className="w-2/12 rounded-lg" src={game.attributes.image_url} alt="game" />
      <div className="pl-5 pr-5 w-2/3">
        <h4 className="font-bold text-2xl mb-2">{ game.attributes.name }</h4>
        <p className="bg-stone-700 w-2/4 rounded-lg pb-0.5 mb-2 text-xs text-center font-semibold">{ game.attributes.edition }</p>
        <p className="text-xs font-semibold">{ game.attributes.platform }</p>
      </div>
      <div className="flex flex-col justify-between">
        <a href="#" className="text-stone-400 font-semibold text-end">Remover</a>
        <div className="inline-flex items-end">
          <div className="mr-3">
            <p className="text-stone-400 line-through">R${ game.attributes.last_price }</p>
            <p className="font-semibold text-xl">R${ game.attributes.current_price }</p>
          </div>
          <span className="bg-gradient-to-r from-violet-600 to-blue-600 rounded-xl pt-1 pr-3 pb-1 pl-3
                          text-center font-semibold">-30%</span>
        </div>
      </div>
    </div>
  );
}

export default CardGameResume;