import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import EmergencyContact from './pages/EmergencyContact';
import Emergency from './pages/Emergency';
import EmergencyNumbers from './pages/EmergencyNumbers';

const App = () => {
  return (
    <Router>
      <div>
          <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/input-nomor-darurat" element={<EmergencyContact/>} />
          <Route path="/emergency" element={<Emergency/>} />
          <Route path="/emergencynumber" element={<EmergencyNumbers/>} />
          </Routes>
      </div>
    </Router>
  );
};

export default App;