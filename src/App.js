import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import TemperaturePage from './pages/TemperaturePage';
import HumidityPage from './pages/HumidityPage';
import LuxPage from './pages/LuxPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/temperature' element={<TemperaturePage />} />
        <Route path='/humidity' element={<HumidityPage />} />
        <Route path='/lux' element={<LuxPage />} />
      </Routes>
    </Router>  
  );
}

export default App;
