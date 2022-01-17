const express = require('express');
const app = express();
const mysql = require('mysql');

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'cruddb',
});



app.get('/', (req,res) =>{
    
});

app.listen(3001, () =>{
    console.log("Rodando");
})