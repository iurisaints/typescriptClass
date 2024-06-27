class Livro{
    titulo: string
    autor: string
    anoPublicacao: number

    constructor(titulo: string, autor: string, anoPublicacao: number){
        this.titulo = titulo
        this.autor = autor
        this.anoPublicacao = anoPublicacao
    }

    obterDetalhes(): void{
        console.log(`Titulo: ${this.titulo}, Autor: ${this.autor}, Ano Publi.: ${this.anoPublicacao}`);
        
    }
}

let livro = new Livro("a", "b", 2024)
livro.obterDetalhes()