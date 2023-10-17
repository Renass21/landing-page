
import './App.css';
import { Header } from './Component/Header/Header';
import {Main} from './Component/Main/Main';
import FotoLhama1 from './assets/alpaca-animal-600x350.jpg';

function App() {
  return (
    <>
      <Header />
      <Main image={ FotoLhama1 
      } />
    </>
  );
}

export default App;