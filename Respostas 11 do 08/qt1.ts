export class Aluno{
    private matricula: number;
    private nome: string;
    private nota1: number;
    private nota2: number;
    private notaTrabalho: number;

    constructor(matricula: number, nome: string, nota1: number, nota2: number, notaTrabalho: number){
        this.matricula = matricula;
        this.nome = nome;
        this.nota1 = nota1;
        this.nota2 = nota2;
        this.notaTrabalho = notaTrabalho;
    };

    media(): number{
        return (this.nota1 + this.nota2) / 2;
    };
    final(): number{
        return (this.nota1 + this.nota2 + this.notaTrabalho) / 3;
    };
}
