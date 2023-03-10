const bancoDados = openDatabase("meuBD", "1.0", "Meu banco de dados", 4080);

bancoDados.transaction(function (criar) {
    criar.executeSql("CREATE TABLE alunos (infos JSON)");
});
bancoDados.transaction(function (criar) {
    criar.executeSql(
        "CREATE TABLE perguntas (enunciado TEXT, alternativaCorreta TEXT, alternaticaErrada1 TEXT,alternaticaErrada2 TEXT, alternaticaErrada3 TEXT, palavraChave TEXT, tema TEXT)"
    );
});

function inserirAlunoBD() {
    let alunoParaInserir = document.getElementById("nome-do-aluno").value;
    try {
        confereAlunoRepetido(alunoParaInserir);
        console.log(a);
        adicionarAluno();
    } catch (error) {
        console.log(error);
        alert("Há uma aluno com o mesmo nome. Deseja prosseguir?");
    }
}

function avisa() {
    alert(
        "Já existe um aluno com o mesmo nome cadastrado. Desaja professoguir?"
    );
}

function confereAlunoRepetido(alunoParaInserir) {
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
                    console.log(
                        aluno.nome == alunoParaInserir,
                        aluno.nome,
                        alunoParaInserir
                    );
                    if (aluno.nome == alunoParaInserir) {
                        console.log(aluno.nome);
                        avisa();
                    }
                }
            }
        );
    });
}

function salvarAluno(aluno) {
    bancoDados.transaction(function (inserir) {
        inserir.executeSql("INSERT INTO alunos (infos) VALUES (?)", [
            JSON.stringify(aluno),
        ]);
    });

    //alunos com o exato mesmo nome.
    document.getElementById("ano-classe").value = "";
    document.getElementById("turma-classe").value = "";
    document.getElementById("nome-do-aluno").value = "";
    document.getElementById("RA").value = "";
    document.getElementById("e-mail").value = "";
    document.getElementById("anotacoes").value = "";
}

function exibirTurma() {
    const [ano, turma] = document
        .getElementById("turmas-lista")
        .value.split("º - ");
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
                    if (aluno.ano == ano && aluno.turma == turma) {
                        guardaAlunoLista(aluno);
                    }
                }
                exibeOrdemAlfabetica();
            }
        );
    });
}
let alunosFiltrados = [];
function guardaAlunoLista(aluno) {
    alunosFiltrados.push(aluno);
}

function exibeOrdemAlfabetica() {
    alunosFiltrados.sort((a, b) => (a.nome < b.nome ? -1 : 1));
    alunosFiltrados.forEach((e) => exibeAlunoHMTL(e));
    alunosFiltrados = [];
}

function exibeAlunoHMTL(aluno) {
    document.getElementById(
        "turmas"
    ).innerHTML += `<div class="paragrafo"><span class="infoaluno"><strong>Nome</strong>: ${aluno.nome}</span> <span class="infoaluno"><strong>RA</strong>: ${aluno.RA}</span> <span class="infoaluno"><strong>email</strong>: ${aluno.email}</span> <span class="infoaluno"><strong>Anotações</strong>: ${aluno.anotacoes}</span> <p></p> </div>`;
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
                    alunos.push(item);
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
function confereSeEnunciadoDuplicado(pergunta) {
    bancoDados.transaction(function (ler) {
        ler.executeSql(
            `SELECT enunciado FROM perguntas WHERE enunciado='${pergunta[0]}'`,
            [],
            function (ler, resultado) {
                console.log(resultado.rows.length);
                if(resultado.rows.length == 0){
                    insereQuestaoBD(pergunta[0],pergunta[1],pergunta[2],pergunta[3],pergunta[4],pergunta[5],pergunta[6])
                }
            }
        );
    });
}

function insereQuestaoBD(
    enunciado,
    alternativaCorreta,
    alternaticaErrada1,
    alternaticaErrada2,
    alternaticaErrada3,
    palavraChave,
    temaPergunta
) {
    bancoDados.transaction(function (inserir) {
        inserir.executeSql(
            "INSERT INTO perguntas (enunciado, alternativaCorreta, alternaticaErrada1, alternaticaErrada2, alternaticaErrada3, palavraChave, tema) VALUES (?  ,?  ,?  ,?  ,?  ,?  ,? )",
            [
                enunciado,
                alternativaCorreta,
                alternaticaErrada1,
                alternaticaErrada2,
                alternaticaErrada3,
                palavraChave,
                temaPergunta,
            ]
        );
    });
}