import React, { useState, useEffect } from 'react';

const EmergencyContact = () => {
  const [emergencyNumbers, setEmergencyNumbers] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmergencyNumbers([...emergencyNumbers, inputValue]);
    setInputValue('');
  };

  // Menyimpan data ke localStorage setelah emergencyNumbers berubah
  useEffect(() => {
    localStorage.setItem('emergencyNumbers', JSON.stringify(emergencyNumbers));
  }, [emergencyNumbers]);

  return (
    <div>
      <h1>Halaman Input Nomor Darurat</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={inputValue} onChange={handleChange} />
        <button type="submit">Simpan</button>
      </form>
      {/* Tampilkan nomor darurat yang sudah disimpan */}
      <ul>
        {emergencyNumbers.map((number, index) => (
          <li key={index}>{number}</li>
        ))}
      </ul>
    </div>
  );
};

export default EmergencyContact;
