## Pilhas (Stacks) em TypeScript

Uma pilha, ou stack em inglês, é uma estrutura de dados linear que segue o princípio "last in, first out" (LIFO). Isso significa que o último elemento adicionado à pilha é o primeiro a ser removido. Pilhas são comumente usadas para rastrear a execução de funções em um programa, histórico de navegação em navegadores da web e em muitas outras aplicações.

## Implementando uma Pilha em TypeScript

Você pode implementar uma pilha em TypeScript usando um array ou criando uma classe personalizada para representá-la. Aqui está um exemplo de implementação de pilha usando um array:

```typescript
class Pilha<T> {
  private elementos: T[] = [];

  // Adiciona um elemento à pilha
  push(item: T): void {
    this.elementos.push(item);
  }

  // Remove e retorna o elemento do topo da pilha
  pop(): T | undefined {
    return this.elementos.pop();
  }

  // Retorna o elemento do topo da pilha sem removê-lo
  peek(): T | undefined {
    return this.elementos[this.elementos.length - 1];
  }

  // Verifica se a pilha está vazia
  isEmpty(): boolean {
    return this.elementos.length === 0;
  }

  // Retorna o número de elementos na pilha
  size(): number {
    return this.elementos.length;
  }

  // Limpa a pilha, removendo todos os elementos
  clear(): void {
    this.elementos = [];
  }
}

// Exemplo de uso
const minhaPilha = new Pilha<number>();
minhaPilha.push(1);
minhaPilha.push(2);
minhaPilha.push(3);

console.log(minhaPilha.pop()); // Saída: 3
console.log(minhaPilha.peek()); // Saída: 2
console.log(minhaPilha.size()); // Saída: 2
console.log(minhaPilha.isEmpty()); // Saída: false

minhaPilha.clear();
console.log(minhaPilha.isEmpty()); // Saída: true
```

## Principais Operações em Pilhas

- `push(item)`: Adiciona um elemento ao topo da pilha.
- `pop()`: Remove e retorna o elemento do topo da pilha.
- `peek()`: Retorna o elemento do topo da pilha sem removê-lo.
- `isEmpty()`: Verifica se a pilha está vazia.
- `size()`: Retorna o número de elementos na pilha.
- `clear()`: Limpa a pilha, removendo todos os elementos.

## Utilização de Pilhas

Pilhas são úteis em situações onde é necessário rastrear a ordem de execução de ações e retornar à ação anterior quando necessário. Por exemplo, em um navegador da web, a pilha de páginas visitadas é mantida para que você possa voltar à página anterior pressionando o botão "Voltar". Além disso, pilhas são frequentemente usadas para implementar algoritmos de busca em profundidade, validação de expressões matemáticas e muito mais.
