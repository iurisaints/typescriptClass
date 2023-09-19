class FilaDeParque {
  private pessoas: string[] = [];

  // Adiciona uma pessoa ao final da fila
  entrarNaFila(nome: string): void {
    this.pessoas.unshift(nome);
  }

  // Remove e retorna a primeira pessoa da fila
  atender(): string | undefined {
    if (this.estaVazia()) {
      console.log("A fila está vazia.");
      return undefined;
    }
    return this.pessoas.shift();
  }

  // Retorna a primeira pessoa da fila sem removê-la
  proximaNaFila(): string | undefined {
    if (this.estaVazia()) {
      console.log("A fila está vazia.");
      return undefined;
    }
    return this.pessoas[0];
  }

  // Verifica se a fila está vazia
  estaVazia(): boolean {
    return this.pessoas.length === 0;
  }

  // Retorna o número de pessoas na fila
  tamanho(): number {
    return this.pessoas.length;
  }
}

// Exemplo de uso da fila de parque
const filaDoParque = new FilaDeParque();

// Pessoas entram na fila
filaDoParque.entrarNaFila("João");
filaDoParque.entrarNaFila("Maria");
filaDoParque.entrarNaFila("Pedro");

// O parque começa a atender
console.log(`Próxima pessoa a ser atendida: ${filaDoParque.atender()}`);
console.log(`Próxima pessoa na fila: ${filaDoParque.proximaNaFila()}`);

// Mais pessoas entram na fila
filaDoParque.entrarNaFila("Ana");
filaDoParque.entrarNaFila("Carlos");

// Continuando o atendimento
console.log(`Próxima pessoa a ser atendida: ${filaDoParque.atender()}`);

// Verificar se a fila está vazia
console.log(`A fila do parque está vazia? ${filaDoParque.estaVazia()}`);
