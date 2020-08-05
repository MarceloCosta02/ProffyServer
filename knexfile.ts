import path from 'path';

module.exports = {
    client: 'sqlite3',
    connection: { // O __dirname sempre retorna o nome do diretorio que executa o mesmo
        filename: path.resolve(__dirname, 'src', 'database', 'database.sqlite')
    },
    migrations: {
        directory: path.resolve(__dirname, 'src', 'database', 'migrations')
    },
    useNullAsDefault: true,
}