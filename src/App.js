import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import TemperaturePage from './pages/TemperaturePage';
import HumidityAirPage from './pages/HumidityAirPage';
import HumiditySoilPage from './pages/HumiditySoilPage';
import LuxPage from './pages/LuxPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/temperature' element={<TemperaturePage />} />
        <Route path='/humidity-air' element={<HumidityAirPage />} />
        <Route path='/humidity-soil' element={<HumiditySoilPage />} />
        <Route path='/lux' element={<LuxPage />} />
      </Routes>
    </Router>  
  );
}

export default App;
