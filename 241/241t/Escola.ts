var leitor = require("readline-sync")

class Professor{
    nome: string
    idade: number
    ano_xp: number

    constructor(nome: string, idade: number, ano_xp: number){
        this.nome   = nome
        this.idade  = idade
        this.ano_xp = ano_xp
    }

    getProfessor(): void{
        console.log(`Olá, meu nome é ${this.nome}, tenho ${this.idade} anos e sou professor há ${this.ano_xp} anos`);
    }

    setProfessor(): void{
        let nomeUp = leitor.question("Qual o nome do professor? ")
        let idadeUp = leitor.questionInt("Qual a idade do professor? ")
        let ano_xpUp = leitor.questionInt("Qual o tempo de xp do professor? ")
        this.nome = nomeUp
        this.idade = idadeUp
        this.ano_xp = ano_xpUp
    }
}

class Escola{
    prof: Professor
    nomeEscola: string
    endereco: string
    num_end: number

    constructor(prof: Professor, nomeEscola: string, endereco: string, num_end: number){
        this.prof = prof
        this.nomeEscola = nomeEscola
        this.endereco = endereco
        this.num_end = num_end
    }

    getEscola(): void{
        console.log(`Nome Escola: ${this.nomeEscola}, Endereço: ${this.endereco}, ${this.num_end}, Professor: ${this.prof.nome}`);
    }

    setEscola(){
        let nomeUp = leitor.question("Qual o nome da escola? ")
        let enderecoUp = leitor.question("Qual o novo endereço? ")
        let num_endUp = leitor.questionInt("E o número? ")
        this.nomeEscola = nomeUp
        this.endereco = enderecoUp
        this.num_end = num_endUp
    }
}

let profNovo = new Professor("", 0, 0)
let escolaNovo = new Escola(profNovo, "", "", 0)

let menu = true
while(menu){

    let questao = leitor.questionInt("Escolha a opção: \n 1 - Cadastrar Prof., \n 2 - Cadastrar Escola, \n 3 - Atualizar Prof., \n 4 - Atualizar Escola, \n 5 - Visualizar Prof., \n 6 - Visualizar Escola, \n 0 - Sair \n Escreva a opção:")
    
    switch(questao){
        case 1:
            profNovo.setProfessor()
            break
        case 2:
            escolaNovo.setEscola()
            break
        case 3:
            profNovo.setProfessor()
            break
        case 4:
            escolaNovo.setEscola()
            break
        case 5:
            profNovo.getProfessor()
            break
        case 6:
            escolaNovo.getEscola()
            break
        case 0:
            !menu
            process.exit(0)
    }
}