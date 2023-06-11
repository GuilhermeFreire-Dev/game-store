import SearchBar from "./SearchBar";

function Navbar() {
  return (
    <header className='flex items-center justify-between 
                       pl-20 pr-20 h-24'
    >
      <div className='flex items-center'>
        <div className="mr-5 w-32">
          <img src="/images/fulllogo.svg" alt="logo" />
        </div>
        <div className='ml-20'>
          <a className="mr-3 pt-1 pr-3 pb-2 pl-3
                        rounded-2xl duration-300
                        hover:bg-stone-600" href="/">Descobrir</a>
          <a className="ml-1 pt-1 pr-3 pb-2 pl-3
                        rounded-2xl duration-300
                        hover:bg-stone-600" href="/navegar">Navegar</a>
        </div>
      </div>
      <SearchBar></SearchBar>
      {/* <div className='bg-gradient-to-r from-violet-600 to-indigo-600 
                      w-9 h-9 pt-1
                      rounded-full 
                      text-center  
                      cursor-pointer'
      >
        <span>GM</span>
      </div> */}
      <div className="flex items-center
                      pt-1 pr-3 pb-1 pl-3
                      rounded-3xl cursor-pointer
                      hover:bg-stone-600
                      duration-300">
        <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="36px" viewBox="0 0 24 24" width="36px" fill="#FFFFFF">
          <g>
            <rect fill="none" height="24" width="24"/>
          </g>
          <g>
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 4c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm0 14c-2.03 0-4.43-.82-6.14-2.88C7.55 15.8 9.68 15 12 15s4.45.8 6.14 2.12C16.43 19.18 14.03 20 12 20z"/>
            </g>
        </svg>
        <p className="pl-2">Login</p>
      </div>
    </header>
  );
}

export default Navbar;