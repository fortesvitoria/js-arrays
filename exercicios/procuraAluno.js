const alunos = ['João', 'Juliana', 'Ana', 'Caio'];
const medias = [10, 8, 7.5, 9];

const listaAlunosEMedias= [alunos, medias];

console.log (listaAlunosEMedias);

function exibeNomeENota(aluno) {
    if (listaAlunosEMedias[0].includes(aluno)) {
        console.log (`${aluno} está cadastrado`);

        //pra saber a media se busca pelo indice
        const indice = listaAlunosEMedias[0].indexOf(aluno);
        console.log(indice);

        const mediaAluno = listaAlunosEMedias [1][indice];
        console.log(mediaAluno);

        console.log(`${aluno} tem a media ${mediaAluno}`)
        
    } else {
        console.log (`Não encontramos o aluno ${aluno} `);
    }
}

exibeNomeENota('João');
exibeNomeENota('Marta');