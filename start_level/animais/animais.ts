export class Animal {
    nome: string;
  
    constructor(nome: string) {
      this.nome = nome;
    }
  
    fazerBarulho(): void {
      console.log('Barulho genérico de animal.');
    }
  }
  
 export class Cachorro extends Animal {
    fazerBarulho(): void {
      console.log('Au Au!');
    }
  }
  
 export class Gato extends Animal {
    fazerBarulho(): void {
      console.log('Miau!');
    }
  }
  
 export class Passaro extends Animal {
    fazerBarulho(): void {
      console.log('Piu Piu!');
    }
  }
  

  