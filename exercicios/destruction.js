const numPares = [2,4,6];
const numImpares = [1,3,5];

const numeros = [numImpares, numPares];
const numerosDestruction = [...numImpares, ...numPares];

console.log(numeros);
console.log(numerosDestruction);


console.log("-----------------------")

console.log ("Ex1")
const num1 = 1;
const num2 = 2;
console.log(num1,num2);

//acima equivale ao abaixo
console.log ("Ex2")
const[numero1,numero2] = [1,2];
console.log(numero1,numero2);

//com mais numeros
const[numero01,numero02, ...outrosNumeros] = [1,2,3,4,5,6];
console.log(numero01,numero02, outrosNumeros);

console.log("-----------------------")

console.log ("Ex1")
const [nome1 = "Vito"] = [1];
console.log(nome1)

const [nome2 = "Vito"] = [];
console.log(nome2)

console.log ("Ex2")
const pessoa = {
    nome: "Vito",
    idade: 32
}
console.log (pessoa)

//Adiciona mais dados
console.log ("Ex2 com mais dados")
const pessoaComTelefone = {
    ...pessoa, telefone: 5199999999
}
console.log (pessoaComTelefone)

console.log("-----------------------")

// console.log ("Ex1")
// const nome = pessoa.nome;
// console.log(nome);

console.log ("Ex2")
const {nome} = pessoa;
console.log(nome);

const {idade} = pessoa;
console.log(idade);

console.log("-----------------------")

// console.log ("Ex1")
// function imprimeDados(dados) {
//     const{nome, idade} = dados
//     console.log(nome, idade);
// }

// imprimeDados(pessoa);

console.log ("Ex2")
function imprimeDados({nome, idade}) {
    console.log(nome, idade);
}

imprimeDados(pessoa);