export class Candidato {
    constructor (id, nome, numero){
        if (nome.length < 3) {
            throw new Error("Nome nao pode ser menor que 3 caracteres");
        
        }
        
        this.id = id;
        this.nome = nome;
        this.numero = numero;
        }
      
}

/*
variavel fora de classe
const nome = "rick  "
let idade = 20

variaveis dentro de classe sao atributos da classe
this.nome = "rick"
this.idade = 20

*/