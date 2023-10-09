import * as leitor from "readline-sync"

function main(){
    let nome = leitor.question("Insira seu nome: ")
    let OS = leitor.question("Insira seu OS: ")
    displayAlertMessage(nome, OS)
}

function displayAlertMessage(a, b): void{
    console.log(`There's a new sign-in request on ${a} for your Google Account ${b}.`);
    
}

main()