const BankAccount = require('./bank_account');
const readline = require('readline');

let akun = new BankAccount();

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Fungsi untuk menambah saldo
async function deposit() {
    try {
        const jumlah = await getInput("Masukkan jumlah yang ingin ditambahkan: ");
        await akun.deposit(parseFloat(jumlah)); // Tunggu sampai deposit selesai
        console.log("Saldo berhasil ditambahkan.\n");
    } catch (error) {
        console.error("Error:", error.message); // Tampilkan error di terminal
    } finally {
        showMenu(); // Kembali ke menu utama setelah selesai atau error
    }
}

// Fungsi untuk mengurangi saldo
async function withdraw() {
    try {
        const jumlah = await getInput("Masukkan jumlah yang ingin dikurangi: ");
        await akun.withdraw(parseFloat(jumlah)); // Tunggu sampai withdraw selesai
        console.log("Saldo berhasil dikurangi.\n");
    } catch (error) {
        console.error("Error:", error.message); // Tampilkan error di terminal
    } finally {
        showMenu(); // Kembali ke menu utama setelah selesai atau error
    }
}

// Fungsi untuk mendapatkan input dari pengguna
function getInput(promptText) {
    return new Promise((resolve) => {
        rl.question(promptText, (input) => {
            resolve(input);
        });
    });
}

// Fungsi untuk menampilkan menu utama
async function showMenu() {
    try {
        const choice = await getInput("\n1. Tambah Saldo\n2. Kurangi Saldo\n3. Keluar\nPilih opsi: ");
        if (choice == '1') {
            await deposit();
        } else if (choice == '2') {
            await withdraw();
        } else if (choice == '3') {
            rl.close();
        } else {
            console.log("Opsi tidak valid.");
            showMenu(); // Tampilkan ulang menu jika opsi tidak valid
        }
    } catch (error) {
        console.error("Error:", error.message); // Tangani jika ada error tak terduga
    }
}

// Mulai aplikasi
console.log("Selamat datang di sistem bank sederhana!\n");
showMenu();
