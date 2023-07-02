export class ContaBancaria {
    numeroConta: string;
    saldo: number;
  
    constructor(numeroConta: string) {
      this.numeroConta = numeroConta;
      this.saldo = 0;
    }
  
    depositar(valor: number): void {
      if (valor > 0) {
        this.saldo += valor;
        console.log(`Depósito de R$ ${valor.toFixed(2)} realizado. Novo saldo: R$ ${this.saldo.toFixed(2)}`);
      } else {
        console.log('O valor do depósito deve ser maior que zero.');
      }
    }
  
    sacar(valor: number): void {
      if (valor <= this.saldo) {
        this.saldo -= valor;
        console.log(`Saque de R$ ${valor.toFixed(2)} realizado. Novo saldo: R$ ${this.saldo.toFixed(2)}`);
      } else {
        console.log('Saldo insuficiente para realizar o saque.');
      }
    }
  
    verificarSaldo(): void {
      console.log(`Saldo atual: R$ ${this.saldo.toFixed(2)}`);
    }
  }
  

  