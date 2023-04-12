// membuat list data siswa
var siswa = [
    { nama: "Aliya Cisya Rani", status: 0, alasan: "to go to her family's funeral" },
    { nama: "Annisya Zahro Firdausa", status: 0, alasan: "returned to her hometown" },
    { nama: "Attala Bino Bagaskoro Subroto", status: 0, alasan: "returned to his hometown" },
    { nama: "Dewi Farisca Ammara", status: 0, alasan: "returned to her hometown" },
    { nama: "Dhimas Mohamad Reza Purwanto Putra", status: 1 },
    { nama: "Filipi Jhonatan Partogi Situmorang", status: 1 },
    { nama: "Gabriel Pindota Surbakti", status: 0, alasan: "returned to her hometown" },
    { nama: "Muhammad Abror Anand Noorsy", status: 0, alasan: "returned to his hometown" },
    { nama: "Muhammad Hisyam Fadhilah", status: 0, alasan: "go to Djuanda" },
    { nama: "Muhammad Raffi Sanjaya", status: 0, alasan: "escort parents to apply for visa" },
    { nama: "Naila Zaidati Al Arifi", status: 0, alasan: "returned to her hometown" },
    { nama: "Novri Ayu Lestari", status: 0, alasan: "waiting for the postoperative reaction (tentative)" },
    { nama: "Putri Salma Ramadhany", status: 0, alasan: "returned to her hometown" },
    { nama: "Rahma Nuraini Wardani", status: 0, alasan: "family events" },
    { nama: "Reno Apriliyandi", status: 1 },
    { nama: "Sabrina Nasywa Naratasyah", status: 0, alasan: "returned to her hometown" },
    { nama: "Yulia Melyanda Sim", status: 0, alasan: "have another meeting at Jakarta" }
  ];
  
  // menghitung jumlah siswa yang hadir
  var jumlah_hadir = siswa.filter(function (value) {
    return value.status === 1;
  }).length;
  
  // menampilkan hasil
  document.getElementById("jumlah_hadir").innerHTML = jumlah_hadir;
  
  // menampilkan data siswa
  for (var i = 0; i < siswa.length; i++) {
    var nama_siswa = siswa[i].nama;
    var status_siswa = siswa[i].status;
    var alasan_siswa = siswa[i].alasan ? siswa[i].alasan : "";
  
    var keterangan = status_siswa === 1 ? "Attend" : "No Attend";
    keterangan += " (" + alasan_siswa + ")";
  
    var item = "<li>" + nama_siswa + ": " + keterangan + "</li>";
  
    if (status_siswa === 1) {
      document.getElementById("siswa_hadir").innerHTML += item;
    } else {
      document.getElementById("siswa_tidak_hadir").innerHTML += item;
    }
  }
  