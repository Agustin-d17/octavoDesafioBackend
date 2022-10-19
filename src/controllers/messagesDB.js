class MessagesDB {
    constructor(table, knex){
        this.table = table;
        this.knex = knex;
    }

    async createTable(){
        await this.knex.schema.createTable(this.table, table => {
            table.string('author')
            table.time('date')
            table.string('text')
        })
        .then(() => console.log('Tabla creada'))
        .catch(error => console.log(error))
    }

    async insertMessage(message){
        await this.knex(this.table).insert(message)
        .then(() => console.log('Mensaje agregado correctamente'))
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
}

module.exports = MessagesDB