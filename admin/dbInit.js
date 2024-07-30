require('dotenv').config({path: ".env.local"})
const pg = require('pg')

const { Client } = pg

const client = new Client({
  user: "postgres",
  password: process.env.DATABASE_PASSWORD,
  host: process.env.DATABASE_HOST,
  port: 5432,
  database: "postgres",
})

const dbInit = async () => {
  try {
    await client.connect()
    await client.query(`CREATE DATABASE "${process.env.DATABASE_NAME}"`)
    console.log('Database created successfully!')
    await client.end()
    process.exit()
  } catch (error) {
    console.log(error.message)
    return error
  }
}
dbInit()