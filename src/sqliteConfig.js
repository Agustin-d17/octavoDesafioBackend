const options = {
    client: 'sqlite3',
    connection: {
        filename: '../data/ecommerce.sqlite'
    },
    useNullAsDefault: true
}

module.exports = { options }