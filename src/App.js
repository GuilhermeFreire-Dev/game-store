import './assets/css/App.css';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeView from './components/view/HomeView';
import GameView from './components/view/GameView';
import NavigateView from './components/view/NavigateView';
import NoContentView from './components/view/NoContentView';
import Cart from './scripts/Cart';
import { useState } from 'react';
import Layout from './components/layout/Layout';
import CartView from './components/view/CartView';
import SessionDetailsView from './components/view/SessionDetailsView';

function App() {

  const [cart, setCart] = useState(new Cart());
  const [context, setContext] = useState({
    cart: cart
  });

  return (
    <div className="App bg-stone-900 text-white">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout context={context}></Layout>}>
            <Route index element={<HomeView></HomeView>}></Route>
            <Route path='/game/:id' element={<GameView context={context}></GameView>}></Route>
            <Route path='/navegar' element={<NavigateView></NavigateView>}></Route>
            <Route path='/carrinho' element={<CartView cart={context.cart}></CartView>}></Route>
            <Route path='/promocoes' element={<SessionDetailsView sessionName={"Promoções"}></SessionDetailsView>}></Route>
            <Route path='*' element={<NoContentView></NoContentView>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
