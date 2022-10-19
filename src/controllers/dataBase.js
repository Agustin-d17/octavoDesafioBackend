class DataBase {
    constructor(table, knex){
        this.table = table;
        this.knex = knex;
    }

    async createTable(){
        await this.knex.schema.createTable(this.table, table => {
            table.increments('id')
            table.string('title')
            table.integer('price')
            table.string('thumbnail')
        })
        .then(() => console.log('Tabla creada'))
        .catch(error => console.log(error))
        .finally(() => this.knex.destroy())
    }

    async insertProduct(product){
        await this.knex(this.table).insert(product)
        .then(() => console.log('Producto agregado correctamente'))
        .catch((error) => console.log(error))
        .finally(() => this.knex.destroy())
    }

    async getData(){
        await this.knex.from(this.table).select('*')
        .then(data => {return data})
        .catch(error => console.log(error))
        .finally(() => this.knex.destroy())
    }

    async getById(id){
        await this.knex.from(this.table).select('*').where('id', '=', id)
        .then(data => {return data})
        .catch(error => console.log(error))
        .finally(() => this.knex.destroy())
    }
}

module.exports = DataBase