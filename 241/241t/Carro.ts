let leitor = require('readline-sync')

export interface Carro{
    marca: string
    km: number
    tanque: number

    getCarro(): void
    setCarro(): void
    andar(): void
    obterGasolina(): number
    abastecer(): void
}

export class Carro implements Carro{
    public marca: string
    public km: number
    public tanque: number

    constructor(marcaCarro: string, kmCarro: number, tanqueCarro: number){
        this.marca = marcaCarro
        this.km = kmCarro
        this.tanque = tanqueCarro
    }
    //esse método serve para mostrar os dados do objeto
    public getCarro(): void{
        console.log(`Marca do Carro: ${this.marca}, Kilometragem: ${this.km}, Tanque de Gasolina: ${this.tanque}`)
    }
    //esse método serve para editar os dados do objeto
    public setCarro(): void{
        let marcaCarro = leitor.question("Insira a marca do carro: ")
        let kmCarro = leitor.questionInt("Insira a kilometragem por litro: ")
        let tanqueCarro = leitor.questionInt("Insira a quantidade de gasolina no tanque: ")

        if(marcaCarro == ""){
            this.marca = this.marca
        } else {
            this.marca = marcaCarro
        }

        if(kmCarro == null){
            this.km = this.km
        } else {
            this.km = kmCarro
        }

        if(tanqueCarro == null){
            this.tanque = this.tanque
        } else {
            this.tanque = tanqueCarro
        }
    }
    //esse método serve para calcular a viagem em relação a gasolina
    public andar(): void{
        let distanciaViagem = leitor.questionInt("Insira a distância a ser percorrida: ")
        let validacaoViagem = this.tanque - (distanciaViagem / this.km)

        if(validacaoViagem < 0){
            console.log("Você não pode completar essa viagem.")
        } else {
            this.tanque -= validacaoViagem
            console.log(`Você percorreu ${distanciaViagem} km e tem ${this.tanque} litros`)
        }
    }
    //esse método serve para imprimir a quantidade de gasolina no tanque
    public obterGasolina(): number{
        return this.tanque
    }
    //esse método serve para adicionar gasolina no tanque
    public abastecer(): void{
        let frentista = leitor.questionInt("Quantos litros vai abastecer hoje, chefia?: ")
        this.tanque += frentista
        console.log(`Você abasteceu ${frentista} litros e tem ${this.tanque} litros no tanque`)
    }

}