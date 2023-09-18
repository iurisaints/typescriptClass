Claro, na quinta aula sobre árvores, continuaremos explorando árvores binárias de busca, desta vez focando nas árvores Rubro-Negras.

## Árvores Rubro-Negras (Red-Black Trees)

As árvores Rubro-Negras são uma outra variação de árvores binárias de busca balanceadas. Elas garantem um balanceamento relativo próximo de 2, o que as torna mais flexíveis em comparação com as árvores AVL. Aqui estão algumas características importantes das árvores Rubro-Negras:

1. **Cores**: Cada nó da árvore tem uma cor, que pode ser vermelha ou preta.

2. **Propriedades**: As árvores Rubro-Negras seguem uma série de propriedades que garantem o balanceamento e a ordenação correta dos nós.

3. **Rotações**: Assim como nas árvores AVL, as árvores Rubro-Negras usam rotações para manter o balanceamento durante operações de inserção e exclusão.

### Propriedades de uma Árvore Rubro-Negra

Vamos resumir as principais propriedades que garantem o balanceamento de uma árvore Rubro-Negra:

1. **Cada nó é vermelho ou preto**: Cada nó na árvore tem uma cor, que pode ser vermelha ou preta.

2. **Raiz preta**: A raiz da árvore é sempre preta.

3. **Nenhuma dupla vermelha**: Não pode haver dois nós vermelhos consecutivos em qualquer caminho da raiz às folhas.

4. **Propriedade de folhas nulas**: Todas as folhas (nós nulos) são pretas.

5. **Altura negra**: Para cada nó, qualquer caminho daquele nó para todas as suas folhas nulas deve ter o mesmo número de nós pretos. Isso garante que a árvore seja balanceada.

### Exemplo de Árvore Rubro-Negra

Vamos dar uma olhada em um exemplo de implementação de uma árvore Rubro-Negra em TypeScript.

```typescript
enum Color {
  RED,
  BLACK,
}

class RBTreeNode<T> {
  value: T;
  left: RBTreeNode<T> | null = null;
  right: RBTreeNode<T> | null = null;
  color: Color = Color.RED; // Novos nós são vermelhos por padrão.

  constructor(value: T) {
    this.value = value;
  }
}

class RedBlackTree<T> {
  root: RBTreeNode<T> | null = null;

  // ... Métodos de inserção e pesquisa da aula anterior ...

  // Função auxiliar para inserção de um nó
  private insertNode(node: RBTreeNode<T> | null, value: T): RBTreeNode<T> {
    if (!node) return new RBTreeNode(value);

    if (value < node.value) {
      node.left = this.insertNode(node.left, value);
    } else if (value > node.value) {
      node.right = this.insertNode(node.right, value);
    } else {
      // Duplicatas não são permitidas (você pode ajustar isso conforme necessário)
      return node;
    }

    // Balanceia a árvore após a inserção
    return this.balance(node);
  }

  // ... Função balance() e outras funções de rotação da aula anterior ...
}

// Exemplo de uso
const rbTree = new RedBlackTree<number>();
rbTree.insert(10);
rbTree.insert(5);
rbTree.insert(15);

// ... Continuação da aula anterior ...
```

Neste exemplo, implementamos uma árvore Rubro-Negra com inserção e rotações. As árvores Rubro-Negras são úteis em situações onde é necessário um certo grau de balanceamento, mas com menos restrições estritas do que as árvores AVL.

## Operações de Exclusão em Árvores Rubro-Negras

A exclusão em uma árvore Rubro-Negra é um pouco mais complexa do que a inserção. Para manter as propriedades da árvore, precisamos considerar várias situações e aplicar rotações conforme necessário.

Aqui estão os principais casos que precisamos tratar durante a exclusão:

1. **Nó a ser excluído é uma folha**: Se o nó a ser excluído for uma folha (sem filhos), podemos simplesmente removê-lo.

2. **Nó a ser excluído tem um filho**: Se o nó tiver apenas um filho, podemos substituir o nó pelo filho.

3. **Nó a ser excluído tem dois filhos**: Esta é a situação mais complexa. Precisamos encontrar o sucessor in-order (o nó mais à esquerda na subárvore direita) ou o predecessor in-order (o nó mais à direita na subárvore esquerda) do nó a ser excluído. O sucessor in-order ou predecessor in-order será um nó com zero ou um filho. Então, podemos substituir o nó a ser excluído por este sucessor e, em seguida, excluir o sucessor.

## Manutenção das Propriedades

Assim como na inserção, é essencial manter as propriedades das árvores Rubro-Negras durante a exclusão. Aqui estão algumas regras gerais:

1. **Dupla negra**: Se após a exclusão, um nó termina com uma "dupla negra", isso significa que ele tem uma negra extra. Isso pode afetar o equilíbrio da árvore, e precisamos corrigir isso.

2. **Caso 1**: Se o irmão do nó com dupla negra for vermelho, fazemos uma rotação para lidar com isso. Essa rotação deve ser seguida por outras rotações e ajustes para restaurar as propriedades.

3. **Caso 2**: Se o irmão do nó com dupla negra for preto e ambos os filhos do irmão forem pretos ou nulos, podemos simplesmente recolorir o irmão e passar a "dupla negra" para cima, para o pai.

4. **Caso 3**: Se o irmão do nó com dupla negra for preto e o filho esquerdo do irmão for vermelho, fazemos uma rotação direita no irmão e continuamos com o "Caso 4".

5. **Caso 4**: Se o irmão do nó com dupla negra for preto e o filho direito do irmão for vermelho, fazemos uma rotação esquerda no pai, trocamos as cores do pai e do irmão e definimos o filho direito do irmão como preto. Isso resolve o problema da "dupla negra".

## Exemplo de Exclusão

Vamos dar uma olhada em um exemplo simplificado de exclusão em uma árvore Rubro-Negra:

```typescript
class RedBlackTree<T> {
  // ... Métodos de inserção ...

  delete(value: T): void {
    // Implementação da exclusão aqui
  }

  // ... Outros métodos ...
}

// Exemplo de uso
const rbTree = new RedBlackTree<number>();
rbTree.insert(10);
rbTree.insert(5);
rbTree.insert(15);

rbTree.delete(5); // Exclui o valor 5 da árvore
```

A exclusão é um tópico avançado, e a implementação completa pode ser mais complexa. No entanto, a ideia geral é manter as propriedades da árvore enquanto excluímos os nós. Na próxima aula, abordaremos casos mais avançados de árvores, como árvores B e árvores Trie.
