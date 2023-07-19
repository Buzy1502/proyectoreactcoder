import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemListContainer/ItemDetailContainer/ItemDetailContainer'
import Navbar from './components/Navbar/NavBar';
import Footer from './components/Footer/Footer';
import NotFound from './components/NotFound/NotFound';
import { Route, Routes, BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path={'/'} element={<ItemListContainer greeting='Puss in Books' />} />
          <Route path={'/category/:categoryId'} element={<ItemListContainer />} />
          <Route path={'/item/:itemId'} element={<ItemDetailContainer />} />
          <Route path={'/cart'} element={<NotFound />} />
          <Route path={'*'} element={<NotFound />} />
          <Route />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;