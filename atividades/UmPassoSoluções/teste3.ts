import { EmpDev } from "./3";
import * as leitor from "readline-sync";

const nomeEmpresa = leitor.question("Digite o nome da empresa: ");
const enderecoEmpresa = leitor.question("Digite o endereço da empresa: ");
const empresa = new EmpDev(nomeEmpresa, enderecoEmpresa);

let opcao: number;
let menu: boolean = true;

while(menu){
    console.log("1 - Add Funcionario\n2 - Remover Funcionario\n3 - Exibir Infos\n0 - Sair!");

    opcao = leitor.questionInt("Digite o numero da opção: ");
    
    switch(opcao){
        case 1:
            const nomeFuncionario = leitor.question("Digite o nome do funcionário: ");
            const cargoFuncionario = leitor.question("Digite o cargo do funcionário: ");
            empresa.addFuncionario(nomeFuncionario, cargoFuncionario);
            console.log("Funcionário adicionado com sucesso!");
            break;
        case 2:
            const nomeRemove = leitor.question("Digite o nome do funcionário que será demitido: ");
            empresa.removerFuncionario(nomeRemove);
            console.log("Funcionário removido com sucesso!");
            break;
        case 3:
            empresa.exibirInfos();
            break;
        case 0:
            console.log("Saindo...");
            menu = false;
            break;
        default:
            console.log("Opção inválida, tente novamente.");
    }
}
