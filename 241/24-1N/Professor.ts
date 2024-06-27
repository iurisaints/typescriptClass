var leitor = require('readline-sync')

class Professor{
    nome: string
    idade: number
    ano_exp: number

    constructor(nome: string, idade: number, ano_exp: number){
        this.nome = nome
        this.idade = idade
        this.ano_exp = ano_exp
    }

    getProfessor(): void{
        console.log(`Nome: ${this.nome}, Idade: ${this.idade} e Tempo de Exp.: ${this.ano_exp}`)
    }

    setProfessor(): void{
        let nomeUpdate = leitor.question("Qual o nome do professor? ")
        let idadeUpdate = leitor.questionInt("Qual a idade do professor? ")
        let ano_expUpdate = leitor.questionInt("Qual o tempo de experiencia do professor? ")
        this.nome = nomeUpdate
        this.idade = idadeUpdate
        this.ano_exp = ano_expUpdate
    }
}

class Escola{
    prof: Professor
    nome_escola: string
    end_escola: string
    num_endereco: number

    constructor(prof: Professor, nome_escola: string, end_escola: string, num_endereco: number){
        this.prof = prof
        this.nome_escola = nome_escola
        this.end_escola = end_escola
        this.num_endereco = num_endereco
    }

    getEscola(): void{
        console.log(`Nome da Escola: ${this.nome_escola}, End. Escola: ${this.end_escola} n ${this.num_endereco}, Professor: ${this.prof.nome}`)
    }

    setEscola(): void{
        let atualizarProf = leitor.question("Você gostaria de atualizar as infos do professor? S p/ Sim e N p/ Não").toLowerCase()
        if(atualizarProf == "s"){
            this.prof.setProfessor()
            let arrayEscola = atualizarEscola()
            this.nome_escola = arrayEscola[0]
            this.end_escola = arrayEscola[1]
            this.num_endereco = arrayEscola[2]
        } else {
            let arrayEscola = atualizarEscola()
            this.nome_escola = arrayEscola[0]
            this.end_escola = arrayEscola[1]
            this.num_endereco = arrayEscola[2]
        }

        function atualizarEscola(): Array<any>{
            let nome_escolaUpdate = leitor.question('Qual o nome da escola? ')
            let end_escolaUpdate = leitor.question('Qual o endereço da escola? ')
            let num_enderecoUpdate = leitor.questionInt('E o número? ')
            let atualizacaoEscola = [nome_escolaUpdate, end_escolaUpdate, num_enderecoUpdate]
            return atualizacaoEscola
        }
    }
}

let menu: Boolean = true

let prof = new Professor("", 0, 0)
let escola = new Escola(prof, "", "", 0)

while(menu){
    let opcao = leitor.questionInt('Insira o numero da opcao desejada:\n 1 - Criar Professor \n 2 - Criar Escola \n 3 - Atualizar Professor \n 4 - Atualizar Escola \n 5 - Visualizar Professor \n 6 - Visualizar Escola \n 7 - Visualizar Prof. e Escola \n 0 - Sair \n Resposta: ')
    switch(opcao){
        case 1:
            prof.setProfessor()
            break
        case 2:
            escola.setEscola()
            break
        case 3:
            prof.setProfessor()
            break
        case 4:
            escola.setEscola()
            break
        case 5:
            prof.getProfessor()
            break
        case 6:
            escola.getEscola()
            break
        case 7:
            prof.getProfessor()
            escola.getEscola()
            break
        case 0:
            !menu
            process.exit(0)
    }
}