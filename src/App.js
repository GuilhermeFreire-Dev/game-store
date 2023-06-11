import './assets/css/App.css';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/view/Home';
import Navegar from './components/view/Navegar';
import Game from './components/view/Game';

function App() {
  return (
    <div className="App bg-stone-900 text-white">
      <BrowserRouter>
        <Routes>
          <Route>
            <Route index element={<Home></Home>}></Route>
            <Route path='navegar' element={<Navegar></Navegar>}></Route>
            <Route path='game/:id' element={<Game></Game>} ></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
