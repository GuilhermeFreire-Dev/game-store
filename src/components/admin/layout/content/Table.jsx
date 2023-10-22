import { useState } from "react";

function Table({tHead, tBody}) {

  return (
    <div className="pr-5 pl-5">
      <table className="m-5 w-full">
        <thead>
          { tHead }
        </thead>
        <tbody>
          { tBody }
        </tbody>
      </table>
    </div>
  )
}

export default Table;