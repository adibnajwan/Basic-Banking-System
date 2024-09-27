// Variabel untuk saldo awal
var saldo = 0;

// Fungsi untuk menambah saldo
function tambahSaldo() {
  var jumlah = prompt("Masukkan jumlah yang ingin ditambahkan:");
  if (jumlah == "" || isNaN(jumlah) || jumlah <= 0) {
    alert("Jumlah tidak valid!");
  } else {
    saldo += parseFloat(jumlah);
    alert("Saldo berhasil ditambahkan! Saldo saat ini: Rp" + saldo);
    document.getElementById("saldo").innerText = "Saldo: Rp" + saldo;
  }
}

// Fungsi untuk mengurangi saldo
function kurangiSaldo() {
  var jumlah = prompt("Masukkan jumlah yang ingin dikurangi:");
  if (jumlah == "" || isNaN(jumlah) || jumlah <= 0 || jumlah > saldo) {
    alert("Jumlah tidak valid atau saldo tidak cukup!");
  } else {
    saldo -= parseFloat(jumlah);
    alert("Saldo berhasil dikurangi! Saldo saat ini: Rp" + saldo);
    document.getElementById("saldo").innerText = "Saldo: Rp" + saldo;
  }
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
