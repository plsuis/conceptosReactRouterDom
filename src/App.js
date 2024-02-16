import logo from './logo.svg';
import './App.css';
import Rutas from './componentes/Rutas';
import { BrowserRouter } from 'react-router-dom';
import Links from './componentes/Links';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Rutas />
        {/* <Links /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
