import knex from 'knex';
import path from 'path';

const db = knex({
    client: 'sqlite3',
    connection: { // O __dirname sempre retorna o nome do diretorio que executa o mesmo
        filename: path.resolve(__dirname, 'database.sqlite')
    },
    useNullAsDefault: true, // seta como nulo nos campos nao preenchidos
});

export default db;