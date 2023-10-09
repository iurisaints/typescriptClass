import * as leitor from "readline-sync"

function main(){
    let num1: Number;
    let num2: Number;
    let num3: Number;
    
    num1 = leitor.questionFloat("Insira o primeiro valor: ")
    num2 = leitor.questionFloat("Insira o segundo valor: ")
    num3 = leitor.questionFloat("Insira o terceiro valor: ")

    console.log(soma(num1, num2, num3));
    console.log(menos(num1, num2, num3));
    console.log(divisao(num1, num2, num3));
    console.log(multiplicacao(num1, num2, num3));

}

function soma(num1, num2, num3): String{
    return `${num1 + num2 + num3}`
}

function menos(num1, num2, num3): String{
    return `${num1 - num2 - num3}`
}

function divisao(num1, num2, num3): String{
    return `${num1 / num2 / num3}`
}

function multiplicacao(num1, num2, num3): String{
    return `${num1 * num2 * num3}`
}

main()