const mongoose = require('mongoose');

//INTERAÇÃO COM BANCO DE DADOS MONGODB

async function startDB(){
    await mongoose.connect('mongodb+srv://mid:compras123@cluster0.3ruj5bf.mongodb.net/test');
}

module.exports = startDB;