import express from "express";
import { AppDataSource } from "./data-source";


AppDataSource.initialize().then(() => {
    const app  = express()
    app.use(express.json())

    app.get('/', (req, res) => {
        return res.json('Banco de dados iniciado com sucesso.')
    })

    return app.listen(process.env.SERVER_PORT)
});
