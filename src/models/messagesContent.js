const {options} = require('../config/sqliteConfig.js')
const knex = require('knex')(options)
const MessagesDB = require('../controllers/messagesDB.js')

const messagesContent = new MessagesDB('messages', knex)

// messagesContent.createTable()

module.exports = messagesContent