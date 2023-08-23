export class Voo {
    private passageiros: boolean[] = []
    public numeroVoo: string;
    public data: string;
    constructor(numeroVoo: string, data: string) {
        this.passageiros = new Array(100).fill(false);
        this.numeroVoo = numeroVoo;
        this.data = data;
    };

    proximoLivre(): number {
        for (let i = 0; i < this.passageiros.length; i++) {
            if (!this.passageiros[i]) {
                return i + 1;
            }
        }
        return -1;
    };

    verifica(cadeira: number): boolean {
        return this.passageiros[cadeira - 1];
    };

    ocupa(cadeira: number): boolean {
        if (!this.verifica(cadeira)) {
            this.passageiros[cadeira - 1] = true;
            return true;
        }

        return false;
    };


    vagas(): number{
        return this.passageiros.filter((ocupada) => !ocupada).length;
    };

    getVoo(): string{
        return this.numeroVoo;
    };

    getData(): string{
        return this.data;
    };
    clone(): Voo{
        return new Voo(this.numeroVoo, this.data);
    };
}