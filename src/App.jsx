// src/App.jsx

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navabar/navbar';
import Home from './pages/Home';
import Products from './pages/Products';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        
      </Routes>
    </Router>
  );
}

export default App;
