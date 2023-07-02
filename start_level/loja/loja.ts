export class Produto {
    nome: string;
    preco: number;
  
    constructor(nome: string, preco: number) {
      this.nome = nome;
      this.preco = preco;
    }
  }
  
export class Loja {
    nome: string;
    endereco: string;
    produtos: Produto[];
  
    constructor(nome: string, endereco: string) {
      this.nome = nome;
      this.endereco = endereco;
      this.produtos = [];
    }
  
    adicionarProduto(produto: Produto): void {
      this.produtos.push(produto);
      console.log(`O produto "${produto.nome}" foi adicionado à loja.`);
    }
  
    removerProduto(produto: Produto): void {
      const index = this.produtos.indexOf(produto);
      if (index !== -1) {
        this.produtos.splice(index, 1);
        console.log(`O produto "${produto.nome}" foi removido da loja.`);
      } else {
        console.log(`O produto "${produto.nome}" não está disponível na loja.`);
      }
    }
  
    exibirProdutos(): void {
      console.log(`Produtos disponíveis na loja ${this.nome}:`);
      for (const produto of this.produtos) {
        console.log(`- ${produto.nome} (Preço: R$ ${produto.preco.toFixed(2)})`);
      }
    }
  }
  

  