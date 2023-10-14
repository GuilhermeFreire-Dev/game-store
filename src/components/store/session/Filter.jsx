import axios from "axios";
import { useEffect, useRef, useState } from "react";


function Filter({filteredResults, genres}) {

  const [fPrice, setFPrice] = useState(500);
  const [fGenres, setFGenres] = useState([]);
  const [results, setResults] = useState(null);
  const refPrice = useRef(null);
  var request = false;

  useEffect(() => {
    if (!request) {
      getGames();
    }
  }, []);

  function filterPrice() {
    setFPrice(refPrice.current.value);
  }

  function filterGenre(genre) {
    if (!fGenres.includes(genre)) {
      fGenres.push(genre);
    }
    else {
      let filteredGenres = fGenres.filter(item => {
        return item !== genre;
      });
      setFGenres(filteredGenres);
    }
  }

  function getGames() {
    request = true;
    axios.get(`${process.env.REACT_APP_API_URL}/api/v1/games/promotions`)
    .then((response) => {
      setResults(response.data.data);
      filteredResults(response.data.data);
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      request = false;
    })
  }

  async function filterResults(e) {
    e.preventDefault();
    let paramPrice = `?price=${fPrice}`;
    let paramGenres = "";

    if (fGenres.length) {
      paramGenres = "&genres=";
      fGenres.forEach(genre => {
        paramGenres = paramGenres.concat(`${genre}+`);
      });
    }

    request = true;
    axios.get(`${process.env.REACT_APP_API_URL}/api/v1/games/promotions${paramPrice}${paramGenres}`)
    .then((response) => {
      filteredResults(response.data.data);
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      request = false;
    })
  }

  function clearFilters() {
    setFPrice(500);
    setFGenres([]);
    filteredResults(results);
  }

  return (
    <form className="flex flex-col p-5 w-80 bg-stone-950 rounded-xl" onSubmit={filterResults} onReset={clearFilters}>
      <p className="mb-5">Filtros</p>
      <fieldset className="block">
        <label htmlFor="fPrice">{ `Preço: R$ ${fPrice}` }</label>
        <input title="fPrice" type="range" min={0} max={1000} step={5} value={fPrice} ref={refPrice} onChange={() => {filterPrice()}} className="w-full mt-2 cursor-pointer" />
      </fieldset>
      <div className="mt-3 mb-5">
        <p>Gêneros</p>
        {
          genres.length > 0 && (
            genres.map(item => {
              return (
                <fieldset key={item.id} className="inline-flex items-center mt-2">
                  <input onChange={() => filterGenre(item.genre)} title="fGenre" type="checkbox" className="cursor-pointer"/>
                  <label htmlFor="fGenre" className="ml-2 mr-2">{ item.genre }</label>
                </fieldset>
              );
            })
          )
        }
      </div>
      <div className="inline-flex justify-end">
        <button type="reset" className="p-2 mb-2 m-2 w-5/12 rounded-lg hover:bg-stone-500">Limpar filtros</button>
        <button type="submit" className="bg-blue-600 p-2 mb-2 mt-2 w-5/12 rounded-lg hover:bg-blue-500">Filtrar</button>
      </div>
    </form>
  );
}

export default Filter;