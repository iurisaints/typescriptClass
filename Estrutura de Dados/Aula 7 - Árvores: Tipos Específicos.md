**Árvores em TypeScript: Explorando Tipos Específicos**

Na aula anterior, introduzimos as árvores como uma estrutura de dados fundamental e vimos como criar uma estrutura de nó simples em TypeScript. Agora, vamos explorar tipos específicos de árvores e como implementá-los em TypeScript.

### Árvore Binária

Uma **árvore binária** é uma árvore em que cada nó pode ter no máximo dois filhos, um à esquerda e outro à direita. Este é um dos tipos mais comuns de árvores usados em ciência da computação.

#### Implementação em TypeScript

Vamos implementar uma árvore binária simples em TypeScript:

```typescript
class TreeNode<T> {
  value: T;
  left: TreeNode<T> | null = null;
  right: TreeNode<T> | null = null;

  constructor(value: T) {
    this.value = value;
  }
}

// Exemplo de uso
const rootNode = new TreeNode(10);
const nodeB = new TreeNode(5);
const nodeC = new TreeNode(15);

rootNode.left = nodeB;
rootNode.right = nodeC;
```

Aqui, criamos uma classe `TreeNode` que representa um nó em uma árvore binária. Cada nó tem um valor genérico e pode ter um nó filho à esquerda e à direita.

### Árvore de Busca Binária (BST)

Uma **árvore de busca binária (BST)** é uma árvore binária especial onde os nós à esquerda têm valores menores que o nó pai, e os nós à direita têm valores maiores. Isso torna a pesquisa eficiente.

#### Implementação em TypeScript

Vamos implementar uma árvore de busca binária simples em TypeScript:

```typescript
class BinarySearchTree<T> {
  root: TreeNode<T> | null = null;

  insert(value: T): void {
    const newNode = new TreeNode(value);

    if (!this.root) {
      this.root = newNode;
      return;
    }

    let current = this.root;
    while (true) {
      if (value < current.value) {
        if (!current.left) {
          current.left = newNode;
          return;
        }
        current = current.left;
      } else {
        if (!current.right) {
          current.right = newNode;
          return;
        }
        current = current.right;
      }
    }
  }
}

// Exemplo de uso
const bst = new BinarySearchTree<number>();
bst.insert(10);
bst.insert(5);
bst.insert(15);
```

Nesta implementação, criamos uma classe `BinarySearchTree` que permite inserir valores na árvore mantendo a propriedade da BST.

### Árvore AVL

Uma **árvore AVL** é uma árvore de busca binária balanceada, onde a altura das subárvores esquerda e direita de qualquer nó difere no máximo em 1. Isso garante tempos de pesquisa e inserção muito eficientes.

A implementação de uma árvore AVL é mais complexa do que uma BST simples e envolve a rotação de nós para manter o equilíbrio.

### Árvores B

**Árvores B** são árvores de busca balanceadas usadas principalmente em estruturas de dados em disco. Eles têm a capacidade de armazenar mais chaves em um único nó e têm profundidade mais rasa em comparação com árvores AVL ou BST para grandes conjuntos de dados.
