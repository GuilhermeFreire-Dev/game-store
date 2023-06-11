
function CardH() {
  return (
    <div className="bg-stone-800 rounded-xl 
                    p-4 m-2
                    select-none
                    cursor-pointer
                    hover:brightness-110"
    >
      <img className="w-full pb-2" src="/images/horizon.svg" alt="horizon" />
      <div>
        <h4 className="text-xl font-bold pb-2">Horizon Zero Dawn</h4>
        <p>Em uma era na qual máquinas vagam livremente e a humanidade deixou de ser a espécie dominante, uma jovem caçadora chamada Aloy inicia uma jornada na qual desvendará o seu destino.</p>
      </div>
    </div>
  );
}

export default CardH;