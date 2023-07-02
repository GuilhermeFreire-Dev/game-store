import { useEffect, useState } from "react";

function Classification({classification}) {

  const [color, setColor] = useState("bg-transparent");

  useEffect(() => {
    if (classification) {
      classificationColor();
    }
  }, []);

  function classificationColor() {
    switch (classification) {
      case 18:
        setColor("bg-black");
        break;
      case 16:
        setColor("bg-red-600");
        break;
      case 14:
        setColor("bg-orange-500");
        break;
      case 12:
        setColor("bg-amber-400");
        break;
      case 10:
        setColor("bg-sky-400");
        break;
      case 1:
        setColor("bg-lime-500");
        break;
      default:
        break;
    }
    return color;
  }

  return (
    <span className="pr-20">
      <p>Classificação Indicativa:</p>
      <p className={"border-2 rounded-lg p-1 mt-1 w-10 h-10 text-center font-bold text-lg " + color}>{ classification !== 1 ? classification : "L"}</p>
    </span>
  );
}

export default Classification;