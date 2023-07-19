import { useState } from "react";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";

function Media({medias}) {

  const [index, setIndex] = useState(1);

  function next() {
    if (index < medias.data.length)
      setIndex(index + 1);
    else
      setIndex(1);
  }

  function previous() {
    if (index > 1)
      setIndex(index - 1);
    else
      setIndex(medias.data.length);
  }

  return (
    <div className="w-2/3">
      <div className="flex items-center pl-4">
        <button type="button" onClick={previous} className="flex justify-center items-center relative 
                                        bg-stone-900 bg-opacity-80
                                          -mr-14 w-10 h-10 rounded-full
                                          hover:bg-stone-800 hover:bg-opacity-80 duration-300">
          <IoChevronBack></IoChevronBack>
        </button>
        {
          medias.data.map(function (media, id = 0) {
            return (
              <img key={media.id} className={++id === index ? "rounded-xl w-full h-full" : "hidden" } src={media.attributes.media_url} alt={media.attributes.description}></img>
            );
          })
        }
        <button type="button" onClick={next} className="flex justify-center items-center relative 
                                        bg-stone-900 bg-opacity-80
                                          -m-14 w-10 h-10 rounded-full
                                          hover:bg-stone-800 hover:bg-opacity-80 duration-300">
          <IoChevronForward></IoChevronForward>
        </button>
      </div>
      <div className="w-full inline-flex justify-center p-3">
        {
          medias.data.map(function (media, id = 0) {
            return (
              <span key={media.id} onClick={() => setIndex(id)} className={++id === index ? "block w-3 h-3 mr-1 ml-1 rounded-full cursor-pointer bg-stone-300" : "block w-3 h-3 mr-1 ml-1 rounded-full cursor-pointer bg-stone-600"}></span>
            );
          })
        }
      </div>
    </div>
  );
}

export default Media;