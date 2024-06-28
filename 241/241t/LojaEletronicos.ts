var leitor = require('readline-sync')
class Produto{
    nome_produto: string
    preco_produto: number
    preco_fornecedor: number
    marca_produto: string

    constructor(nome_produto: string, preco_produto: number, preco_fornecedor: number, marca_produto: string){
        this.nome_produto = nome_produto
        this.preco_produto = preco_produto
        this.preco_fornecedor = preco_fornecedor
        this.marca_produto = marca_produto
    }

    getProdutos(): void{
        console.log(`   Nome do Produto: ${this.nome_produto};
                        Marca do Produto: ${this.marca_produto};
                        Preço do Produto: ${this.preco_produto};
                        Preço do Fornecedor: ${this.preco_fornecedor};
`);}

    setProdutos(): void{
        let nome_produtoUpdate = leitor.question("Insira o nome do produto: ") 
        let marca_produtoUpdate = leitor.question("Insira a marca do produto: ")
        let preco_produtoUpdate = leitor.questionInt("Insira o preço do produto: ")
        let preco_fornecedorUpdate = leitor.questionInt("Insira o preço do produto em valor de atacado: ")

        this.nome_produto = nome_produtoUpdate
        this.preco_produto = preco_produtoUpdate
        this.preco_fornecedor = preco_fornecedorUpdate
        this.marca_produto = marca_produtoUpdate
    }

    calcularLucro(): void{
        let lucro = this.preco_produto - this.preco_fornecedor
        console.log(`O valor que está lucrando com este produto é ${lucro}`);
    }
        
}

class Venda{
    produto: Produto
    quantidade: number
    valor_total: number
    data: string

    constructor(produto: Produto, quantidade: number, data: string){
        this.produto = produto
        this.quantidade = quantidade
        this.valor_total = this.valorVenda()
        this.data = data
    }

    getVenda(): void{
        console.log(`   Nome do Produto: ${this.produto.nome_produto}
                        Quantidade de Produto: ${this.quantidade}
                        Valor Total da Venda: ${this.valorVenda()}
                        Data da Venda: ${this.data}`);
    }

    setVenda(): void{
        let produtoOuNao = leitor.question("Você gostaria de modificar o produto da venda? (s/n): ").toLowerCase()
        if(produtoOuNao == "s"){
            this.produto.setProdutos()
            let arrayInfosCompleto = alterarVenda()
            this.produto = arrayInfosCompleto[0]
            this.quantidade = arrayInfosCompleto[1]
            this.valor_total = arrayInfosCompleto[2]
            this.data = arrayInfosCompleto[3]
        } else {
            let arrayInfosCompleto = alterarVenda()
            this.produto = arrayInfosCompleto[0]
            this.quantidade = arrayInfosCompleto[1]
            this.valor_total = arrayInfosCompleto[2]
            this.data = arrayInfosCompleto[3]
        }

        function alterarVenda(): Array<any>{
            let nome_produtoUpdate = leitor.question("Insira o nome do produto: ") 
            let marca_produtoUpdate = leitor.question("Insira a marca do produto: ")
            let preco_produtoUpdate = leitor.questionInt("Insira o preço do produto: ")
            let preco_fornecedorUpdate = leitor.questionInt("Insira o preço do produto em valor de atacado: ")

            this.nome_produto = nome_produtoUpdate
            this.preco_produto = preco_produtoUpdate
            this.preco_fornecedor = preco_fornecedorUpdate
            this.marca_produto = marca_produtoUpdate

            let arrayInfosVenda: Array<any> = [nome_produtoUpdate, preco_produtoUpdate, preco_fornecedorUpdate, marca_produtoUpdate]

            return arrayInfosVenda
        }
    }

    valorVenda(): number{
        return this.quantidade * this.produto.preco_produto
    }

    desconto(): void{
        let desconto = (this.produto.preco_produto * 20) / 100
        let valor_final = this.produto.preco_produto -  desconto 
        console.log(`O produto com 20% de desconto é: ${valor_final}`);
    }
}
/*
let nomeProd = leitor.question("Insira o nome do produto: ") 
let marcaProd = leitor.question("Insira a marca do produto: ") 
let precoProd = leitor.questionInt("Insira o valor do produto: ")
let precoForn = leitor.questionInt("Insira o valor do prod. em atacado: ")

//objeto do produto
let produtoUm = new Produto(nomeProd, precoProd, precoForn, marcaProd)
*/
let televisao = new Produto("TV", 2000, 1000, "SAMSUNG")

//let vendaUm = new Venda(produtoUm, 3, "28/06/2024")
let vendaTV = new Venda(televisao, 2, '10/10/2023')

console.log("Descrição dos produtos:");

//produtoUm.getProdutos()
televisao.getProdutos()

console.log("Descrição das vendas: ");

//vendaUm.getVenda()
vendaTV.getVenda()

console.log("Mostrar descontos: ");

//vendaUm.desconto()
vendaTV.desconto()
