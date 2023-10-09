"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var leitor = require("readline-sync");
function main() {
    var num1;
    var num2;
    var num3;
    num1 = leitor.questionFloat("Insira o primeiro valor: ");
    num2 = leitor.questionFloat("Insira o segundo valor: ");
    num3 = leitor.questionFloat("Insira o terceiro valor: ");
    console.log(soma(num1, num2, num3));
    console.log(menos(num1, num2, num3));
    console.log(divisao(num1, num2, num3));
    console.log(multiplicacao(num1, num2, num3));
}
function soma(num1, num2, num3) {
    return "".concat(num1 + num2 + num3);
}
function menos(num1, num2, num3) {
    return "".concat(num1 - num2 - num3);
}
function divisao(num1, num2, num3) {
    return "".concat(num1 / num2 / num3);
}
function multiplicacao(num1, num2, num3) {
    return "".concat(num1 * num2 * num3);
}
main();
