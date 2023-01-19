const bancoDados = openDatabase("meuBD", "1.0", "Meu banco de dados", 4080);

bancoDados.transaction(function (criar) {
    criar.executeSql("CREATE TABLE alunos (infos JSON)");
});

function salvarAluno(aluno) {
    bancoDados.transaction(function (inserir) {
        inserir.executeSql("INSERT INTO alunos (infos) VALUES (?)", [
            JSON.stringify(aluno),
        ]);
    });
    //validacao?
    document.getElementById("ano-classe").value = "";
    document.getElementById("turma-classe").value = "";
    document.getElementById("nome-do-aluno").value = "";
    document.getElementById("RA").value = "";
    document.getElementById("e-mail").value = "";
    document.getElementById("anotacoes").value = "";
}

function exibirTurma() {
    const [ano, turma] = document.getElementById('turmas-lista').value.split("º - ")
    console.log(ano, turma)
    carregaAnoTurma();
    bancoDados.transaction(function (exibe) {
        exibe.executeSql(
            "SELECT * FROM alunos",
            [],
            function (exibe, resultados) {
                document.getElementById("turmas").innerHTML = "";
                const tamanho = resultados.rows.length;
                let item;

                for (let i = 0; i < tamanho; i++) {
                    item = resultados.rows.item(i);
                    const aluno = JSON.parse(item.infos);
                    if (aluno.ano == ano && aluno.turma == turma){
                        exibeAlunoHMTL(aluno)
                    }
                }
            }
        );
    });
}

function exibeAlunoHMTL(aluno){
    document.getElementById('turmas').innerHTML += `<p>${aluno.nome}</p>`
}


let anoTurmaInserir = [];
let alunos;
function carregaAnoTurma() {
    bancoDados.transaction(function (exibe) {
        exibe.executeSql(
            "SELECT * FROM alunos",
            [],
            function (exibe, resultados) {
                document.getElementById("turmas").innerHTML = "";
                const tamanho = resultados.rows.length;
                let item;
                alunos = [];
                for (let i = 0; i < tamanho; i++) {
                    item = JSON.parse(resultados.rows.item(i).infos);
                    alunos.push(item)
                    const anoTurma = `${item.ano}º - ${item.turma}`;
                    if (!anoTurmaInserir.includes(anoTurma)) {
                        anoTurmaInserir.push(anoTurma);
                        addTurma(anoTurma);
                    }
                }
            }
        );
    });
}
