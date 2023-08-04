import React from "react";
import { Link } from "react-router-dom";

const EmergencyNumbers = () => {
  const emergencyNumbers = [
    { name: "Polisi", number: "110" },
    { name: "Ambulans", number: "118" },
    { name: "Pemadam Kebakaran", number: "113" },
    { name: "Layanan Darurat", number: "112" },
  ];

  const handleCall = (number) => {
    window.location.href = `tel:${number}`;
  };

  return (
    <div>
     <section class="bg-white dark:bg-gray-900">
        <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
          <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            Nomor Darurat Indonesia
          </h1>
          <p class="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">
            Daftar Nomor Darurat Indonesia
          </p>
          <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <Link to="/">
            <div
              href="#"
              class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
            >
              Kembali
            </div>
            </Link>
          </div>
        </div>
      </section>
      <section className="bg-white dark:bg-gray-900 bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern.svg')] dark:bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern-dark.svg')]">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 z-10 relative">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {emergencyNumbers.map((emergency) => (
              <div  key={emergency.number}>
                <button
                  className="btn btn-outline btn-success w-full mb-2"
                  onClick={() => handleCall(emergency.number)}
                >
                  {emergency.name} - {emergency.number}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default EmergencyNumbers;
