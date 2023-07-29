import React, { useEffect, useState } from 'react';

const Emergency = () => {
  const [emergencyNumbers, setEmergencyNumbers] = useState([]);

  useEffect(() => {
    const storedNumbers = localStorage.getItem('emergencyNumbers');
    if (storedNumbers) {
      setEmergencyNumbers(JSON.parse(storedNumbers));
    }
  }, []);

  const handleSendEmergency = () => {
    const emergencyRecipients = emergencyNumbers;
    const message = 'Ini adalah pesan darurat! Saya membutuhkan bantuan segera. Lokasi saya:';
  
    // Mendapatkan koordinat geografis (latitude dan longitude) dari browser
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          const locationUrl = `https://www.google.com/maps?q=${latitude},${longitude}`;
  
          // Kirim pesan dan live location ke setiap nomor darurat
          emergencyRecipients.forEach((number) => {
            const whatsappUrl = `https://api.whatsapp.com/send?phone=${encodeURIComponent(
              number
            )}&text=${encodeURIComponent(message + ' ' + locationUrl)}`;
  
            // Membuka tautan WhatsApp di tab baru
            window.open(whatsappUrl, '_blank');
          });
  
          alert('Pesan darurat telah dikirim!');
        },
        (error) => {
          console.error('Gagal mendapatkan lokasi:', error);
          alert('Gagal mendapatkan lokasi, pesan darurat tidak dapat dikirim.');
        }
      );
    } else {
      alert('Geolokasi tidak didukung oleh peramban ini, pesan darurat tidak dapat dikirim.');
    }
  };
  

  return (
    <div>
      <h1>Halaman Emergency</h1>
      {/* Tampilkan nomor-nomor darurat yang sudah disimpan */}
      <ul>
        {emergencyNumbers.map((number, index) => (
          <li key={index}>{number}</li>
        ))}
      </ul>
      <button onClick={handleSendEmergency}>Kirim Pesan Darurat</button>
    </div>
  );
};

export default Emergency;
