const knex = require('knex') 

module.exports = knex

module.exports = {
  
    client:'postgresql',
    connection: {
      connectionString: process.env.DATABASE_URL,
      ssl: {
        rejectUnauthorized: false
      },
      connectionOptions: {
        DateStyle: 'ISO,DMY',
      }
    }
    
  
}
