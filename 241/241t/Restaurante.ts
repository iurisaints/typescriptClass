var leitor = require("readline-sync")

class Cozinheiro{
    nome: string
    idade: number
    ano_xp: number

    constructor(nome: string, idade: number, ano_xp: number){
        this.nome   = nome
        this.idade  = idade
        this.ano_xp = ano_xp
    }

    getCozinheiro(): void{
        console.log(`Olá, meu nome é ${this.nome}, tenho ${this.idade} anos e sou chef há ${this.ano_xp} anos`);
    }

    setCozinheiro(): void{
        let nomeUp = leitor.question("Qual o nome do cozinheiro? ")
        let idadeUp = leitor.questionInt("Qual a idade do cozinheiro? ")
        let ano_xpUp = leitor.questionInt("Qual o tempo de xp do cozinheiro? ")
        this.nome = nomeUp
        this.idade = idadeUp
        this.ano_xp = ano_xpUp
    }
}

class Restaurante{
    cz: Cozinheiro
    nome: string
    endereco: string
    num_end: number

    constructor(cz: Cozinheiro, nome: string, endereco: string, num_end: number){
        this.cz = cz
        this.nome = nome
        this.endereco = endereco
        this.num_end = num_end
    }

    getRestaurante(): void{
        console.log(`Nome Restaurante: ${this.nome}, Endereço: ${this.endereco}, ${this.num_end}, Chef: ${this.cz.nome}`);
    }

    setRestaurante(){
        this.cz.setCozinheiro()
        let nomeUp = leitor.question("Qual o nome do restaurante? ")
        let enderecoUp = leitor.question("Qual o novo endereço? ")
        let num_endUp = leitor.questionInt("E o número? ")
        this.nome = nomeUp
        this.endereco = enderecoUp
        this.num_end = num_endUp
    }
}

let chefTeste = new Cozinheiro("Teste", 19, 4)
let restTeste = new Restaurante(chefTeste, "Restaurante Teste", "Rua dos Testes", 500)

restTeste.getRestaurante()
restTeste.setRestaurante()
restTeste.getRestaurante()

