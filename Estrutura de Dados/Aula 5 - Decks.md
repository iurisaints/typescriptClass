# Decks em Typescript
Decks, também conhecidos como pilhas duplas (double-ended queues) ou deque, são estruturas de dados que permitem adicionar e remover elementos tanto no início quanto no final da coleção. Em TypeScript, você pode implementar um deck usando arrays e algumas operações específicas. Vou criar um exemplo simples de um deck em TypeScript para ilustrar como isso pode ser feito:

```typescript
class Deck<T> {
  private elementos: T[] = [];

  // Adiciona um elemento no início do deck
  adicionarNoInicio(item: T): void {
    this.elementos.unshift(item);
  }

  // Adiciona um elemento no final do deck
  adicionarNoFinal(item: T): void {
    this.elementos.push(item);
  }

  // Remove e retorna o elemento do início do deck
  removerDoInicio(): T | undefined {
    return this.elementos.shift();
  }

  // Remove e retorna o elemento do final do deck
  removerDoFinal(): T | undefined {
    return this.elementos.pop();
  }

  // Retorna o elemento do início do deck sem removê-lo
  primeiro(): T | undefined {
    return this.elementos[0];
  }

  // Retorna o elemento do final do deck sem removê-lo
  ultimo(): T | undefined {
    return this.elementos[this.elementos.length - 1];
  }

  // Verifica se o deck está vazio
  estaVazio(): boolean {
    return this.elementos.length === 0;
  }

  // Retorna o número de elementos no deck
  tamanho(): number {
    return this.elementos.length;
  }

  // Limpa o deck, removendo todos os elementos
  limpar(): void {
    this.elementos = [];
  }
}

// Exemplo de uso do deck
const meuDeck = new Deck<number>();

meuDeck.adicionarNoInicio(1);
meuDeck.adicionarNoInicio(2);
meuDeck.adicionarNoFinal(3);
meuDeck.adicionarNoFinal(4);

console.log(`Primeiro elemento: ${meuDeck.primeiro()}`);
console.log(`Último elemento: ${meuDeck.ultimo()}`);
console.log(`Tamanho do deck: ${meuDeck.tamanho()}`);

console.log(`Removendo do início: ${meuDeck.removerDoInicio()}`);
console.log(`Removendo do final: ${meuDeck.removerDoFinal()}`);

console.log(`Primeiro elemento após remoção: ${meuDeck.primeiro()}`);
console.log(`Tamanho do deck após remoção: ${meuDeck.tamanho()}`);

meuDeck.limpar();
console.log(`Deck está vazio? ${meuDeck.estaVazio()}`);
```

Neste exemplo, criamos uma classe `Deck` que permite adicionar e remover elementos tanto no início quanto no final do deck. Você pode usar esse código como base para implementar decks em TypeScript em seus próprios projetos.
