/*
const pessoa1 = {
    nome: 'Ricardo',
    sobrenome: 'Sanches',
    idade: 25
};

console.log(pessoa1.nome)
console.log(pessoa1.sobrenome)


const pessoa2 = {
    nome: 'Miriades',
    sobrenome: 'Felix',
    idade: 18
};

console.log(pessoa2.nome)
console.log(pessoa2.sobrenome)



function criaPessoa (nome, sobrenome, idade){ //parametros
    return{
        nome: nome,
        sobrenome, //Se for igual ao parametro, não precisa colocar : , vai direto
        idade: idade
    };
}

const pessoa1 = criaPessoa('Luiz', 'Otavio', 25) //Argumentos
const pessoa2 = criaPessoa('Ricardo', 'Covolo', 30) 
const pessoa3 = criaPessoa('Miriam', 'Sanches', 25) 
const pessoa4 = criaPessoa('Andressa', 'Felix', 25)
const pessoa5 = criaPessoa('Bruno', 'Sanches', 25) 

console.log(pessoa1.nome, pessoa2.nome)

*/

const pessoa1 = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: '25',

    fala(){
        console.log(`${this.nome} ${this.sobrenome} está falando oi!`) //nesse contexto, this representa esse obj 
        console.log(`A minha idade atual é ${this.idade}`)
    },

    incrementaIdade(){
        ++this.idade
    }

};

pessoa1.fala()
pessoa1.incrementaIdade()
pessoa1.fala()
pessoa1.incrementaIdade()
pessoa1.fala()
pessoa1.incrementaIdade()
pessoa1.fala()
pessoa1.incrementaIdade()
pessoa1.fala()


























