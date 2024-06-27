class Chef{
    nome: string
    idade: number
    ano_exp: number

    constructor(nome: string, idade: number, ano_exp: number){
        this.nome = nome
        this.idade = idade
        this.ano_exp = ano_exp
    }
}

class Restaurante{
    chef: Chef
    nome_res: string
    end_res: string
    num_end: number

    constructor(chef: Chef, nome_res: string, end_res: string, num_end: number){
        this.chef = chef
        this.nome_res = nome_res
        this.end_res = end_res
        this.num_end = num_end
    }

    apresentacaoRest(): void{
        console.log(`Olá, somos o restaurante ${this.nome_res} e nosso chef é ${this.chef.nome}`)   
    }
}

let cozinheiro = new Chef("Rogerio", 52, 32)

let restaurante = new Restaurante(cozinheiro, "Prato Fino", "Rua dos Restaurantes", 100)

restaurante.apresentacaoRest()