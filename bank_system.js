let akun = new BankAccount(); // Membuat objek BankAccount

// Fungsi untuk menambah saldo dari UI
function tambahSaldo() {
  var jumlah = prompt("Masukkan jumlah yang ingin ditambahkan:");
  akun
    .deposit(parseFloat(jumlah))
    .then((newSaldo) => {
      document.getElementById("saldo").innerText = `Saldo: Rp${newSaldo}`;
      alert(`Saldo berhasil ditambahkan! Saldo saat ini: Rp${newSaldo}`);
    })
    .catch((error) => {
      alert(error.message); // Menampilkan pesan error
    });
}

// Fungsi untuk mengurangi saldo dari UI
function kurangiSaldo() {
  var jumlah = prompt("Masukkan jumlah yang ingin dikurangi:");
  akun
    .withdraw(parseFloat(jumlah))
    .then((newSaldo) => {
      document.getElementById("saldo").innerText = `Saldo: Rp${newSaldo}`;
      alert(`Saldo berhasil dikurangi! Saldo saat ini: Rp${newSaldo}`);
    })
    .catch((error) => {
      alert(error.message); // Menampilkan pesan error
    });
}

// Fungsi login
function login() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  if (username === "adib" && password === "123") {
    document.getElementById("login-section").style.display = "none";
    document.getElementById("bank-section").style.display = "block";
  } else {
    alert("Username atau password salah!");
  }
}
