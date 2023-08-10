const numeros = [100,200,300,400,500,600];

//primeira expressão é executada apenas uma vez
//segunda expressão é uma condição de execução
//terceira é executada sempre ao final do bloco

for (let i = 0; i < numeros.length; i++) {
    console.log(numeros[i] + " indice " + [i])
}