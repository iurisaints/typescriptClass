import * as leitor from "readline-sync"

function main() {
    //bloco de variáveis
    let salarioBruto: Number;
    let salarioINSS: Number;
    let salarioLiquido: Number;

    salarioBruto = leitor.questionFloat("Insira o valor do seu salário bruto: ");

    salarioINSS = INSS(salarioBruto)
    salarioLiquido = IRRF(salarioINSS)

    console.log(`Seu salário é: ${salarioBruto}`);
    console.log(`O valor com o desconto do INSS é: ${salarioINSS}`);
    console.log(`Seu salário líquido é: ${salarioLiquido}`);

}

//Função para cálculo de INSS com base no salário bruto
function INSS(salario: Number): Number {
    if(salario <= 1320){
        return salario * 0.925
    } else if(salario > 1319 && salario <= 2572){
        return salario * 0.91
    } else if(salario > 2572 && salario <= 3856){
        return salario * 0.88
    } else if (salario > 3856){
        return salario * 0.86
    } else {
        console.log("Valor inválido");
        return 0
    }
    
}

//Função para cálculo de IRRF com base no salário com o INSS descontado
function IRRF(salario: Number): Number {
    if(salario <= 2112){
        return salario
    } else if (salario > 2112 && salario <= 2826){
        return salario * 0.925
    } else if (salario > 2826 && salario <= 3751){
        return salario * 0.85
    } else if (salario > 3751 && salario <= 4664){
        return salario * 0.785
    } else if (salario > 4664){
        return salario * 0.725
    } else {
        console.log("Valor inválido");
        return 0
    }
}

main()