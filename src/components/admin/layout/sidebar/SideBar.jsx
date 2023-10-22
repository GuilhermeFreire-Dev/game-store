import { MdChatBubble, MdHome, MdSpaceDashboard, MdViewWeek } from "react-icons/md";
import Header from "./SideBarHeader";
import { Link } from "react-router-dom";
import { useState } from "react";

function SideBar() {

  const [path, setPath] = useState('/admin');
  const [options, setOptions] = useState([
    {
      path: '',
      name: 'Home',
      icon: <MdHome className="text-2xl m-1"></MdHome>
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      icon: <MdSpaceDashboard className="text-2xl m-1"></MdSpaceDashboard>
    },
    {
      path: '/chats',
      name: 'Chats',
      icon: <MdChatBubble className="text-2xl m-1"></MdChatBubble>
    },
    {
      path: '/catalogo',
      name: 'Catalogo',
      icon: <MdViewWeek className="text-2xl m-1"></MdViewWeek>,
      subitems: [
        {
          path: '#',
          name: 'Jogos',
        },
        {
          path: '#',
          name: 'Categorias',
        }
      ]
    }
  ]);
  
  return (
    <div className="bg-stone-800 flex flex-col items-center w-1/4 h-screen">
      <Header></Header>
      <div className="pr-2 pl-2 w-full">
        <ul className="">
          {
            options.map((option) => {
              return (
                <li>
                  <Link className={`${path === option.path ? 'bg-stone-700' : ''}
                    flex items-center pt-2 pr-4 pb-2 pl-4 mt-2 mb-2 cursor-pointer hover:bg-stone-700 rounded-lg`}
                    to={`${process.env.REACT_APP_URL}/admin${option.path}`}
                    onClick={() => {setPath(option.path)}}>
                      { option.icon }
                      <p className="ml-2">{ option.name }</p>
                  </Link>
                </li>
              );
            })
          }
        </ul>
      </div>
    </div>
  );
}

export default SideBar;