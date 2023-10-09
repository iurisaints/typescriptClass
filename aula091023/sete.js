"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var leitor = require("readline-sync");
function main() {
    var horaHoje = leitor.questionFloat("Quanto tempo passou no telefone hoje? ");
    var horaOntem = leitor.questionFloat("Quanto tempo passou no telefone ontem? ");
    console.log(timeSpent(horaHoje, horaOntem));
}
function timeSpent(a, b) {
    return a > b;
}
main();
