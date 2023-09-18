Claro, nesta quarta aula sobre árvores, vamos aprofundar ainda mais nossos conhecimentos, abordando os conceitos de árvores binárias de busca (Binary Search Trees - BSTs) balanceadas e AVL.

## Árvores Binárias de Busca Balanceadas (AVL)

### Balanceamento de Árvores

Em árvores binárias de busca, o balanceamento é essencial para manter a eficiência das operações de busca, inserção e exclusão. Árvores desbalanceadas podem degenerar em listas, o que resulta em operações de complexidade O(n), onde n é o número de elementos na árvore.

As árvores AVL (Adelson-Velsky e Landis) são uma forma de árvores binárias de busca balanceadas. A principal característica das árvores AVL é que a diferença entre as alturas das subárvores esquerda e direita (conhecida como fator de balanceamento) para qualquer nó é no máximo 1.

### Inserção e Rotações

Quando você insere um novo nó em uma árvore AVL, pode ocorrer um desbalanceamento. Para corrigir isso, usamos rotações. Existem quatro tipos principais de rotações em uma árvore AVL:

1. Rotação à direita (LL-Rotation): Usada quando ocorre um desbalanceamento à esquerda-esquerda.
2. Rotação à esquerda (RR-Rotation): Usada quando ocorre um desbalanceamento à direita-direita.
3. Rotação à direita-esquerda (LR-Rotation): Usada quando ocorre um desbalanceamento à esquerda-direita.
4. Rotação à esquerda-direita (RL-Rotation): Usada quando ocorre um desbalanceamento à direita-esquerda.

Vamos dar uma olhada em como isso funciona em TypeScript.

### Exemplo de Árvore AVL

```typescript
class TreeNode<T> {
  value: T;
  left: TreeNode<T> | null = null;
  right: TreeNode<T> | null = null;
  height: number = 1; // A altura de um nó folha é 1.

  constructor(value: T) {
    this.value = value;
  }
}

class AVLTree<T> {
  root: TreeNode<T> | null = null;

  // ... Métodos de inserção e pesquisa da aula anterior ...

  // Função auxiliar para calcular a altura de um nó
  private getHeight(node: TreeNode<T> | null): number {
    if (!node) return 0;
    return node.height;
  }

  // Função auxiliar para atualizar a altura de um nó
  private updateHeight(node: TreeNode<T>): void {
    node.height = Math.max(this.getHeight(node.left), this.getHeight(node.right)) + 1;
  }

  // Função auxiliar para realizar rotações
  private rotateLeft(node: TreeNode<T>): TreeNode<T> {
    const newRoot = node.right!;
    node.right = newRoot.left;
    newRoot.left = node;

    // Atualiza as alturas após a rotação
    this.updateHeight(node);
    this.updateHeight(newRoot);

    return newRoot;
  }

  private rotateRight(node: TreeNode<T>): TreeNode<T> {
    const newRoot = node.left!;
    node.left = newRoot.right;
    newRoot.right = node;

    // Atualiza as alturas após a rotação
    this.updateHeight(node);
    this.updateHeight(newRoot);

    return newRoot;
  }

  // Inserção na Árvore AVL
  insert(value: T): void {
    this.root = this.insertRec(this.root, value);
  }

  private insertRec(node: TreeNode<T> | null, value: T): TreeNode<T> {
    if (!node) return new TreeNode(value);

    if (value < node.value) {
      node.left = this.insertRec(node.left, value);
    } else if (value > node.value) {
      node.right = this.insertRec(node.right, value);
    } else {
      // Duplicatas não são permitidas (você pode ajustar isso conforme necessário)
      return node;
    }

    // Atualiza a altura do nó atual
    this.updateHeight(node);

    // Verifica o fator de balanceamento
    const balance = this.getBalance(node);

    // Casos de rotação
    if (balance > 1 && value < node.left!.value) {
      return this.rotateRight(node);
    }

    if (balance < -1 && value > node.right!.value) {
      return this.rotateLeft(node);
    }

    if (balance > 1 && value > node.left!.value) {
      node.left = this.rotateLeft(node.left!);
      return this.rotateRight(node);
    }

    if (balance < -1 && value < node.right!.value) {
      node.right = this.rotateRight(node.right!);
      return this.rotateLeft(node);
    }

    return node;
  }

  // Função auxiliar para obter o fator de balanceamento de um nó
  private getBalance(node: TreeNode<T>): number {
    if (!node) return 0;
    return this.getHeight(node.left) - this.getHeight(node.right);
  }
}

// Exemplo de uso
const avl = new AVLTree<number>();
avl.insert(10);
avl.insert(5);
avl.insert(15);

// ... Continuação da aula anterior ...
```

Neste exemplo, implementamos uma árvore AVL com inserção e rotações. A árvore se ajusta automaticamente para manter o balanceamento após cada inserção.

Árvores AVL são amplamente utilizadas em bancos de dados e outras aplicações onde a eficiência nas operações de busca é crítica.

Na próxima aula, exploraremos árvores binárias de busca mais avançadas, como árvores Rubro-Negras.
