import './App.css';
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import QuemSomos from './components/pages/QuemSomos';
import Contato from './components/pages/Contato';
import { FaHome, FaAt, FaRegUserCircle, FaBiohazard, FaFolder } from "react-icons/fa";
import Calculadora from './components/Calculadora';

function App() {



  return (
    <>

    
      <h1><FaBiohazard /> Menu</h1>


      

      <BrowserRouter>
        <ul>
          <li><Link to="/"><FaHome /> Home</Link></li>
          <li><Link to="/contato"> <FaAt />Contato</Link></li>
          <li><Link to="/quemsomos"><FaRegUserCircle /> Quem Somos</Link></li>
          <li><Link to="/calculadora">Calculadora</Link></li>
        </ul>


        {/* Aqui aparecerá o componente da rota */}


        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/quemsomos" element={<QuemSomos />} />
          <Route path="/calculadora" element={<Calculadora />} />
        </Routes>
      </BrowserRouter>

      {/* Fim do componente da rota */}
      <p>Esse é o rodapé show!</p>

    </>
  );
}

export default App;
