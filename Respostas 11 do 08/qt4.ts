export class Prova {
    private respostas: string[] = [];
    private gabarito: string[] = [];

    constructor(){
        this.gabarito = ["A", "B", "C", "A", "B", "D", "B", "C", "A", "B", "C", "D", "A", "C", "D"];
    };

    respostaAluno(resposta: string): void{
        this.respostas.push(resposta)
    };

    acertos(): number{
        return this.respostas.filter((resposta, indice) => resposta === this.gabarito[indice]).length;
    };

    nota(): number{
        const acertos = this.acertos();
        return acertos * 0.5 + (15 - acertos);
    };

    maior(outraProva: Prova): number{
        const notaAtual = this.nota();
        const notaOutra = outraProva.nota();

        if(notaAtual > notaOutra){
            return notaAtual;
        } else {
            return notaOutra;
        }
    };
    }