import React, { useEffect, useState } from "react";

const Emergency = () => {
  const [emergencyContacts, setEmergencyContacts] = useState([]);
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [locationObtained, setLocationObtained] = useState(false);

  useEffect(() => {
    const storedContacts = localStorage.getItem("emergencyContacts");
    if (storedContacts) {
      setEmergencyContacts(JSON.parse(storedContacts));
    }
  }, []);

  useEffect(() => {
    const watchId = navigator.geolocation.watchPosition(
      (position) => {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
        setLocationObtained(true); // Set the flag to indicate location is obtained
      },
      (error) => {
        console.error("Gagal mendapatkan lokasi:", error);
      }
    );

    return () => {
      navigator.geolocation.clearWatch(watchId);
    };
  }, []);

  const handleSendEmergency = (contact) => {
    if (!locationObtained) {
      alert("Tunggu sebentar hingga lokasi selesai diperbarui.");
      return;
    }

    const message =
      "Ini adalah pesan darurat! Saya membutuhkan bantuan segera. Lokasi saya:";
    const locationUrl = `https://www.google.com/maps?q=${latitude},${longitude}`;
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${encodeURIComponent(
      contact.number
    )}&text=${encodeURIComponent(message + " " + locationUrl)}`;

    window.open(whatsappUrl, "_blank");

    alert("Pesan darurat telah dikirim!");
  };

  return (
    <div>
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            Pilih Bantuan
          </h1>
          <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">
            Pilih Bantuan Maka Akan Diarahkan Ke Halaman Selanjutnya
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <a
              href="/"
              className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
            >
              Kembali
              <svg
                className="w-3.5 h-3.5 ml-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
            <a
              href="/input-nomor-darurat"
              className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
            >
              Halaman Masukkan Pesanan
            </a>
          </div>
        </div>
      </section>

      <section className="bg-white dark:bg-gray-900 bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern.svg')] dark:bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern-dark.svg')]">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 z-10 relative">
          <div className="grid grid-cols-2 lg:grid-cols-4">
            {emergencyContacts.map((contact, index) => (
              <div key={index}>
                <button
                  className="btn btn-outline btn-success mb-2"
                  onClick={() => handleSendEmergency(contact)}
                >
                  {contact.name}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Emergency;
