bancoDados.transaction(function (exibe) {
    exibe.executeSql(
        "SELECT * FROM perguntas",
        [],
        function (exibe, resultados) {
            exibePergunta(resultados.rows.item(1));
        }
    );
});



function exibePergunta(pergunta){
    
    const numeroQuestao = document.getElementById('numQuestao');
    const enunciado = document.getElementById('pergunta');
    const alternativaA = document.getElementById('a');
    const alternativaB = document.getElementById('b');
    const alternativaC = document.getElementById('c');
    const alternativaD = document.getElementById('d');

  // resultados.rows.item(i)
    enunciado.innerHTML = pergunta.enunciado
    alternativaA.innerHTML = pergunta.alternativaCorreta
    alternativaB.innerHTML = pergunta.alternaticaErrada1
    alternativaC.innerHTML = pergunta.alternaticaErrada2
    alternativaD.innerHTML = pergunta.alternaticaErrada3
    
   //window.alert(pergunta.enunciado)
    console.log(pergunta)
}