const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3000;  // porta do serviço
const mysql  = require('mysql'); // objeto mysql
// configurar o body parse para pegar POSTS
app.use(bodyParser.urlencoded( { extended: true}));
app.use(bodyParser.json());
// definindo rotas
const router = express.Router();
router.get('/', (req, res) => res.json({message: "Funcionando!!!"}));
app.use('/', router);
// iniciar o serviço
app.listen(port);
console.log('API Funcionando!!!');

// Função para executar comandos SQL
function execSqlQuery(sqlQry, res) {
    // conexão base de dados
    const connection = mysql.createConnection({
        host: 'localhost',
        port: '3306',
        user: 'ale',
        password : 'ale',
        database: 'jpadb'
    });

    // setenças SQL
    connection.query(sqlQry, function(error, results, fields) {
        if(error)
            res.json(error);
        else
            res.json(results);
        connection.end();
        console.log(sqlQry + " - executou!");
    });
}

// Rotas para todos o cursos
router.get('/cursos', (req, res) =>{
    execSqlQuery("Select * From Curso", res);
});

// Rota para um curso especifico
router.get('/cursos/:id?', (req, res) => {
    let filter ='';
    if(req.params.id)
        filter = 'Where id ='+parseInt(req.params.id);
        execSqlQuery("Select * From Curso "+filter, res);
});

// Rota para exclusão
router.delete('/cursos/:id', (req, res) => {
    execSqlQuery('Delete From Curso Where id='+parseInt(req.params.id), res);
});

// Insert 
router.post('/cursos',(req, res) => {
    const descricao = req.body.descricao.substring(0, 120);
    const duracao = parseInt(req.body.duracao); 
    const preco = parseDouble(req.body.preco);
    execSqlQuery(`Insert into Curso (descricao, duracao, preco) Values (${descricao},${duracao},${preco})`)
});