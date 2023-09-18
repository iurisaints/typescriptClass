## Arrays em TypeScript

Em TypeScript, assim como em JavaScript, os arrays são uma estrutura de dados que permite armazenar uma coleção ordenada de elementos do mesmo tipo em uma única variável. No entanto, com o TypeScript, você pode aproveitar os recursos de tipagem estática para criar arrays fortemente tipados.

## Declarando Arrays em TypeScript

Para declarar um array em TypeScript, você pode usar a notação de colchetes `[]` após o tipo de elemento que o array irá conter. Aqui estão alguns exemplos:

```typescript
// Array de números inteiros
let numeros: number[] = [1, 2, 3, 4, 5];

// Array de strings
let frutas: string[] = ['maçã', 'banana', 'laranja', 'uva'];

// Array de objetos (nesse caso, objetos com nome e idade)
let pessoas: { nome: string, idade: number }[] = [
  { nome: 'Alice', idade: 30 },
  { nome: 'Bob', idade: 25 },
  { nome: 'Carol', idade: 35 }
];
```

## Principais Operações em Arrays

1. **Acesso a Elementos**: Você pode acessar elementos individuais de um array usando seu índice, por exemplo, `numeros[0]` para acessar o primeiro elemento.

2. **Inserção de Elementos**: Você pode adicionar elementos a um array usando os métodos `push()` ou `unshift()`. O `push()` adiciona elementos ao final do array, enquanto o `unshift()` adiciona elementos ao início.

3. **Remoção de Elementos**: Para remover elementos, você pode usar os métodos `pop()` para remover o último elemento, `shift()` para remover o primeiro elemento ou `splice()` para remover elementos em posições específicas.

4. **Iteração**: É comum usar loops (por exemplo, `for` ou `forEach`) para iterar por todos os elementos de um array.

## Métodos de Array em TypeScript

O TypeScript fornece suporte a métodos de array semelhantes aos disponíveis no JavaScript, mas com tipagem estática. Aqui estão alguns exemplos:

- `push()`: Adiciona elementos ao final do array.
- `pop()`: Remove o último elemento do array.
- `shift()`: Remove o primeiro elemento do array.
- `unshift()`: Adiciona elementos ao início do array.
- `splice()`: Permite adicionar, remover ou substituir elementos em posições específicas do array.
- `forEach()`: Itera por todos os elementos do array e executa uma função de callback.

## Vantagens da Tipagem Estática em Arrays

Uma das principais vantagens de usar TypeScript com arrays é a tipagem estática. Isso significa que você pode especificar o tipo de dados que o array deve conter e obter erros de tipo em tempo de compilação se tentar inserir valores de tipos diferentes.

```typescript
// Array de números inteiros (tipagem estática)
let numeros: number[] = [1, 2, 3, 4, 5];
numeros.push('seis'); // Erro de tipo em tempo de compilação
```
