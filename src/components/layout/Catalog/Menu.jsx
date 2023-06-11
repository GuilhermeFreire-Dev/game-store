

function Menu() {

  const categorias = [
    {
      "id": 1,
      "nome": "Ação"
    },
    {
      "id": 2,
      "nome": "Aventura"
    },
    {
      "id": 3,
      "nome": "RPG (Role-Playing Game)"
    },
    {
      "id": 4,
      "nome": "Estratégia"
    },
    {
      "id": 5,
      "nome": "Quebra-cabeça"
    },
    {
      "id": 6,
      "nome": "Plataforma"
    },
    {
      "id": 7,
      "nome": "Corrida"
    },
    {
      "id": 8,
      "nome": "Esportes"
    },
    {
      "id": 9,
      "nome": "Simulação"
    },
    {
      "id": 10,
      "nome": "Sobrevivência"
    },
    {
      "id": 11,
      "nome": "Terror"
    },
    {
      "id": 12,
      "nome": "MMO (Massively Multiplayer Online)"
    },
    {
      "id": 13,
      "nome": "FPS (First-Person Shooter)"
    },
    {
      "id": 14,
      "nome": "Jogo de cartas"
    },
    {
      "id": 15,
      "nome": "Jogo de tabuleiro"
    },
    {
      "id": 16,
      "nome": "Jogo de luta"
    },
    {
      "id": 17,
      "nome": "Jogo de tiro"
    },
    {
      "id": 18,
      "nome": "Jogo de construção"
    },
    {
      "id": 19,
      "nome": "Jogo educativo"
    },
    {
      "id": 20,
      "nome": "Jogo de música"
    }
  ];
  

  return (
    <div className="flex flex-col p-5 w-80 bg-stone-950 rounded-xl">
      {
        categorias.map(categoria => {
          return (
            <span className="bg-stone-800 mb-3 p-2 rounded-md">{ categoria.nome }</span>
          );
        })
      }
    </div>
  );
}

export default Menu;