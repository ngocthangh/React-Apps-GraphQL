require('dotenv').config()
import 'reflect-metadata'
import express from 'express'
import { createConnection } from 'typeorm'


const main = async() => {
    await createConnection({
        type: 'postgres',
        database: 'reddit',
        host: 'localhost',
        port: 54321,
        username: process.env.DB_USERNAME_DEV,
        password: process.env.DB_PASSWORD_DEV,
        logging: true,
        synchronize: true
    })

    const app = express()

    app.listen(4000, () => console.log('SERVER STARTED PORT 4000'))
}

main().catch(error => console.log(error))