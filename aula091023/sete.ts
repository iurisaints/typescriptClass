import * as leitor from "readline-sync"

function main(){
    let horaHoje = leitor.questionFloat("Quanto tempo passou no telefone hoje? ")
    let horaOntem = leitor.questionFloat("Quanto tempo passou no telefone ontem? ")
    console.log(timeSpent(horaHoje, horaOntem))
}

function timeSpent(a, b): Boolean{
    return a > b    
}

main()