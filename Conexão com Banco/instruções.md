Para fazer uma conexão com um banco de dados MySQL usando TypeScript, você pode seguir os seguintes passos:

1. Instale o pacote `mysql2` usando o npm:
```
npm install mysql2
```

2. Importe as bibliotecas necessárias no seu arquivo TypeScript:
```typescript
import * as mysql from 'mysql2/promise';
```

3. Configure as informações de conexão com o banco de dados:
```typescript
const connectionConfig = {
  host: 'localhost',
  user: 'seu_usuario',
  password: 'sua_senha',
  database: 'seu_banco_de_dados',
};
```

4. Crie uma função para realizar consultas no banco de dados:
```typescript
async function queryDatabase(query: string, params: any[] = []) {
  const connection = await mysql.createConnection(connectionConfig);
  const [results] = await connection.execute(query, params);
  await connection.end();
  return results;
}
```

5. Execute uma consulta no banco de dados usando a função `queryDatabase`:
```typescript
async function exampleQuery() {
  try {
    const query = 'SELECT * FROM tabela_exemplo WHERE campo = ?';
    const params = ['valor_do_campo'];
    const results = await queryDatabase(query, params);
    console.log(results);
  } catch (error) {
    console.error('Erro ao executar a consulta:', error);
  }
}

exampleQuery();
```

Certifique-se de substituir os valores `'seu_usuario'`, `'sua_senha'`, `'seu_banco_de_dados'`, `'tabela_exemplo'`, `'campo'` e `'valor_do_campo'` pelos valores corretos para o seu banco de dados e tabela. Além disso, certifique-se de ter o MySQL instalado e em execução antes de executar o código.
