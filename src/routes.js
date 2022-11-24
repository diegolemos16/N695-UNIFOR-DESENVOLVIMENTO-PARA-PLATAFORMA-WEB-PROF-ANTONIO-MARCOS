    const { Router } = require('express');

    const ProductController = require('./Controllers/ProductController');

    const routes = Router();

    routes.get('/health', (req, res) => {
        return res.status(200).json({ message: "Server is on..." });
    });
    
    // ROTAS DO MÉTODOS POST/GET/PUT/DELETE
    routes.post('/products', ProductController.post);
    routes.get('/products', ProductController.get);
    routes.get('/products/:id', ProductController.show);
    routes.put('/products/:id', ProductController.put);
    routes.delete('/products/:id', ProductController.delete);

    module.exports = routes;

