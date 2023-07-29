import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import EmergencyContact from './pages/EmergencyContact';
import Emergency from './pages/Emergency';

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Halaman Utama</Link>
            </li>
            <li>
              <Link to="/input-nomor-darurat">Input Nomor Darurat</Link>
            </li>
            <li>
              <Link to="/emergency">Emergency</Link>
            </li>
          </ul>
        </nav>
          <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/input-nomor-darurat" element={<EmergencyContact/>} />
          <Route path="/emergency" element={<Emergency/>} />
          </Routes>
      </div>
    </Router>
  );
};

export default App;
