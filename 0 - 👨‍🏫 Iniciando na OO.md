<h1> Inciando na Programação Orientada a Objeto </h1>

<h3> Vamos iniciar a preparação do ambiente! </h3>

IDE:
Para isso precisamos instalar o [Visual Studio Code](https://code.visualstudio.com/download);
Caso prefira, pode utilizar o [VSCodium](https://vscodium.com/) que é uma versão OpenSource do nosso VSCode da Microsoft;

Agora para utilizarmos a linguagem, teremos que instalar algumas coisinhas:
Para programar com o Javascript e fazer funcionar no terminal, é necessário instalar o [NodeJS](https://nodejs.org/en/download) localmente.
Para instalar o TypeScript no seu computador, após o Node, é pelo terminal, você pode instalar pressionando CTRL + ' no seu VSCode ou pode abrir um Prompt de Comando ou PowerShell e digitar:
```
npm install -g typescript
```
O -g é para instalar globalmente no seu computador.

Agora que o ambiente está praticamente pronto, só falta organizar seu package.json se assim quiser.
Caso não, para você utilizar seus códigos, você irá transpilar para javascript e depois interpretar no terminal dessa forma:
```
npx tsc arquivo.ts
node arquivo.js
```

Caso queiram utilizar o .json, digitem:
```
npm init
```

e depois modifique seu package.json inserindo:
```json
script{
  start: "npx tsc & node arquivo.ts"
}
```

sendo *arquivo.ts* o nome do arquivo que está em desenvolvimento.
