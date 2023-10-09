"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var leitor = require("readline-sync");
function main() {
    var nome = leitor.question("Insira seu nome: ");
    var OS = leitor.question("Insira seu OS: ");
    displayAlertMessage(nome, OS);
}
function displayAlertMessage(a, b) {
    console.log("There's a new sign-in request on ".concat(a, " for your Google Account ").concat(b, "."));
}
main();
