// Teste do código
import { ContaBancaria } from "./conta";
import * as leitor from "readline-sync";

const contas: ContaBancaria[] = [];
let teste: boolean = true;

while(teste === true){
  const opcao = leitor.questionInt("Escolha a opção: \n1 - Criar Conta \n2 - Depositar \n3 - Sacar \n4 - Extrato \n5 - Sair\n");
  switch(opcao){
    case 1:
      const nomeConta = leitor.question("Digite o nome do proprietário da conta: ");
      const numeroConta = leitor.question("Digite o número da conta: ");
      const novaConta = new ContaBancaria(nomeConta, numeroConta);
      contas.push(novaConta);
      console.log("A conta número: ", numeroConta, " foi criada");
      break;

    case 2:
      const contaDeposito = leitor.question("Digite o número da conta: ");
      const contaEncontrarDeposito = contas.find(conta => conta.numeroConta === contaDeposito);
      if(contaEncontrarDeposito){
        const deposito = leitor.questionFloat("Ok, conta encontrada, digite o valor a depositar: ");
        contaEncontrarDeposito.depositar(deposito);
      } else {
        console.log("Conta não encontrada :/");
      }
      break;

    case 3:
      const contaSaque = leitor.question("Digite o número da conta: ");
      const contaEncontrarSaque = contas.find(conta => conta.numeroConta === contaSaque);
      if(contaEncontrarSaque){
        const saque = leitor.questionFloat("Ok, conta encontrada, digite o valor a retirar: ");
        contaEncontrarSaque.sacar(saque);
      } else {
        console.log("Conta não encontrada :/");
      }
      break;

    case 4:
      const contaExtrato = leitor.question("Digite o número da conta: ");
      const contaEncontrarExtrato = contas.find(conta => conta.numeroConta === contaExtrato);
      if(contaEncontrarExtrato){
        contaEncontrarExtrato.verificarSaldo();
      } else {
        console.log("Conta não encontrada :/");
      }
      break;
      
    case 5:
      console.log("Saindo... :D");
      teste = false;
      break;
}
}
