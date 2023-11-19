import { MdClose } from "react-icons/md";

function FloatContent({content, title, visible, setVisible}) {
  return (
    visible && (
      <div className="fixed top-0 left-0 z-20 w-full h-full bg-stone-700 bg-opacity-50 flex justify-center items-center">
        <div className="w-1/4 h-3/4 p-5 rounded-xl bg-stone-800">
          <div className="flex justify-between items-center">
            <h5>{ title }</h5>
            <button 
              className="w-6 h-6 flex justify-center items-center rounded-full hover:bg-stone-700" 
              onClick={() => setVisible(false)}>
              <MdClose></MdClose>
            </button>
          </div>
          <div>
            { content }
          </div>
        </div>
      </div>
    )
  );
}

export default FloatContent;