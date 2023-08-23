import { Aluno } from "./qt1";

const aluno = new Aluno(10, "Teste", 10, 9, 8);

console.log(aluno.media());

if(aluno.media() >= 7){
    console.log("Aprovado");
} else {
    console.log("Reprovado");
}
console.log(aluno);

console.log(aluno.final());

