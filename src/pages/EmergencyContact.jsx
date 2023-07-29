import React, { useState, useEffect } from "react";

const EmergencyContact = () => {
  const [emergencyContacts, setEmergencyContacts] = useState([]);
  const [inputName, setInputName] = useState("");
  const [inputNumber, setInputNumber] = useState("");

  const handleChangeName = (e) => {
    setInputName(e.target.value);
  };

  const handleChangeNumber = (e) => {
    setInputNumber(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newContact = { name: inputName, number: inputNumber };
    setEmergencyContacts([...emergencyContacts, newContact]);
    setInputName("");
    setInputNumber("");
    // Simpan data darurat yang baru ditambahkan ke localStorage
    localStorage.setItem(
      "emergencyContacts",
      JSON.stringify([...emergencyContacts, newContact])
    );
  };

  useEffect(() => {
    const storedContacts = localStorage.getItem("emergencyContacts");
    if (storedContacts) {
      setEmergencyContacts(JSON.parse(storedContacts));
    }
  }, []);

  return (
    <div>
      <section class="bg-white dark:bg-gray-900">
        <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
          <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            Masukkan Kontak
          </h1>
          <p class="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">
            Masukkan Beberapa Kontak Yang Anda Percaya
          </p>
          <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <a
              href="/"
              class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
            >
              Kembali
              <svg
                class="w-3.5 h-3.5 ml-2"
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
              href="/emergency"
              class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
            >
              Halaman Pesanan
            </a>
          </div>
        </div>
      </section>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Nomor Yang Telah Tersimpan</h1>
            <p className="py-6 ml-5 mr-5">
              <ul>
                {emergencyContacts.map((contact, index) => (
                  <li key={index}>
                    {contact.name} - {contact.number}
                  </li>
                ))}
              </ul>
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Nama</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Masukkan Nama Penolong"
                    value={inputName}
                    onChange={handleChangeName}
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Nomor Handphone</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Nomor diawali dengan +62"
                    value={inputNumber}
                    onChange={handleChangeNumber}
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control mt-6">
                  <button type="submit" className="btn btn-primary">
                   Simpan
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmergencyContact;
