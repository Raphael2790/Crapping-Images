const express = require('express');
const nunjucks = require('nunjucks');
const dotenv = require('dotenv/config')

const server = express();
const port = process.env.PORT || 5000;

const scrap = require('./assets/scrapping');

server.use(express.static('public'));

server.set('view engine', 'njk');

nunjucks.configure('views',{
  express:server,
  autoescape:false
});

server.listen(port, (err) => {  
  if(err) {
    return `Erro ${err}`
  }

  console.log(`Servidor rodando na porta ${port}`);
})