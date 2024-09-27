class BankAccount {
  constructor() {
      this.saldo = 0;
  }

  deposit(amount) {
      if (isNaN(amount) || amount <= 0) {
          throw new Error("Jumlah tidak valid! Masukkan angka positif.");
      }
      this.saldo += amount;
      console.log(`Saldo berhasil ditambahkan! Saldo saat ini: Rp${this.saldo}`);
      return this.saldo; // Kembalikan saldo saat ini
  }

  withdraw(amount) {
      if (isNaN(amount) || amount <= 0) {
          throw new Error("Jumlah tidak valid! Masukkan angka positif.");
      }
      if (amount > this.saldo) {
          throw new Error("Saldo tidak mencukupi!");
      }
      this.saldo -= amount;
      console.log(`Saldo berhasil dikurangi! Saldo saat ini: Rp${this.saldo}`);
      return this.saldo; // Kembalikan saldo saat ini
  }
}
