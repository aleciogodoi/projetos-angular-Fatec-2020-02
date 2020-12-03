const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'ale',
    password : 'ale',
    database: 'jpadb'
});

connection.connect(function(err){
    if(err) 
        return console.log(err);
    else
        console.log('Conectou!!!');
    createTable(connection);
    insert(connection);
});

function createTable(conn) {
    const sql = "CREATE TABLE IF NOT EXISTS Produto("+
        "IdProduto int AUTO_INCREMENT primary key," +
        "NomeProduto varchar(100) not null, " +
        "Preco decimal(10,2) );";
        conn.query(sql, function(error, results, fields){
            if(error)
                return console.log(error);
            else
                return console.log('Criou a Tabela Produto!!!');
        });
}

function insert(conn) {
    const sql = "INSERT INTO Produto (NomeProduto, Preco) Values " +
                "('Geladeira',1070.65),('Fogão 4 bocas',568.76), ('Celular',800.35),('Fogão 6 bocas',1238.26)";
        conn.query(sql, function(error, results, fields){
            if(error)
                return console.log(error);
            else
                return console.log('Incluiu as informações');
        });
}
