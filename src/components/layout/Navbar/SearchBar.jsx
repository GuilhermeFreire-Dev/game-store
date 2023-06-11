
function SearchBar() {
  return (
    <input 
      className="bg-stone-700 rounded-3xl 
                placeholder-stone-400 
                pl-3 pb-2 pt-1 w-96
                focus:outline-stone-400"
      type="text" 
      placeholder="Pesquisar na loja" 
    />
  );
}

export default SearchBar;