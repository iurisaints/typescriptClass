**Árvores em TypeScript: Uma Introdução**

Árvores são estruturas de dados fundamentais em ciência da computação. Elas são usadas para representar hierarquias, estruturas de dados balanceadas, e são a base para muitos algoritmos importantes. Nesta aula, vamos explorar árvores, seus conceitos básicos e como implementá-las em TypeScript.

### O Que É Uma Árvore?

Uma árvore é uma estrutura de dados que consiste em nós conectados por arestas. Cada nó em uma árvore possui um valor (ou dado) e zero ou mais nós filhos. O nó no topo da árvore é chamado de "raiz", os nós sem filhos são chamados de "folhas", e os nós que estão entre a raiz e as folhas são chamados de "nós internos". 

### Terminologia Importante

Antes de mergulharmos na implementação, é importante entender alguns termos-chave:

- **Nó (Node)**: Um elemento em uma árvore que possui um valor e zero ou mais filhos.
- **Raiz (Root)**: O nó no topo da árvore, a partir do qual todos os outros nós são alcançáveis.
- **Filho (Child)**: Um nó que está diretamente ligado a outro nó (um nível abaixo na hierarquia).
- **Pai (Parent)**: Um nó que está diretamente acima de outro nó (um nível acima na hierarquia).
- **Folha (Leaf)**: Um nó que não possui filhos.
- **Subárvore (Subtree)**: Um conjunto de nós e arestas dentro de uma árvore, incluindo a raiz dessa subárvore.
- **Nível (Level)**: A distância entre a raiz e um nó. O nível da raiz é 0.
- **Altura (Height)**: O comprimento do caminho mais longo da raiz a uma folha. A altura da árvore é a altura da raiz.

### Implementando Uma Árvore em TypeScript

A implementação de uma árvore pode ser feita de várias maneiras. Uma das abordagens mais comuns é usar uma estrutura de nó que contenha referências para seus filhos. Aqui está um exemplo simples de como isso pode ser feito em TypeScript:

```typescript
class Node<T> {
  value: T;
  children: Node<T>[] = [];

  constructor(value: T) {
    this.value = value;
  }

  addChild(child: Node<T>): void {
    this.children.push(child);
  }
}

// Exemplo de uso
const rootNode = new Node("A");
const nodeB = new Node("B");
const nodeC = new Node("C");

rootNode.addChild(nodeB);
rootNode.addChild(nodeC);
```

Neste exemplo, criamos uma classe `Node` que possui um valor genérico (`T`) e uma lista de filhos (outros nós). A função `addChild` permite adicionar filhos a um nó.

### Tipos Específicos de Árvores

Existem muitos tipos específicos de árvores em ciência da computação, como árvores binárias, árvores de busca binária, árvores AVL, árvores B, entre outras. Cada tipo de árvore possui características e propriedades únicas que a tornam adequada para diferentes tipos de problemas.

Por exemplo, uma **árvore binária de busca** é uma árvore em que cada nó tem no máximo dois filhos, e os nós à esquerda têm valores menores que o nó pai, enquanto os nós à direita têm valores maiores.
