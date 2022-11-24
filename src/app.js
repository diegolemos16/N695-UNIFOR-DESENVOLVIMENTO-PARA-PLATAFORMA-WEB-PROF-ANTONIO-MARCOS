const express = require('express');
const routes = require('./routes');

const app = express();

app.use(express.json());
app.use(routes);

module.exports = app;

//PROJETO DO ALUNO DIEGO LEMOS MACHADO - MATRÍCULA 2124689 PARA A CADEIRA N695 - EAD UNIFOR - DESENVOLVIMENTO PARA PLATAFORMA WEB  (PROFESSOR ANTONIO MARCOS)