import { Router } from "express"
import { Eleicao } from "../dominio/Eleicao.js"
import { exigirLogin } from "../middlewares/exigirLogin.js"
import { Usuario } from "../dominio/Usuario.js"


const painelRouter = Router()

painelRouter.get('/painel', exigirLogin, (req, res) => {
        res.render('painel', { 
            titulo: 'Painel de Administração',
            Usuario: req.session.usuarioLogado,
            relatorio:  eleicao.apurar()
        })  

})

painelRouter.post('/Cad-candidato ', exigirLogin, (req, res) => {
    const nome = { nome,numero } = req.body
    const eleicao = new Eleicao()
    //faça
    try {
        eleicao.cadastrar(nome, numero)
        
        //se não conseguiu fazer
    } catch (e) {
        console.error(e)
    }
    res.redirect('/painel')

})
export default painelRouter