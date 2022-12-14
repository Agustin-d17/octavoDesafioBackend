const Router = require('express')
const content = require('../models/content')

const router = Router();

router.get('/', (req, res) => {
    data = false
    content.getAll()
    .then((response) => {
        if(response.length !== 0){
            data = true
            res.render('productos', {products: response, data})
        }else{
            res.render('productos', {products: response, data})
        }
    })
})

router.get('/:id', (req, res) => {
    const {id} = req.params
    
    content.getById(id)
    .then((response) => {
        if(response) {
            res.send(response)
        }else{
            res.send({ error : 'Producto no encontrado'})
        }
    })

})

router.post('', (req, res) => {
    const newProduct = req.body;

    content.save(newProduct)
    res.status(308).redirect('/api/productos')
})

router.put('/:id', (req, res) => {
    const { id } = req.params

    const modifiedProduct = req.body

    content.getById(id)
    .then((response) => {
        if(response) {
            content.modifyById(id, modifiedProduct)
            res.status(201).send({ status: 'Producto modificado' })
        }else{
            res.send({ error : 'Producto no encontrado'})
        }
    })

})

router.delete('/:id', (req, res) => {
    const { id } = req.params

    content.deleteById(id)
    .then((response) => res.status(201).send(response))
})

module.exports = router