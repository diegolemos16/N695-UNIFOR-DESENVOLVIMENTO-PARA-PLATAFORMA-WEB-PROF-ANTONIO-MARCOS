const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

//AQUI CONSTAM OS PARÂMETROS QUE SERÃO MANIPULADOS NO BANCO DE DADOS/BACKEND - 
//TRATA-SE DE UM CADASTRAMENTO DE PAGAMENTO NO SITE COM DADOS DO CLIENTE (NOME, SOBRENOME, ENDEREÇO), -
// E COM DADOS DE PAGAMENTO (TIPO - DÉBITO OU CRÉDITO, DADOS DO CARTÃO)

const ProductSchema = new Schema({
  id: ObjectId,
  nome: String,
  sobrenome: String,
  endereco: String,
  tipodepagamento: String,
  nomebeneficiariodocartao: String,
  numerodocartao: String,
  datadevalidade: String,
  cvv: Number
});

const ProductModel = mongoose.model('products', ProductSchema);

module.exports = ProductModel;