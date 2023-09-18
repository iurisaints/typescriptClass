# Filas em TypeScript

Uma fila é uma estrutura de dados que segue a regra "primeiro a entrar, primeiro a sair" (FIFO - First-In, First-Out). Em outras palavras, o elemento que foi adicionado primeiro é o primeiro a ser removido. Filas são amplamente utilizadas em programação para tarefas que envolvem armazenamento temporário e gerenciamento de elementos em uma ordem específica.

## Implementação Básica de uma Fila

Em TypeScript, podemos implementar uma fila usando uma classe simples. Aqui está um exemplo de como criar uma fila básica:

```typescript
class Fila<T> {
  private elementos: T[] = [];

  // Adiciona um elemento ao final da fila
  enfileirar(item: T): void {
    this.elementos.push(item);
  }

  // Remove e retorna o primeiro elemento da fila
  desenfileirar(): T | undefined {
    if (this.estaVazia()) {
      console.log("A fila está vazia.");
      return undefined;
    }
    return this.elementos.shift();
  }

  // Retorna o primeiro elemento da fila sem removê-lo
  primeiro(): T | undefined {
    if (this.estaVazia()) {
      console.log("A fila está vazia.");
      return undefined;
    }
    return this.elementos[0];
  }

  // Verifica se a fila está vazia
  estaVazia(): boolean {
    return this.elementos.length === 0;
  }

  // Retorna o tamanho da fila
  tamanho(): number {
    return this.elementos.length;
  }
}

// Exemplo de uso da fila
const filaDeClientes = new Fila<string>();

// Enfileirar clientes
filaDeClientes.enfileirar("Cliente 1");
filaDeClientes.enfileirar("Cliente 2");
filaDeClientes.enfileirar("Cliente 3");

// Desenfileirar e atender clientes
console.log(`Próximo cliente a ser atendido: ${filaDeClientes.desenfileirar()}`);
console.log(`Próximo cliente a ser atendido: ${filaDeClientes.desenfileirar()}`);

// Verificar se a fila está vazia
console.log(`A fila está vazia? ${filaDeClientes.estaVazia()}`);
```

Neste exemplo, criamos uma classe `Fila` que possui métodos para enfileirar elementos, desenfileirar elementos, verificar se a fila está vazia, retornar o tamanho da fila e obter o primeiro elemento sem removê-lo.

## Utilizando Filas na Prática

As filas são usadas em muitos cenários da programação. Alguns exemplos incluem:

1. **Fila de Tarefas**: Quando você precisa processar tarefas em uma ordem específica, como em um sistema de impressão de documentos em fila.

2. **Fila de Pedidos**: Em sistemas de comércio eletrônico, os pedidos dos clientes são frequentemente colocados em fila para serem processados.

3. **Breadth-First Search (BFS)**: Algoritmos de busca em grafos, como o BFS, usam filas para explorar os nós em uma ordem específica.

4. **Controle de Acesso a Recursos**: Em sistemas concorrentes, as filas podem ser usadas para controlar o acesso a recursos compartilhados, como bancos de dados.
