import './App.css'
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import Navbar from './components/Navbar/NavBar';
import Footer from './components/Footer/Footer';
import NotFound from './components/NotFound/NotFound';
import Checkout from './components/Checkout/Checkout';
import Cart from './components/Cart/Cart';
import CartProvider from './components/context/CartContext';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <CartProvider>
          <Navbar />
          <Routes>
            <Route path={'/'} element={<ItemListContainer greeting='Puss in Books' />} />
            <Route path={'/category/:categoryId'} element={<ItemListContainer />} />
            <Route path={'/item/:itemId'} element={<ItemDetailContainer />} />
            <Route path={'/cart'} element={<Cart />} />
            <Route path={'/checkout'} element={<Checkout />} />
            <Route path={'*'} element={<NotFound />} />
          </Routes>
        </CartProvider>

      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;