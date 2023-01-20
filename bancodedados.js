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
    //alunos com o exato mesmo nome.
    document.getElementById("ano-classe").value = "";
    document.getElementById("turma-classe").value = "";
    document.getElementById("nome-do-aluno").value = "";
    document.getElementById("RA").value = "";
    document.getElementById("e-mail").value = "";
    document.getElementById("anotacoes").value = "";
}

function exibirTurma() {
    const [ano, turma] = document.getElementById('turmas-lista').value.split("º - ")
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
                        guardaAlunoLista(aluno)
                    }
                }
                exibeOrdemAlfabetica()
            }
        );
    });
}
let alunosFiltrados = []
function guardaAlunoLista(aluno){
    alunosFiltrados.push(aluno)
}

function exibeOrdemAlfabetica(){
    alunosFiltrados.sort((a,b) => (a.nome < b.nome ? -1 : 1) )
    alunosFiltrados.forEach(e => exibeAlunoHMTL(e))
    alunosFiltrados = []
}

function exibeAlunoHMTL(aluno){
    document.getElementById('turmas').innerHTML += `<p><strong>Nome</strong>: ${aluno.nome} <strong>RA</strong>: ${aluno.RA} <strong>email</strong>: ${aluno.email} <strong>Anotações</strong>: ${aluno.anotacoes} </p>`
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
