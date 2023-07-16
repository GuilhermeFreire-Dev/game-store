import { useState } from "react";

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
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#fff">
            <path d="M0 0h24v24H0V0z" fill="none"/>
            <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12l4.58-4.59z"/>
          </svg>
        </button>
        {
          medias.data.map(function (media, id = 0) {
            return (
              <>
                <img key={media.id} className={++id === index ? "rounded-xl w-full h-full" : "hidden" } src={media.attributes.media_url} alt={media.attributes.description}></img>
              </>
            );
          })
        }
        <button type="button" onClick={next} className="flex justify-center items-center relative 
                                        bg-stone-900 bg-opacity-80
                                          -m-14 w-10 h-10 rounded-full
                                          hover:bg-stone-800 hover:bg-opacity-80 duration-300">
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#fff">
            <path d="M0 0h24v24H0V0z" fill="none"/>
            <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z"/>
          </svg>
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