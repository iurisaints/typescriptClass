## Listas em TypeScript

Em TypeScript, uma lista é uma estrutura de dados que permite armazenar um conjunto de valores em uma única variável. Listas são conhecidas por vários nomes, como arrays, vetores ou listas, dependendo da linguagem de programação, mas em TypeScript, geralmente as chamamos de arrays.

### Declarando uma Lista

Em TypeScript, você pode declarar uma lista usando colchetes `[]`. Por exemplo:

```typescript
let listaDeNomes: string[] = ["Alice", "Bob", "Charlie"];
```

Aqui, `listaDeNomes` é uma lista de strings que contém três nomes.

### Acessando Elementos

Você pode acessar elementos de uma lista usando seu índice. Os índices em TypeScript começam em 0. Por exemplo:

```typescript
let primeiroNome = listaDeNomes[0]; // "Alice"
```

### Modificando Elementos

Você pode modificar elementos de uma lista atribuindo um novo valor a um índice específico. Por exemplo:

```typescript
listaDeNomes[1] = "Bobby";
```

### Propriedades de Listas

As listas em TypeScript têm várias propriedades úteis, como:

- `length`: Retorna o número de elementos na lista.

```typescript
let tamanhoDaLista = listaDeNomes.length; // 3
```

### Métodos de Listas

As listas em TypeScript também possuem vários métodos úteis que podem ser usados para realizar operações comuns, como adicionar, remover e pesquisar elementos.

#### Adicionar Elementos

- `push()`: Adiciona elementos ao final da lista.

```typescript
listaDeNomes.push("David"); // ["Alice", "Bobby", "Charlie", "David"]
```

- `unshift()`: Adiciona elementos ao início da lista.

```typescript
listaDeNomes.unshift("Eve"); // ["Eve", "Alice", "Bobby", "Charlie", "David"]
```

#### Remover Elementos

- `pop()`: Remove e retorna o último elemento da lista.

```typescript
let ultimoNome = listaDeNomes.pop(); // "David", lista agora é ["Eve", "Alice", "Bobby", "Charlie"]
```

- `shift()`: Remove e retorna o primeiro elemento da lista.

```typescript
let primeiroNome = listaDeNomes.shift(); // "Eve", lista agora é ["Alice", "Bobby", "Charlie"]
```

#### Pesquisar Elementos

- `indexOf()`: Retorna o índice do primeiro elemento correspondente encontrado na lista.

```typescript
let indice = listaDeNomes.indexOf("Bobby"); // 1
```

- `includes()`: Verifica se um elemento existe na lista.

```typescript
let existe = listaDeNomes.includes("Charlie"); // true
```

### Iterando uma Lista

Você pode usar loops, como `for` e `for...of`, para iterar pelos elementos de uma lista.

#### Usando um Loop `for`

```typescript
for (let i = 0; i < listaDeNomes.length; i++) {
  console.log(listaDeNomes[i]);
}
```

#### Usando um Loop `for...of`

```typescript
for (let nome of listaDeNomes) {
  console.log(nome);
}
```

### Listas Multidimensionais

Você também pode criar listas multidimensionais em TypeScript, ou seja, listas de listas. Isso é útil para representar matrizes ou tabelas.

```typescript
let matriz: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

let elemento = matriz[1][2]; // 6
```

Isso cria uma matriz 3x3 e acessa o elemento na segunda linha e terceira coluna.

Claro! Vamos criar um exemplo didático de uma lista multidimensional (ou matriz) e mostrar como usá-la em TypeScript.

### Exemplo de Matriz em TypeScript

Vamos criar uma matriz que representa uma grade 3x3 de números inteiros. Cada célula da grade terá um valor.

```typescript
let matriz: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
```

Neste exemplo, temos uma matriz 3x3. Cada elemento da matriz é um número inteiro.

### Acessando Elementos

Agora, vamos acessar elementos específicos da matriz usando índices.

```typescript
let elemento = matriz[1][2]; // Acessa a segunda linha e terceira coluna (valor: 6)
```

Neste caso, `matriz[1]` nos dá a segunda linha `[4, 5, 6]`, e `matriz[1][2]` nos dá o valor 6.

### Iterando pela Matriz

Você pode usar loops `for` aninhados para percorrer todos os elementos da matriz.

```typescript
for (let i = 0; i < matriz.length; i++) {
  for (let j = 0; j < matriz[i].length; j++) {
    console.log(matriz[i][j]);
  }
}
```

Este código percorrerá cada linha e, em seguida, dentro de cada linha, percorrerá cada coluna, imprimindo todos os valores da matriz.

### Usos Comuns

Matrizes são usadas em muitas aplicações, como representar grades de pixels em imagens, armazenar dados tabulares, ou criar jogos com mapas de níveis.

Por exemplo, em um jogo de xadrez, você pode representar o tabuleiro como uma matriz onde cada célula contém uma peça de xadrez (rei, rainha, peão, etc.).

```typescript
let tabuleiro: string[][] = [
  ["T", "C", "B", "D", "R", "B", "C", "T"],
  ["P", "P", "P", "P", "P", "P", "P", "P"],
  ["", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", ""],
  ["p", "p", "p", "p", "p", "p", "p", "p"],
  ["t", "c", "b", "d", "r", "b", "c", "t"],
];
```

Esta matriz representa o tabuleiro inicial de xadrez.
