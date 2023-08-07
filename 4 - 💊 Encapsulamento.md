# O Mágico Encapsulamento! 🔒✨

Sejam bem-vindos ao mundo misterioso do Encapsulamento, um dos conceitos mais poderosos da Programação Orientada a Objetos!

## Modificadores de Acesso: Protegendo Segredos

Os modificadores de acesso são como **feitiços protetores** que determinam o acesso aos atributos e métodos de uma classe. Eles garantem que certas informações sejam acessíveis apenas por certos objetos ou classes, protegendo segredos valiosos.

Em TypeScript, temos três modificadores de acesso principais:

- `public`: Acesso permitido de qualquer lugar. É o padrão quando o modificador não é especificado.
- `private`: Acesso restrito apenas à própria classe. Outros objetos não podem acessar diretamente os atributos/métodos privados.
- `protected`: Acesso permitido à própria classe e suas subclasses. É útil para definir comportamentos compartilhados com as subclasses.

```typescript
class TesouroMagico {
  public encantamento: string; // Atributo público (acesso permitido de fora da classe)
  private segredo: string; // Atributo privado (acesso restrito à própria classe)
  protected poder: number; // Atributo protegido (acesso à própria classe e subclasses)

  public exibirTesouro() {
    console.log(`Encantamento: ${this.encantamento}`);
    //console.log(`Segredo: ${this.segredo}`); // Erro: acesso privado não permitido fora da classe
    console.log(`Poder: ${this.poder}`); // Acesso permitido em subclasses
  }
}
```

## Getters e Setters: Controle Total

Os **feitiços manipuladores** getters e setters permitem um controle mais refinado sobre os atributos, permitindo a validação e manipulação antes de obter ou definir seus valores. Eles garantem que a mágica aconteça corretamente!

```typescript
class TesouroMagico {
  private _valor: number;

  public get valor(): number {
    return this._valor;
  }

  public set valor(novoValor: number) {
    if (novoValor >= 0) {
      this._valor = novoValor;
    } else {
      console.log("O valor do tesouro não pode ser negativo!");
    }
  }
}

const tesouro = new TesouroMagico();
tesouro.valor = 1000; // Define o valor do tesouro usando o setter
console.log(tesouro.valor); // Obtém o valor do tesouro usando o getter
```

## Construtores: O Ritual de Criação

O construtor é um **ritual de criação** especial que permite a inicialização dos atributos de um objeto quando ele é criado. É como um feitiço que é invocado automaticamente durante a criação do objeto.

```typescript
class PoçãoMagica {
  private ingrediente1: string;
  private ingrediente2: string;

  constructor(ingrediente1: string, ingrediente2: string) {
    this.ingrediente1 = ingrediente1;
    this.ingrediente2 = ingrediente2;
  }
}

const poçãoPoderosa = new PoçãoMagica("Asa de morcego", "Pó de estrela");
```

🧙‍♀️ Com esses poderosos feitiços do Encapsulamento, você pode proteger e controlar o acesso aos segredos de suas classes, permitindo que sua mágica seja realizada com precisão e segurança!

Agora, é hora de praticar esses conceitos e descobrir o quão poderoso você pode se tornar na arte da Orientação a Objetos! Continue sua jornada como um feiticeiro habilidoso, manipulando o poder do Encapsulamento para criar códigos limpos, organizados e mais eficientes. Boa sorte, jovem aprendiz! 🌟✨
