const alunos = ['João', 'Juliana', 'Ana', 'Caio'];
const medias = [10, 8, 7.5, 9];

const listaAlunosEMedias = [alunos, medias];

function exibeNomeENota(aluno) {
    if (listaAlunosEMedias[0].includes(aluno)) {
        // const alunos = listaAlunosEMedias[0];
        // const medias = listaAlunosEMedias[1];
        //forma abaixo funciona da mesma forma que a acima
        const [alunos,medias] = listaAlunosEMedias;

        const indice = alunos.indexOf(aluno);

        const mediaAluno = medias[indice];

        console.log(`${aluno} tem a media ${mediaAluno}`)

    } else {
        console.log(`Não encontramos o aluno ${aluno} `);
    }
}

exibeNomeENota('Juliana');
exibeNomeENota('Marta');