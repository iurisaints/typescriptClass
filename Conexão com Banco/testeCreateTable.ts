import { createConnection } from 'typeorm';

async function createTable() {
  const connection = await createConnection({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'seu_usuario',
    password: 'sua_senha',
    database: 'seu_banco_de_dados',
  });

  await connection.query(`
    CREATE TABLE sua_tabela (
      id SERIAL PRIMARY KEY,
      nome VARCHAR(255) NOT NULL,
      idade INT NOT NULL
    );
  `);

  await connection.close();
}

createTable()
  .then(() => console.log('Tabela criada com sucesso.'))
  .catch((error) => console.log('Erro ao criar tabela:', error));
