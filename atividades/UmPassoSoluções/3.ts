/*Crie uma classe "EmpresaDesenvolvimento" que representa uma empresa de desenvolvimento de software. A classe deve possuir as propriedades nome, endereço e funcionários, onde "funcionários" é um array de objetos representando os funcionários da empresa. Adicione métodos para adicionar funcionários, remover funcionários e exibir informações da empresa.*/

class Funcionario{
    nome: string;
    cargo: string;
    constructor(nome: string, cargo: string){
        this.nome = nome;
        this.cargo = cargo;
    }
}

export class EmpDev{
    nomeEmpresa: string;
    endereco: string;
    funcionarios: Funcionario[];

    constructor(nomeEmpresa: string, endereco: string){
        this.nomeEmpresa = nomeEmpresa;
        this.endereco = endereco;
        this.funcionarios = [];
    }

    addFuncionario(nome: string, cargo: string): void{
        const novoFuncionario = new Funcionario(nome, cargo);
        this.funcionarios.push(novoFuncionario);
    }

    removerFuncionario(nome: string): void{
        this.funcionarios = this.funcionarios.filter(funcionario => funcionario.nome !== nome);
    }

    exibirInfos(): void{
        console.log(`Nome da Empresa: ${this.nomeEmpresa}`);
        console.log(`Endereço da Empresa: ${this.endereco}`);
        console.log("Funcionarios:");
        this.funcionarios.forEach(funcionario =>{
            console.log(`Nome: ${funcionario.nome} e Cargo ${funcionario.cargo}`);
        });
    }
}
