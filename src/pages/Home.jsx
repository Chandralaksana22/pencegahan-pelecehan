import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Halaman Utama</h1>
      {/* Tambahkan tautan menuju halaman input nomor darurat dan halaman emergency */}
      <p>
        <Link to="/input-nomor-darurat">Input Nomor Darurat</Link>
      </p>
      <p>
        <Link to="/emergency">Emergency</Link>
      </p>
    </div>
  );
};

export default Home;
