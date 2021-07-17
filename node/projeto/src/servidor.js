const porta = 3003;

const express = require('express');
const db = require('./db');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/produtos', (req, res) => {
  res.send(db.getProducts());  // converte para json automaticamente
})

app.get('/produtos/:id', (req, res) => {
  res.send(db.getProduct(req.params.id));
})

app.post('/produtos', (req, res) => {
  const product = db.saveProduct({
    name: req.body.name,
    price: req.body.price
  })
  res.send(product);
})

app.listen(porta, () => {
  console.log(`Servidor executando na porta ${porta}.`);
})