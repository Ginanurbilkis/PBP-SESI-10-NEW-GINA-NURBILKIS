const mahasiswaNim = '2022004010' ;
const updateData = {
    Nama   : 'Gina Nurbilkis',
    Gender : 'P',
    Prodi  : 'TI',
    Alamat : 'Cigombong'
};

fetch('http://localhost:3000/mahasiswa/${mahasiswaNim}', {
    method : 'PUT',
    headers:{
        'Content-Type': 'Application/json'
    },
    body   : JSON.stringify(updateData)
})
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error ('Error:', error));

// METHOD POST
const newData = {
    nim: "2022004098",
    nama: "Nadia Sari",
    gender: "P",
    prodi: "TI",
    alamat: "Jampang",
  };
  
  fetch("http://localhost:3000/mahasiswa", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newData),
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error("Error:", error));

    // METHOD DELETE
const nimToDelete = "2022004023";

fetch(`http://localhost:3000/mahasiswa/${nimToDelete}`, {
  method: "DELETE",
  headers: {
    "Content-Type": "application/json",
  },
})
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error("Error:", error));

// DOSEN
// METHOD PUT
const dosenNip = "123";
const updatedDosenData = {
  nama: "Anggun Fergina,S.Kom.,M.Kom",
  gender: "P",
  alamat: "Jawa Tengah",
};

fetch(`http://localhost:3000/dosen/${dosenNip}`, {
  method: "PUT",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(updatedDosenData),
})
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error("Error:", error));

  // METHOD POST
const newDosenData = {
    nip: "234",
    nama: "Hermanto M.Kom",
    gender: "L",
    alamat: "Situ Gunung",
  };
  
  fetch("http://localhost:3000/dosen", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newDosenData),
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error("Error:", error));

    // METHOD DELETE
const nipToDelete = "432";

fetch(`http://localhost:3000/dosen/${nipToDelete}`, {
  method: "DELETE",
  headers: {
    "Content-Type": "application/json",
  },
})
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error("Error:", error));
  

  