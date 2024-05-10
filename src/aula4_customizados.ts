type aluno = {
    nome: string;
    cursos?: string[];
    idade: number;
}


const alunos: aluno[] = [
    {
        nome: "Carlos",
        cursos: ["Front-End","UX/UI"],
        idade: 27,
    },
    {
        nome: "Ana",
        cursos: ["Front","Python"],
        idade: 23,
    }
]

alunos.push({
    nome: "Julia",
    cursos: ["Arquitetura"],
    idade: 29
})


const novoAluno: aluno = {
    //atalho ctrl + espaço
    nome: "Fabricio",
    idade: 24
    //consideramos o Fabricio um novo aluno
    // Com a "?" que foi inserida após cursos, essa variável pode ser preenchida sem nada
}

function exibeAluno(aluno: aluno) {
    console.log(aluno.nome)
}


