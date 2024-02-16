import logo from './logo.svg';
import './App.css';
import Rutas from './componentes/Rutas';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Rutas />
      </BrowserRouter>
    </div>
  );
}

export default App;
