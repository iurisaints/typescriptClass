import { Prova } from "./qt4";
import * as leitor from "readline-sync"

const prova = new Prova();

for (let i = 1; i < 15; i++) {
  const resposta = leitor.question("Resposta da questão " + (i) + ": ").toUpperCase();
  prova.respostaAluno(resposta);
}

console.log(prova.acertos());
console.log(prova.nota());

const outraProva = new Prova();
for (let i = 1; i < 15; i++) {
    const resposta = leitor.question("Resposta da questão " + (i) + ": ");
    outraProva.respostaAluno(resposta);
  }
console.log(outraProva.acertos());
console.log(outraProva.nota());

console.log(prova.maior(outraProva));