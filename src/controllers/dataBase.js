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
    }

    async insertProduct(product){
        await this.knex(this.table).insert(product)
        .then(() => console.log('Producto agregado correctamente'))
        .catch((error) => console.log(error))
    }

    async getData(){
        try{
            const content = await this.knex.from(this.table).select('*')
            return content
        }catch(error) {
            console.log(error)
        } 
    
    }

    async getById(id){
        try{
            const element = await this.knex.from(this.table).select('*').where('id', '=', id)
        
            return element
        }catch(err){
            console.log(err)
        }
    }
}

module.exports = DataBase