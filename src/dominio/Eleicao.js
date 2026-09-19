import { Candidato } from "./Candidado.js";    

export class Eleicao {
    constructor ( ) {
        this.candidatos = []
        this.votos = []
    }
     //metodo para adicionar candidato
     cadastrar (nome, numero) {
     let numeroUrna = Number(numero)
     const candidatoExiste = this.candidatos.find(candidato => candidato.numero === numeroUrna)
    if (candidatoExiste) {
        throw new Error("Candidato já existe")
    } 
        const id = this.candidatos.length + 1
        const candidato = new Candidato(id, nome, numeroUrna)
        this.candidatos.push(candidato)
      return candidato

     }
listarCandidatos() {
    return this.candidatos
}
votar(numeroUrna) {
this.votos.push({ numeroUrna }) 
    }
    apurarVotos() {
       return this.candidatos.map((candidato) => {
        const recebidos = this.votos.filter((voto) => voto.numeroUrna === candidato.numero)
        return { 
            id: candidato.id,
            nome: candidato.nome,
            numero: candidato.numero,
            votos: recebidos.length
        }
       })
       }

    }
     const eleicao = new Eleicao()

     eleicao.cadastrar("Jessé", 22)
     eleicao.cadastrar("Pedro", 137)
     eleicao.cadastrar("Maria", 10)
     eleicao.listarCandidatos()

     console.log(eleicao.listarCandidatos())

     eleicao.votar(22)
     eleicao.votar(137)
     eleicao.votar(10)
     eleicao.votar(22)

     console.log(eleicao.apurarVotos())
/*
funcao fora de classe é função

mas funçao dentro de classe é metodo
*/

    
