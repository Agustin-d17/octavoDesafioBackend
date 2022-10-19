const {options} = require('../config/mysqlConfig.js')
const knex = require('knex')(options)
const DataBase = require('../controllers/dataBase')

const productsContent = new DataBase('products', knex)

const products = [
    {id:"1",title:"Keyboard",price:"18.99",thumbnail:"https://cdn2.iconfinder.com/data/icons/gaming-flat-1/59/031_-_Game_Keyboard-256.png"},
    {id:"2",title:"Mouse",price:"10.00",thumbnail:"https://cdn4.iconfinder.com/data/icons/filled-lineo-computer/48/Rgb_mouse-256.png"},
    {id:"3",title:"Headphones",price:"12.99",thumbnail:"https://cdn3.iconfinder.com/data/icons/music-59/512/Music-04-256.png"},
    {title:"Mouse Pad",price:"4",thumbnail:"https://cdn0.iconfinder.com/data/icons/back-to-school-smooth-vol-2/256/MOUSE_PAD-256.png","id":"4"},
    {title:"Monitor",price:"25",thumbnail:"https://cdn0.iconfinder.com/data/icons/devices-42/512/Normal_LCD-256.png","id":"5"}
]

// productsContent.createTable()
// products.forEach(product => productsContent.insertProduct(product))

module.exports = productsContent

