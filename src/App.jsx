import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import EmergencyContact from './pages/EmergencyContact';
import Emergency from './pages/Emergency';

const App = () => {
  return (
    <Router>
      <div>
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
