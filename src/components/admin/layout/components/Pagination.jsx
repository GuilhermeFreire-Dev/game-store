import { useEffect, useState } from "react";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";

function Pagination({pageSize, totalItems, page, setPage}) {

  const [paginationControls, setPaginationControls] = useState([]);

  useEffect(() => {
    console.log(pageSize);
    console.log(totalItems);
    paginationIndex();
  }, [page]);

  function paginationIndex() {
    const pageControls = [];

    for (let index = 1; index <= totalItems / pageSize; index++) {
      pageControls.push(
        <button 
          className={ (index) === page ? "btn-page-control-active" : "btn-page-control"}
          key={index}
          onClick={() => setPage(index)}>
          { index }
        </button>
      );
    }

    setPaginationControls(pageControls);
  }

  return (
    <div className="w-full flex justify-end">
      <button className="btn-page-control pl-1" onClick={() => {
        if (page > 1) {
          setPage(page - 1)
        }
      }}><MdArrowBackIos></MdArrowBackIos></button>
      {
        paginationControls.map((item) => {
          return ( item )
        })
      }
      <button className="btn-page-control" onClick={() => {
        if (page < (totalItems / pageSize)) {
          setPage(page + 1)
        }
      }}><MdArrowForwardIos></MdArrowForwardIos></button>
    </div>
  );
}

export default Pagination;