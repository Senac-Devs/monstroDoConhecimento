bancoDados.transaction(function (exibe) {
    exibe.executeSql(
        "SELECT * FROM perguntas",
        [],
        function (exibe, resultados) {
            console.log(resultados);
        }
    );
});
