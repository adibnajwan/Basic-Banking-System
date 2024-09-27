class BankAccount {
    constructor() {
      this.saldo = 0;
    }
  
    // Menambah saldo dengan validasi dan error handling
    deposit(amount) {
      try {
        if (isNaN(amount) || amount <= 0) {
          throw new Error("Jumlah tidak valid! Masukkan angka positif.");
        }
        console.log("Proses penambahan saldo...");
        setTimeout(() => {
          this.saldo += amount;
          console.log(`Saldo berhasil ditambahkan! Saldo saat ini: Rp${this.saldo}`);
        }, 2000); // Transaksi terjadi dalam 2 detik
      } catch (error) {
        console.error("Error pada deposit:", error.message);
        alert(error.message);
      }
    }
  
    // Mengurangi saldo dengan validasi dan error handling
    withdraw(amount) {
      try {
        if (isNaN(amount) || amount <= 0) {
          throw new Error("Jumlah tidak valid! Masukkan angka positif.");
        }
        if (amount > this.saldo) {
          throw new Error("Saldo tidak mencukupi!");
        }
        console.log("Proses pengurangan saldo...");
        setTimeout(() => {
          this.saldo -= amount;
          console.log(`Saldo berhasil dikurangi! Saldo saat ini: Rp${this.saldo}`);
        }, 2000); // Transaksi terjadi dalam 2 detik
      } catch (error) {
        console.error("Error pada withdraw:", error.message);
        alert(error.message);
      }
    }
  }
  