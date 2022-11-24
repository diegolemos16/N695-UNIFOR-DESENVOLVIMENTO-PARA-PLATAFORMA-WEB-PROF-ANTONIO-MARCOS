const ProductModel = require ('../Models/ProductModel');


//METODOS POST/GET/PUT/DELETE

class ProductController{
    //POST - INSERIR DADOS NO BANCO DE DADOS/BACKEND
    async post(req, res) {
        try {

            //OBRIGATORIEDADE DE TODOS OS CAMPOS
            const{ nome, sobrenome, endereco, tipodepagamento, nomebeneficiariodocartao, numerodocartao, datadevalidade, cvv } = req.body;
            
            if(!nome || !sobrenome || !endereco || !tipodepagamento || !nomebeneficiariodocartao || !numerodocartao || !datadevalidade || !cvv){
                return res.status(400).json({ message: "Todos os campos são obrigatórios"});
            }

            //CHECAGEM SE PAGAMENTO JÁ EXISTE PARA O MESMO CLIENTE
            const productAlreadyExists = await ProductModel.findOne({ nome, sobrenome, numerodocartao, datadevalidade, cvv });

            if(productAlreadyExists){
                return res.status(400).json({ message: "Cartão já cadastrado para este cliente"});
            }
            
            const createdProduct = await ProductModel.create(req.body);

            return res.status(200).json(createdProduct);
        } catch (error) {
            return res.status(404).json({ message: "Erro no cadastramento do pagamento"});
        }
    }
    //GET - TODOS - EXIBE TODOS OS DADOS DE PAGAMENTO CADASTRADOS/ENVIADOS NO BANCO DE DADOS/PARA O BACKEND
    async get(req, res) {
       try {
        const products = await ProductModel.find();

        return res.status(200).json(products);
       } catch (error) {
        return res.status(404).json({ message: "Erro ao listar pagamento"});
       }

    }
    //GET - ID ESPECÍFICO - EXIBE UM CADASTRAMENTO ESPECÍFICO DE PAGAMENTO PELO ID
    async show(req, res) {
        try{
            const { id } = req.params;
        const product = await ProductModel.findById(id);

        if(!product){
            return res.status(404).json({ message: "Pagamento não foi cadastrado"});
        }

        return res.status(200).json(product);
        
    } catch (error){
        return res.status(404).json({ message: "Verifique o id do pagamento"});
    }

    }
    //PUT - ALTERA OS DADOS DE PAGAMENTO ESPECÍFICOS POR ID
    async put(req, res) {
        try {
            const { id } = req.params;

        await ProductModel.findByIdAndUpdate(id, req.body);

        return res.status(200).json({ message: "Pagamento atualizado"});
        } catch (error) {
            return res.status(404).json({ message: "Falha na atualização do pagamento"});
        }
    }

    //DELETE - EXCLUI OS DADOS DE PAGAMENTO ESPEFÍFICOS POR ID
    async delete(req, res) {
        try {
            const { id } = req.params;

            const productDeleted = await ProductModel.findByIdAndDelete(id);

            if(!productDeleted){
                return res.status(404).json({message: "Pagamento não existe"});
            }

            return res.status(200).json({message: "Pagamento excluído"});

        } catch (error) {
            return res.status(404).json({ message: "Falha na exclusão do pagamento"});
        }
    }
}

module.exports = new ProductController();

