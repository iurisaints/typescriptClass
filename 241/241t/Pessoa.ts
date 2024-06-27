interface Pessoa{
    nome: string
    cumprimentar(): void
}

class Pessoa implements Pessoa{
    nome: string
    idade: number

    constructor(nome: string, idade: number){
        this.idade = idade
        this.nome = nome
    }

    cumprimentar(): void{
        console.log(`Olá! Meu nome é ${this.nome}`);
    }
}

class Crianca extends Pessoa{
    cumprimentar(): void {
        console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos. Sou uma criança.`);
    }
}

class Adulto extends Pessoa{
    cumprimentar(): void {
        console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos. Sou um adulto.`);
    }
}

class Idoso extends Pessoa{
    cumprimentar(): void {
        console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos. Sou um idoso.`);
    }
}

let kid = new Crianca("Enzo", 7)
let adult = new Adulto("Wellington", 35)
let oldman = new Idoso("Dorival", 66)

kid.cumprimentar()
adult.cumprimentar()
oldman.cumprimentar()