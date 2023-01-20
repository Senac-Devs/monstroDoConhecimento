//associa os elementos html com variáveis JavaScript

let entradaAno = document.getElementById("ano-classe");
let entradaTurma = document.getElementById("turma-classe");
let entradaNomeDoAluno = document.getElementById("nome-do-aluno");
let entradaRA = document.getElementById("RA");
let entradaEmail = document.getElementById("e-mail");
let entradaAnotacoes = document.getElementById("anotacoes");
let retorno = document.getElementById("retorno");

/*criar um eventlistener para quando clicar ou mudar para o campo RA
gerar um número baseado em uma estrutura*/


function adicionarAluno() {
    let anoClasse = entradaAno.value;
    let turmaClasse = entradaTurma.value;
    let nomeDoAluno = entradaNomeDoAluno.value;
    let emailAluno = entradaEmail.value;
    let anotacoesAluno = entradaAnotacoes.value;

    const aluno = new Aluno(
        nomeDoAluno,
        geraRA(),
        emailAluno,
        anoClasse,
        turmaClasse,
        anotacoesAluno
    );
    salvarAluno(aluno);
    retorno.innerHTML = `O(A) estudante ${aluno.nome} foi adicionado(a) à turma ${aluno.ano} ${aluno.turma}.`;
}


function atualizaNumeroRA() {
    bancoDados.transaction(function (exibe) {
        exibe.executeSql(
            "SELECT * FROM alunos",
            [],
            function (exibe, resultados) {
                document.getElementById("turmas").innerHTML = "";
                const numeroRA = resultados.rows.length + 1;
                const year = String(new Date().getFullYear());
                let ordem = String(numeroRA);
                let registro = ordem + year;
                entradaRA.addEventListener("focus", (e) => {
                    if (entradaRA.value === "") {
                        RegFinal = registro.padStart(9, "0");
                        entradaRA.value = RegFinal;
                    }
                });
            }
        );
    });
}
atualizaNumeroRA();

function AddTurmas() {
    const lista = document.getElementById("turmas-lista");
    lista.innerHTML = "";
    carregaAnoTurma();
}

function addTurma(nomeTurma) {
    const lista = document.getElementById("turmas-lista");
    lista.innerHTML += `<option value="${nomeTurma}">${nomeTurma}</option>`;
}

AddTurmas();
