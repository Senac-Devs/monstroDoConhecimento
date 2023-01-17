const bancoDados = openDatabase("meuBD", "1.0", "Meu banco de dados", 4080);

bancoDados.transaction(function (criar) {
    criar.executeSql("CREATE TABLE alunos (infos JSON)");
});

function salvarAluno(aluno) {
    bancoDados.transaction(function (inserir) {
        inserir.executeSql("INSERT INTO alunos (infos) VALUES (?)", [
            JSON.stringify(aluno)
        ]);
    });
}
