const Router = require('express')
const productsContent = require('../models/productsContent.js')

const productsRouter = Router();

productsRouter.get('/', (req, res) => {
    data = false
    productsContent.getData()
    .then((response) => {
        if(response.length !== 0){
            data = true
            res.render('productos', {products: response, data})
        }else{
            res.render('productos', {products: response, data})
        }
    })
})


productsRouter.get('/:id', (req, res) => {
    const {id} = req.params
    
    productsContent.getById(id)
    .then((response) => {
        if(response) {
            res.send(response)
        }else{
            res.send({ error : 'Producto no encontrado'})
        }
    })

})

productsRouter.post('', (req, res) => {
    const newProduct = req.body;

    productsContent.insertProduct(newProduct)
    res.status(308).redirect('/api/productos')
})




module.exports = productsRouter;