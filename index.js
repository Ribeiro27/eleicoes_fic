import express from 'express'
import candidatoRouter from './src/routes/candidatoRouter.js'
import candidatoViewRouter from './src/routes/candidatoViewRouter.js'
import painelRouter from "./src/Router/painelRouter.js"
import path from 'node:path'
import session from 'express-session'
const app = express()

app.set('view engine', 'ejs')
app.set('views', path.join(path.resolve(), 'src', 'views'))
app.use(express.json())
app.use(session({
    secret: '8EAEED923417D35CA41E42055D0BC12C99DE6383                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                ',
    resave: false,
    saveUninitialized: true
}))
app.use(express.urlencoded({ extended: true }))
//      chave base da url
app.use('/api', candidatoRouter)
app.use('/', candidatoViewRouter)


app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})                                    