class BankAccount {
  constructor() {
      this.saldo = 0; // Inisialisasi saldo awal
  }

  // Metode untuk menambah saldo
  deposit(amount) {
      return new Promise((resolve, reject) => {
          setTimeout(() => {
              if (isNaN(amount) || amount <= 0) {
                  reject(new Error("Jumlah tidak valid! Masukkan angka positif.")); // Menolak jika input tidak valid
              } else {
                  this.saldo += amount; // Tambah saldo
                  resolve(this.saldo); // Kembalikan saldo yang baru setelah deposit
              }
          }, 2000); // Simulasi penundaan 2 detik
      });
  }

  // Metode untuk mengurangi saldo
  withdraw(amount) {
      return new Promise((resolve, reject) => {
          setTimeout(() => {
              if (isNaN(amount) || amount <= 0) {
                  reject(new Error("Jumlah tidak valid! Masukkan angka positif.")); // Menolak jika input tidak valid
              }
              if (amount > this.saldo) {
                  reject(new Error("Saldo tidak mencukupi!")); // Menolak jika saldo tidak cukup
              } else {
                  this.saldo -= amount; // Kurangi saldo
                  resolve(this.saldo); // Kembalikan saldo yang baru setelah withdrawal
              }
          }, 2000); // Simulasi penundaan 2 detik
      });
  }
}
