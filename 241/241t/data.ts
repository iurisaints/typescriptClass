class Data{
    dia: number
    mes: number
    ano: number

    constructor(dia: number, mes: number, ano: number){
        this.dia = dia
        this.mes = mes
        this.ano = ano
    }
}

let novaData = new Data(10, 6, 2023)
console.log(novaData);