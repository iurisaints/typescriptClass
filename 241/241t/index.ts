var readlineSync = require('readline-sync')

interface Humano{
    nome: string
    piscarOlhos(): void
}

class Carro{
    rodas: number
    motor: number
    cor: string
    modelo: string
    marca: string
    km: number

    constructor(rodas: number, motor: number, cor: string, modelo: string, marca: string, km: number){
        this.rodas  = rodas
        this.motor  = motor
        this.cor    = cor
        this.modelo = modelo
        this.marca  = marca
        this.km     = km
    }

    acelerar(){
        console.log(`O ${this.modelo} chegou a ${this.km} km/h`)
    }

    dirigir(){
        console.log(`Estou dirigindo meu ${this.marca} ${this.modelo}`);
    }
}

var rodas: number = Number(readlineSync.question("Qual o aro da roda do carro?"))
var motor: number = Number(readlineSync.question("Qual o motor do carro?"))
var cor: string = readlineSync.question("Qual a pintura do carro?")
var modelo: string = readlineSync.question("Qual o modelo do carro?")
var marca: string = readlineSync.question("Qual a marca do carro?")
var km: number = Number(readlineSync.question("Qual o km máximo do carro?"))

const novoCarro = new Carro(rodas, motor, cor, modelo, marca, km)