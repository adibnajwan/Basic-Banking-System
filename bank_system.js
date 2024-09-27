let akun = new BankAccount(); // Membuat objek BankAccount

function tambahSaldo() {
    var jumlah = prompt("Masukkan jumlah yang ingin ditambahkan:");
    try {
        let newSaldo = akun.deposit(parseFloat(jumlah));
        document.getElementById("saldo").innerText = `Saldo: Rp${newSaldo}`;
    } catch (error) {
        alert(error.message);
    }
}

function kurangiSaldo() {
    var jumlah = prompt("Masukkan jumlah yang ingin dikurangi:");
    try {
        let newSaldo = akun.withdraw(parseFloat(jumlah));
        document.getElementById("saldo").innerText = `Saldo: Rp${newSaldo}`;
    } catch (error) {
        alert(error.message);
    }
}

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
