const express = require('express')
const app = express()

app.get('/', function (req, res){
    res.send('Hello World!')
})

app.get('/oi', function (req, res) {
    res.send('Ola! Mundo')
})

app.get('/welcome', function (req, res){
    res.send('Seja Bem Vindo ao Curso!')
})

app.listen(3000)