import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import adicionarRotas from './routes.js'

const servidor = express()
servidor.use = (express.json())
servidor.use = (cors())

adicionarRotas(servidor)

const PORT = process.env.PORT

servidor.listen(PORT, () => console.log(`Api subiu na porta ${PORT}`))