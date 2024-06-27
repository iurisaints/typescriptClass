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
        console.log(`Nome: ${this.nome} \nIdade: ${this.idade} \nTempo Exp.: ${this.ano_xp}`);
    }

    setProfessor(): void{
        let nomeUpdate = leitor.question("Qual o nome do professor? ")
        let idadeUpdate = leitor.questionInt("Qual a idade do professor? ")
        let anoxpUpdate = leitor.questionInt("Qual o tempo de exp. do professor? ")
        this.nome = nomeUpdate
        this.idade = idadeUpdate
        this.ano_xp = anoxpUpdate
    }
}

class Escola{
    prof: Professor
    nome: string
    endereco: string
    num_end: number

    constructor(prof: Professor, nome: string, endereco: string, num_end: number){
        this.prof = prof
        this.nome = nome
        this.endereco = endereco
        this.num_end = num_end
    }

    getEscola(): void{
        console.log(`Nome da Escola: ${this.nome} \nNome do Professor ${this.prof.nome} \nEndereco: ${this.endereco} nº ${this.num_end}`);
    }

    setEscola(): void{
        let profOuNao = leitor.question("Você gostaria de modificar o cadastro do professor? s para sim e n para nao: ").toLowerCase()
        if(profOuNao == "s"){
            this.prof.setProfessor()
            // Indice 0: Nome da Escola
            // Indice 1: Endereço da Escola
            // Indice 2: Número do Endereço da Escola
            let arrayInfosCompleto = alterarEscola()
            this.nome = arrayInfosCompleto[0]
            this.endereco = arrayInfosCompleto[1]
            this.num_end = arrayInfosCompleto[2]
        } else {
            let arrayInfosCompleto = alterarEscola()
            this.nome = arrayInfosCompleto[0]
            this.endereco = arrayInfosCompleto[1]
            this.num_end = arrayInfosCompleto[2]
        }

        function alterarEscola(): Array<any>{
            let nomeEscolaUpdate = leitor.question("Insira o nome da Escola: ")
            let enderecoUpdate = leitor.question("Insira a rua/avenida da escola: ")
            let numeroUpdate = leitor.questionInt("Insira o numero da escola: ")

            let arrayInfosEscola: Array<any> = [nomeEscolaUpdate, enderecoUpdate, numeroUpdate]

            return arrayInfosEscola
        }
    }

    /*
    Forma funcional mas mais inciante:
    setEscola(): void{
        this.prof.setProfessor()

        let nomeEscolaUpdate = leitor.question("Insira o nome da Escola: ")
        let enderecoUpdate = leitor.question("Insira a rua/avenida da escola: ")
        let numeroUpdate = leitor.questionInt("Insira o numero da escola: ")
        
        this.nome = this.nomeEscolaUpdate
        this.endereco = this.enderecoUpdate
        this.num_end = this.numeroUpdate
    }
    */
}

let profObjeto = new Professor("", 0, 0)
let escolaObjeto = new Escola(profObjeto, "", "", 0)

let enquanto: Boolean = true

while(enquanto){
    let opt = leitor.questionInt(`
        _______________________________\n
        1 - Criar Professor
        2 - Criar Escola
        3 - Modificar Professor
        4 - Modificar Escola
        5 - Visualizar Professor
        6 - Visualizar Escola
        0 - Sair
        Resposta: 
        `)
    switch(opt){
        case 1:
            profObjeto.setProfessor()
            break
        case 2:
            escolaObjeto.setEscola()
            break
        case 3:
            profObjeto.setProfessor()
            break
        case 4:
            escolaObjeto.setEscola()
            break
        case 5:
            profObjeto.getProfessor()
            break
        case 6:
            escolaObjeto.getEscola()
            break
        case 0:
            !enquanto
            process.exit(0)
    }

}