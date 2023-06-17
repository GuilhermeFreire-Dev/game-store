

function Specs({specs}) {
  return (
    <div className="pl-4 pr-4 w-1/2">
      <h5 className="text-lg mb-2">Requisitos mínimos:</h5>
      <ul>
        <li className="mb-2">
          <span>Sistema operacional: </span>
          <span>{ specs.attributes.so }</span>
        </li>
        <li className="mb-2">
          <span>Processador: </span>
          <span>{ specs.attributes.processor }</span>
        </li>
        <li className="mb-2">
          <span>Memória: </span>
          <span>{ specs.attributes.memory }</span>
        </li>
        <li className="mb-2">
          <span>Placa de vídeo: </span>
          <span>{ specs.attributes.graphics }</span>
        </li>
      </ul>
    </div>
  );
}

export default Specs;