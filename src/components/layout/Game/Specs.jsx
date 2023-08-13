

function Specs({specs, nvl}) {
  return (
    <div className="pl-4 pr-4 w-1/2">
      <h5 className="text-lg mb-2">{ `Requisitos ${nvl}:`}</h5>
      <ul>
        <li className="mb-2">
          <span>Sistema operacional: </span>
          <span>{ specs.so }</span>
        </li>
        <li className="mb-2">
          <span>Processador: </span>
          <span>{ specs.processor }</span>
        </li>
        <li className="mb-2">
          <span>Memória: </span>
          <span>{ specs.memory }</span>
        </li>
        <li className="mb-2">
          <span>Placa de vídeo: </span>
          <span>{ specs.graphics }</span>
        </li>
      </ul>
    </div>
  );
}

export default Specs;