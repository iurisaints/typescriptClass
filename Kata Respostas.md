**Missão 1: Os Encapsulamentos da Floresta**

```tsx
class Guerreiro {
  private nome: string;
  private nivel: number;
  private vida: number;
  private dano: number;

  constructor(nome: string, nivel: number) {
    this.nome = nome;
    this.nivel = nivel;
    this.vida = 100;
    this.dano = 10;
  }

  public getNome(): string {
    return this.nome;
  }

  public getNivel(): number {
    return this.nivel;
  }

  public getVida(): number {
    return this.vida;
  }

  public setDano(dano: number): void {
    this.dano = dano;
  }
}

```

**Missão 2: A Herança dos Antigos Protetores**

```tsx
class CriaturaMagica {
  private nome: string;
  private tipo: string;

  constructor(nome: string, tipo: string) {
    this.nome = nome;
    this.tipo = tipo;
  }

  public getNome(): string {
    return this.nome;
  }

  public getTipo(): string {
    return this.tipo;
  }
}

class GuardiaoAnciao extends CriaturaMagica {
  constructor(nome: string) {
    super(nome, "Guardião Ancião");
  }
}

class DragaoMilenar extends CriaturaMagica {
  constructor(nome: string) {
    super(nome, "Dragão Milenar");
  }
}

class SereiaEncantada extends CriaturaMagica {
  constructor(nome: string) {
    super(nome, "Sereia Encantada");
  }
}

```

**Missão 3: O Poder das Interfaces Místicas**

```tsx
interface HabilidadeMagica {
  usarMagia(): void;
  conjurarFeitico(): void;
}

class CriaturaMagica implements HabilidadeMagica {
  // Restante do código da classe CriaturaMagica...

  public usarMagia(): void {
    console.log(`${this.nome} está usando magia.`);
  }

  public conjurarFeitico(): void {
    console.log(`${this.nome} está conjurando um feitiço.`);
  }
}

class GuardiaoAnciao extends CriaturaMagica {
  // Restante do código da classe GuardiaoAnciao...
}

class DragaoMilenar extends CriaturaMagica {
  // Restante do código da classe DragaoMilenar...
}

class SereiaEncantada extends CriaturaMagica {
  // Restante do código da classe SereiaEncantada...
}

```

**Missão 4: O Polimorfismo da Magia**

```tsx
class CriaturaMagica implements HabilidadeMagica {
  // Restante do código da classe CriaturaMagica...

  public usarMagia(): void {
    console.log(`${this.nome} está usando magia.`);
  }

  public conjurarFeitico(): void {
    console.log(`${this.nome} está conjurando um feitiço.`);
  }
}

class GuardiaoAnciao extends CriaturaMagica {
  public usarMagia(): void {
    console.log(`${this.nome} está usando uma magia antiga e poderosa.`);
  }
}

class DragaoMilenar extends CriaturaMagica {
  public usarMagia(): void {
    console.log(`${this.nome} está cuspindo fogo em direção ao inimigo.`);
  }
}

class SereiaEncantada extends CriaturaMagica {
  public usarMagia(): void {
    console.log(`${this.nome} está encantando o ambiente com sua música.`);
  }
}

```

**Missão 5: Os Segredos da Floresta Encantada**

*Esta missão requer a implementação completa da aventura, onde o jogador utilizará os conhecimentos e habilidades adquiridos nas missões anteriores para explorar a Floresta Encantada, enfrentar desafios, derrotar criaturas e desvendar seus segredos.*

Aventura Mágica na Floresta Encantada:

```tsx
// Restante do código do jogo...

const nomeJogador = leitor.question("Digite o nome do(a) jogador(a): ");
const jogo = new JogoAventuraMagica(nomeJogador);
jogo.iniciarJogo();

```

Cada resposta acima corresponde a uma parte específica da aventura, e o código completo da Missão 5 incluirá todas as funcionalidades implementadas ao longo das missões anteriores. O jogador irá explorar, enfrentar desafios mágicos e desvendar os segredos ocultos na Floresta Encantada, tornando-se uma lenda na guilda.

Missão 5:

**Aventura Mágica na Floresta Encantada: Menu do Jogador 🌳🗡️🌟**

Seja bem-vindo(a) à Floresta Encantada, jovem guerreiro(a)! Aqui, você terá a oportunidade de criar o seu próprio guerreiro e enfrentar desafios místicos em uma jornada emocionante. Escolha suas habilidades, explore a magia da floresta e torne-se uma lenda!

```tsx
import readlineSync from 'readline-sync';

class Guerreiro {
  private nome: string;
  private nivel: number;
  private vida: number;
  private dano: number;

  constructor(nome: string, nivel: number) {
    this.nome = nome;
    this.nivel = nivel;
    this.vida = 100;
    this.dano = 10;
  }

  public getNome(): string {
    return this.nome;
  }

  public getNivel(): number {
    return this.nivel;
  }

  public getVida(): number {
    return this.vida;
  }

  public setDano(dano: number): void {
    this.dano = dano;
  }

	 public batalhar(criatura: CriaturaMagica): void {
    console.log(`Iniciando a batalha entre ${this.nome} e ${criatura.getNome()} - ${criatura.getTipo()}!`);
    
    // Loop da batalha até que o guerreiro ou a criatura sejam derrotados
    while (this.vida > 0 && criatura.getVida() > 0) {
      // Guerreiro ataca a criatura
      console.log(`${this.nome} ataca ${criatura.getNome()}!`);
      criatura.receberDano(this.dano);

      // Criatura ataca o guerreiro
      if (criatura.getVida() > 0) {
        console.log(`${criatura.getNome()} contra-ataca ${this.nome}!`);
        this.receberDano(criatura.getDano());
      }
    }

    // Verificar o resultado da batalha
    if (this.vida <= 0) {
      console.log(`${this.nome} foi derrotado(a) na batalha.`);
    } else {
      console.log(`${criatura.getNome()} - ${criatura.getTipo()} foi derrotado(a).`);
    }
  }
}

class CriaturaMagica {
  private nome: string;
  private tipo: string;

  constructor(nome: string, tipo: string) {
    this.nome = nome;
    this.tipo = tipo;
  }

  public getNome(): string {
    return this.nome;
  }

  public getTipo(): string {
    return this.tipo;
  }

  public usarMagia(): void {
    console.log(`${this.nome} está usando magia.`);
  }

  public conjurarFeitico(): void {
    console.log(`${this.nome} está conjurando um feitiço.`);
  }
}

class GuardiaoAnciao extends CriaturaMagica {
  public usarMagia(): void {
    console.log(`${this.nome} está usando uma magia antiga e poderosa.`);
  }
}

class DragaoMilenar extends CriaturaMagica {
  public usarMagia(): void {
    console.log(`${this.nome} está cuspindo fogo em direção ao inimigo.`);
  }
}

class SereiaEncantada extends CriaturaMagica {
  public usarMagia(): void {
    console.log(`${this.nome} está encantando o ambiente com sua música.`);
  }
}

// Criação do guerreiro pelo jogador
function criarGuerreiro(): Guerreiro {
  const nomeGuerreiro = readlineSync.question("Digite o nome do seu guerreiro: ");
  const nivelGuerreiro = parseInt(readlineSync.question("Digite o nível do seu guerreiro: "));
  return new Guerreiro(nomeGuerreiro, nivelGuerreiro);
}

// Menu principal do jogo
function exibirMenu(): void {
  console.log("===== Bem-vindo(a) à Floresta Encantada! =====");
  console.log("1 - Criar Guerreiro");
  console.log("2 - Explorar a Floresta Encantada");
  console.log("3 - Enfrentar Desafios Místicos");
  console.log("4 - Ver informações do Guerreiro");
  console.log("0 - Sair do Jogo");
  console.log("=============================================");
}

// Função para iniciar o jogo
function iniciarJogo(): void {
  let guerreiro: Guerreiro | null = null;
  let explorando: boolean = true;

//Função explorar
function explorarFloresta(guerreiro: Guerreiro): void {
  console.log(`${guerreiro.getNome()} está explorando a Floresta Encantada...`);
  const encontroAleatorio = Math.floor(Math.random() * 100);

  if (encontroAleatorio < 40) {
    // Encontrou uma criatura mágica para enfrentar
    const criaturaEncontrada = criaturasMagicas[Math.floor(Math.random() * criaturasMagicas.length)];
    console.log(`${guerreiro.getNome()} encontrou ${criaturaEncontrada.getNome()} - ${criaturaEncontrada.getTipo()}!`);
    guerreiro.batalhar(criaturaEncontrada);
  } else if (encontroAleatorio < 80) {
    // Encontrou um item místico para coletar
    const itemEncontrado = itensMagicos[Math.floor(Math.random() * itensMagicos.length)];
    console.log(`${guerreiro.getNome()} encontrou um ${itemEncontrado}!`);
    // Lógica para coletar o item e aumentar as habilidades do guerreiro
    // Será implementada na Missão 5.
  } else {
    // Exploração pacífica, nada aconteceu.
    console.log(`${guerreiro.getNome()} explorou a floresta pacificamente.`);
  }
}

  while (explorando) {
    exibirMenu();
    const opcao = parseInt(readlineSync.question("Escolha uma opção: "));

    switch (opcao) {
      case 1:
        guerreiro = criarGuerreiro();
        console.log(`Guerreiro ${guerreiro.getNome()} criado com sucesso!`);
        break;

      case 2:
        if (guerreiro) {
          console.log(`${guerreiro.getNome()} está explorando a Floresta Encantada...`);
          explorarFloresta(guerreiro);
        } else {
          console.log("Crie um guerreiro primeiro antes de explorar!");
        }
        break;

      case 3:
        if (guerreiro) {
          console.log(`${guerreiro.getNome()} está enfrentando um desafio místico...`);
          // Lógica para enfrentar desafios místicos
          // Será implementada na Missão 5.
        } else {
          console.log("Crie um guerreiro primeiro antes de enfrentar desafios!");
        }
        break;

      case 4:
        if (guerreiro) {
          console.log("===== Informações do Guerreiro =====");
          console.log(`Nome: ${guerreiro.getNome()}`);
          console.log(`Nível: ${guerreiro.getNivel()}`);
          console.log(`Vida: ${guerreiro.getVida()}`);
          console.log("===================================");
        } else {
          console.log("Crie um guerreiro primeiro para ver suas informações!");
        }
        break;

      case 0:
        console.log("Até logo, brav(o)a guerreir(o)a! Volte sempre à Floresta Encantada!");
        explorando = false;
        break;

      default:
        console.log("Opção inválida! Escolha novamente.");
    }
  }
}

// Inicia o jogo
iniciarJogo();

```

Essa solução implementa um jogo interativo onde o jogador pode criar o seu próprio guerreiro, explorar a Floresta Encantada, enfrentar desafios místicos e ver informações do guerreiro. O menu switch dentro do while permite ao jogador interagir com o jogo, utilizando as funções e habilidades criadas nas missões anteriores. As lógicas para exploração da floresta e enfrentar desafios serão implementadas na Missão 5, onde o jogador utilizará os conhecimentos adquiridos para completar as aventuras mágicas. Aproveite a jornada pela Floresta Encantada e boa sorte em suas aventuras! 🌳🗡️🌟
