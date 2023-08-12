import './assets/css/App.css';
import './index.css';
import { BrowserRouter, Route, Router, RouterProvider, Routes, createBrowserRouter } from 'react-router-dom';
import Home from './components/view/Home';
import Navegar from './components/view/Navegar';
import Game from './components/view/Game';
import NoContent from './components/view/NoContent';
import SessionDetails from './components/view/SessionDetails';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home></Home>,
      errorElement: <NoContent></NoContent>
    },
    {
      path: "/navegar",
      element: <Navegar></Navegar>
    },
    {
      path: "/game/:id",
      element: <Game></Game>
    },
    {
      path: "/promocoes",
      element: <SessionDetails sessionName={"Promoções"} contentUrl={"/api/v1/games/promotions"}></SessionDetails>
    }
  ]);

  return (
    <div className="App bg-stone-900 text-white">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
