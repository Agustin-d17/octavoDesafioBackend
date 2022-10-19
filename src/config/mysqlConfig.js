//Archivo options para knex
const options = {
    client: 'mysql',
    connection: {
        host: '127.0.0.1',
        user: 'root',
        password: '',
        data: 'test'
    }
}

module.exports = { options }