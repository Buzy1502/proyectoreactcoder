import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Navbar from './components/Navbar/NavBar';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <ItemListContainer
        greeting='Meooks List'
      />
      <Footer/>
    </div>
  );
}

export default App;