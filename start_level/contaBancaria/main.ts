  // Teste do código
  import { ContaBancaria } from "./conta";
  const minhaConta = new ContaBancaria('123456');
  minhaConta.depositar(1000);
  minhaConta.sacar(500);
  minhaConta.verificarSaldo();