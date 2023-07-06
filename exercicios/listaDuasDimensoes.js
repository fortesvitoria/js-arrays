const alunos = ['João', 'Juliana', 'Ana', 'Caio'];
const medias = [10, 8, 7.5, 9];

const listaAlunosEMedias= [alunos, medias];

console.log (listaAlunosEMedias);

console.log (`O aluno na posição 1 da lista de alunos é: ${listaAlunosEMedias[0][1]}`);

console.log (`O aluno na posição 1 da lista de alunos é: ${
    listaAlunosEMedias[0][1]}. A nota dessa aluna é ${
        listaAlunosEMedias[1][1]}
    `);

//Exercício
    const funcionarios = [
        ["Ana", "Juliana", "Leonardo"],
        [30, 35, 28]
      ];

//Com base nessa matriz, qual dos códigos abaixo eu posso utilizar para imprimir a frase “Leonardo tem idade 28”?
console.log(`O funcionário ${funcionarios[0][2]}, tem ${funcionarios[1][2]} anos de idade.`);