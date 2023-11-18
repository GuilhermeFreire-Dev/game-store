
function TableHeader({header}) {
  return (
    <th className="border-b-2 border-stone-500">
      <div className="pt-3 pr-5 pb-3 pl-5 text-left">{ header }</div>
    </th>
  )
}

export default TableHeader;