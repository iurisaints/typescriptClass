class BaralhoDeCartas {
  private cartas: string[] = [];

  constructor() {
    const naipes = ["Copas", "Espadas", "Ouros", "Paus"];
    const valores = ["Ás", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Valete", "Dama", "Rei"];

    for (const naipe of naipes) {
      for (const valor of valores) {
        this.cartas.push(`${valor} de ${naipe}`);
      }
    }
  }

  // Insere uma carta no final do baralho
  inserirCarta(carta: string): void {
    this.cartas.push(carta);
  }

  // Retira e retorna a carta do final do baralho
  retirarCarta(): string | undefined {
    if (this.estaVazio()) {
      console.log("O baralho está vazio.");
      return undefined;
    }
    return this.cartas.pop();
  }

  cartaDoFinal(): string | undefined {
    if (this.estaVazio()) {
      console.log("O baralho está vazio.");
      return undefined;
    }
    return this.cartas[this.cartas.length - 1];
  }

  estaVazio(): boolean {
    return this.cartas.length === 0;
  }

  tamanho(): number {
    return this.cartas.length;
  }
}

const baralho = new BaralhoDeCartas();

console.log(`Número de cartas no baralho: ${baralho.tamanho()}`);

baralho.inserirCarta("Ás de Copas");
baralho.inserirCarta("Rei de Espadas");
baralho.inserirCarta("10 de Ouros");

console.log(`Número de cartas no baralho: ${baralho.tamanho()}`);

console.log(`Carta do final: ${baralho.cartaDoFinal()}`);
console.log(`Carta retirada do final: ${baralho.retirarCarta()}`);
console.log(`Número de cartas no baralho após retirada: ${baralho.tamanho()}`);
