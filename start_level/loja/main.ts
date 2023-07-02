  // Teste do código
  import { Produto, Loja } from "./loja";
  const loja = new Loja('Minha Loja', 'Rua Principal');
  const produto1 = new Produto('Camiseta', 49.90);
  const produto2 = new Produto('Calça Jeans', 89.90);
  const produto3 = new Produto('Tênis', 129.90);
  
  loja.adicionarProduto(produto1);
  loja.adicionarProduto(produto2);
  loja.exibirProdutos();
  
  loja.removerProduto(produto2);
  loja.removerProduto(produto3);
  loja.exibirProdutos();