import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Cart from './components/Cart/Cart';
import { CartProvider } from './contexts/CartContext';
import Checkout from './components/Checkout';
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';
import ItemListContainer from './components/ItemList/ItemListContainer';
import NavBar from './components/NavBar';

function App() {
    return (
      <BrowserRouter basename='/tienda-online'>
        <CartProvider>
          <NavBar />
            <Routes>
              <Route path='/' element={<ItemListContainer greeting={'Bienvenidos a mi tienda'} />} />
              <Route path='/category/:categoryId' element={<ItemListContainer greeting={'Filtro por categoria'} />} />
              <Route path='/item/:id' element={<ItemDetailContainer />} />
              <Route path='/cart' element={<Cart />} />
              <Route path='/checkout' element={<Checkout />} />
            </Routes>
        </CartProvider>
      </BrowserRouter>
    );
}

export default App;
