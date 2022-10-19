const express = require('express')
const { Server: HttpServer } = require('http')
const { Server: IOServer } = require('socket.io')
const hbs = require('express-handlebars')
const productsContent = require('./models/productsContent.js')
const productsRouter = require('./routes/productsRouter')
const messagesContent = require('./models/messagesContent.js')


const app = express()
const httpServer = new HttpServer(app)
const io = new IOServer(httpServer)

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('../public'))

app.engine('hbs', hbs.engine({
    extname: '.hbs',
    partialsDir: './views/partials',
    layoutsDir: './views/layouts',
    defaultLayout: 'layout.hbs'
}));

app.set('views', './views')
app.set('view engine', 'hbs')

app.get('/', (req, res) => {
    data = false
    productsContent.getData()
    .then((response) => {
        if(response.length !== 0){
            data = true
            res.render('index', {products: response, data})
        }else{
            res.render('index', {products: response, data})
        }
    })
})

app.use('/api/productos', productsRouter)

const PORT = 8000
const server = httpServer.listen(PORT, () => {
    console.log(`Listening on port ${server.address().port}`)
})

// const messages = []

io.on('connection',(socket) => {
    // console.log('A new client has connected')
    // socket.emit('messages', {messages})
    messagesContent.getData()
    .then(response => {socket.emit('messages', response)})
    

    socket.on('new-message', async (message) => {
        // messages.push(message);
        // io.sockets.emit('messages', {messages})
        await messagesContent.insertMessage(message)
        messagesContent.getData()
        .then(response => {io.sockets.emit('messages', response)})
    })
})