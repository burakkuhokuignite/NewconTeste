const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const mysql = require('mysql');

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'cruddb',
});


app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));


app.get('/api/get', (err,res) =>{
    const sqlSelect = "SELECT * FROM pontos_turisticos"
    db.query(sqlSelect, (err, result) =>{
        res.send(result);
    })
});

app.post("/api/insert", (req,res) =>{

    const nomeLugar = req.body.nomeLugar;
    const descricaoLugar = req.body.descricaoLugar;
    const enderecoLugar = req.body.enderecoLugar;
    const estadoLugar = req.body.estadoLugar;
    const cidadeLugar = req.body.cidadeLugar;

    const sqlInsert = "INSERT INTO pontos_turisticos (nome, descricao, endereco, estado, cidade) VALUES (?,?,?,?,?)";
    db.query(sqlInsert, [nomeLugar, descricaoLugar, enderecoLugar, estadoLugar, cidadeLugar], (err, result) =>{
        console.log(result);
    });
});

app.get('/', (req,res) =>{
    
});

app.delete('/api/delete/:nomeLugar', (req,res) =>{
    const nomeLugar = req.params.nomeLugar;
    console.log(nomeLugar)
    const sqlDelete = "DELETE FROM pontos_turisticos WHERE nome = ?"
    db.query(sqlDelete, nomeLugar, (err, result) =>{
        if(err) console.log(err);
    });
})


app.delete('/api/delete/:nomeLugar', (req,res) =>{
    const nomeLugar = req.params.nomeLugar;
    console.log(nomeLugar)
    const sqlDelete = "DELETE FROM pontos_turisticos WHERE nome = ?"
    db.query(sqlDelete, nomeLugar, (err, result) =>{
        if(err) console.log(err);
    });
})


app.listen(3001, () =>{
    console.log("Rodando");
})