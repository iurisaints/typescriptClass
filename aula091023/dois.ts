import * as leitor from "readline-sync"

function main(){
    let nome = leitor.question("Insira o nome do item: ")
    let valor = leitor.questionFloat("Insira o valor do item: ")
    let desconto = leitor.questionInt("Insira o desconto: ")
    let valorDesconto = ((100-desconto)/100)
    console.log(`O nome do item é: ${nome}`);
    console.log(`O valor do item é: ${valor}`);
    console.log(`O valor com desconto é: ${valor*valorDesconto}`);
}

main()