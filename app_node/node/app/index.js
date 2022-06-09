const express = require('express')
const app = express()
const port = 3000


const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'

}
const mysql = require('mysql')
const connection = mysql.createConnection(config)

const sql = `INSERT INTO people ( name ) VALUES ('Ricardo');`
const querySQL = `SELECT name FROM people WHERE id = 1;`

let nome;

connection.query(sql)
connection.query(querySQL, (err, result, fields) => {
    console.log("result = " + JSON.stringify(result))
    nome = result[0].name
})
//connection.end()

app.get('/', (req, res) => {
    res.send('<h1 style="text-align=center">FullCycle</h1><br /><br /><br />' +
              '<p style="text-align=center">'+ nome + '</p>')
})

app.listen(port, () => {
    console.log("Escutando na porta " + port)
})