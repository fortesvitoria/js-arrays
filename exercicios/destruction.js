const numPares = [2,4,6];
const numImpares = [1,3,5];

const numeros = [numImpares, numPares];
const numerosDestruction = [...numImpares, ...numPares];

console.log(numeros);
console.log(numerosDestruction);


console.log("-----------------------")

const num1 = 1;
const num2 = 2;
console.log(num1,num2);

//acima equivale ao abaixo

const[numero1,numero2] = [1,2];
console.log(numero1,numero2);

//com mais numeros
const[numero01,numero02, ...outrosNumeros] = [1,2,3,4,5,6];
console.log(numero01,numero02, outrosNumeros);

console.log("-----------------------")