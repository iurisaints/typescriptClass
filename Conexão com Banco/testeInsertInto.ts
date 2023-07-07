// Supondo que você tenha as variáveis "name" e "value" com os valores a serem inseridos
const name = "exemplo";
const value = 10;

// Utilizando uma biblioteca de banco de dados, como o MySQL ou PostgreSQL, você pode fazer o seguinte:
const query = `INSERT INTO teste (name, value) VALUES ('${name}', ${value})`;

// Em seguida, você executa a query no banco de dados
// Por exemplo, utilizando a biblioteca do MySQL:
connection.query(query, (error, results) => {
  if (error) {
    console.error(error);
  } else {
    console.log("Dados inseridos com sucesso!");
  }
});
