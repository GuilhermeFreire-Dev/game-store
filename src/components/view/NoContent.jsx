
function NoContent() {
  return (
    <div className="h-screen flex flex-col items-center justify-center text-center">
      <div>
        <h1 className="font-bold text-5xl mb-5">{ "Opss!" }</h1>
        <h2 className="font-semibold text-2xl mb-3" >{ "Não encontramos a página que você procurava :(" }</h2>
      </div>
      <p className="text-stone-400 mb-8">{ "404 Not Found" }</p>
      <a className="bg-stone-700 pt-3 pr-5 pb-3 pl-5 rounded-xl hover:bg-stone-500" href="/">{ "Voltar a página inicial" }</a>
    </div>
  );
}

export default NoContent;