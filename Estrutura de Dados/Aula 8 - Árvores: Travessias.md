## Travessias em Árvores Binárias

As travessias em árvores binárias são técnicas usadas para visitar cada nó em uma árvore em uma ordem específica. Existem três tipos principais de travessias:

1. **In-Order (Em ordem):** Nesta travessia, visitamos o nó esquerdo, depois o nó raiz e, finalmente, o nó direito. Em uma árvore de busca binária (BST), isso resulta em visitar os nós em ordem crescente.

2. **Pre-Order (Pré-ordem):** Nesta travessia, visitamos o nó raiz primeiro, depois o nó esquerdo e, finalmente, o nó direito. É frequentemente usado para criar uma cópia da árvore.

3. **Post-Order (Pós-ordem):** Nesta travessia, visitamos o nó esquerdo, depois o nó direito e, finalmente, o nó raiz. É frequentemente usado para deletar uma árvore da memória.

Vamos dar uma olhada em como essas travessias funcionam em TypeScript.

### Exemplo de Travessias em Árvore

```typescript
class TreeNode<T> {
  value: T;
  left: TreeNode<T> | null = null;
  right: TreeNode<T> | null = null;

  constructor(value: T) {
    this.value = value;
  }
}

class BinarySearchTree<T> {
  root: TreeNode<T> | null = null;

  // ... Métodos de inserção e pesquisa da aula anterior ...

  // Travessia In-Order (Em ordem)
  inOrderTraversal(node: TreeNode<T> | null = this.root): void {
    if (node) {
      this.inOrderTraversal(node.left);
      console.log(node.value);
      this.inOrderTraversal(node.right);
    }
  }

  // Travessia Pre-Order (Pré-ordem)
  preOrderTraversal(node: TreeNode<T> | null = this.root): void {
    if (node) {
      console.log(node.value);
      this.preOrderTraversal(node.left);
      this.preOrderTraversal(node.right);
    }
  }

  // Travessia Post-Order (Pós-ordem)
  postOrderTraversal(node: TreeNode<T> | null = this.root): void {
    if (node) {
      this.postOrderTraversal(node.left);
      this.postOrderTraversal(node.right);
      console.log(node.value);
    }
  }
}

// Exemplo de uso
const bst = new BinarySearchTree<number>();
bst.insert(10);
bst.insert(5);
bst.insert(15);

console.log("In-Order Traversal:");
bst.inOrderTraversal(); // Saída: 5, 10, 15

console.log("Pre-Order Traversal:");
bst.preOrderTraversal(); // Saída: 10, 5, 15

console.log("Post-Order Traversal:");
bst.postOrderTraversal(); // Saída: 5, 15, 10
```

Neste exemplo, implementamos as três travessias em uma árvore binária de busca:

- `inOrderTraversal` visita os nós em ordem crescente.
- `preOrderTraversal` visita o nó raiz primeiro.
- `postOrderTraversal` visita o nó raiz por último.

Essas travessias são úteis para processar árvores de diferentes maneiras, dependendo dos requisitos do seu algoritmo.
