const BankAccount = require('./bank_account');
const readline = require('readline');

let akun = new BankAccount();

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Fungsi untuk menambah saldo
function tambahSaldo() {
    rl.question("Masukkan jumlah yang ingin ditambahkan: ", (jumlah) => {
        akun.deposit(parseFloat(jumlah))
            .then(() => {
                console.log("Saldo berhasil ditambahkan.\n");
                showMenu(); // Kembali ke menu utama
            })
            .catch(error => {
                console.error(error.message);
                showMenu(); // Kembali ke menu utama jika error
            });
    });
}

// Fungsi untuk mengurangi saldo
function kurangiSaldo() {
    rl.question("Masukkan jumlah yang ingin dikurangi: ", (jumlah) => {
        akun.withdraw(parseFloat(jumlah))
            .then(() => {
                console.log("Saldo berhasil dikurangi.\n");
                showMenu(); // Kembali ke menu utama
            })
            .catch(error => {
                console.error(error.message);
                showMenu(); // Kembali ke menu utama jika error
            });
    });
}

// Fungsi untuk menampilkan menu utama
function showMenu() {
    console.log("1. Tambah Saldo");
    console.log("2. Kurangi Saldo");
    console.log("3. Keluar");
    rl.question("Pilih opsi: ", (choice) => {
        if (choice == '1') {
            tambahSaldo();
        } else if (choice == '2') {
            kurangiSaldo();
        } else if (choice == '3') {
            rl.close();
        } else {
            console.log("Opsi tidak valid.\n");
            showMenu();
        }
    });
}

console.log("Selamat datang di sistem bank sederhana!\n");
showMenu();
