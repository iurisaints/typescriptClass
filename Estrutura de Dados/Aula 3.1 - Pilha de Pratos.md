```typescript
class PilhaDePratos {
  private pratos: string[] = [];

  // Adiciona um prato ao topo da pilha
  adicionarPrato(prato: string): void {
    this.pratos.push(prato);
    console.log(`${prato} foi colocado no topo da pilha.`);
  }

  // Remove e retorna o prato do topo da pilha
  retirarPrato(): string | undefined {
    const prato = this.pratos.pop();
    if (prato) {
      console.log(`${prato} foi retirado do topo da pilha.`);
    } else {
      console.log('A pilha de pratos está vazia.');
    }
    return prato;
  }

  // Verifica se a pilha de pratos está vazia
  estaVazia(): boolean {
    return this.pratos.length === 0;
  }

  // Retorna o número de pratos na pilha
  tamanho(): number {
    return this.pratos.length;
  }
}

// Criando uma pilha de pratos
const pilhaDePratos = new PilhaDePratos();

// Adicionando pratos
pilhaDePratos.adicionarPrato('Prato 1');
pilhaDePratos.adicionarPrato('Prato 2');
pilhaDePratos.adicionarPrato('Prato 3');

// Retirando pratos
pilhaDePratos.retirarPrato();
pilhaDePratos.retirarPrato();
pilhaDePratos.retirarPrato();
pilhaDePratos.retirarPrato(); // Tentando retirar um prato quando a pilha está vazia

// Verificando se a pilha está vazia
console.log(`A pilha de pratos está vazia? ${pilhaDePratos.estaVazia()}`);

// Obtendo o tamanho da pilha
console.log(`Tamanho da pilha: ${pilhaDePratos.tamanho()}`);
```
