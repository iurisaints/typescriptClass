"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var leitor = require("readline-sync");
function main() {
    var adulto = leitor.questionInt("Insira a quantidade de adultos que existem na festa: ");
    var crianca = leitor.questionInt("Insira a quantidade de criancas que existem na festa: ");
    console.log("The total party size is:", calcula(adulto, crianca));
}
function calcula(adulto, crianca) {
    return adulto + crianca;
}
main();
