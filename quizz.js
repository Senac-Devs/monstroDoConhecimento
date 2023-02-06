bancoDados.transaction(function (exibe) {
    exibe.executeSql(
        "SELECT * FROM perguntas",
        [],
        function (exibe, resultados) {
            const listaPerguntas = [];
            for (let i = 0; i < resultados.rows.length; i++){
                listaPerguntas.push(resultados.rows.item(i))
            }
            organizaPerguntas(listaPerguntas)
        }
    );
});

function organizaPerguntas(listaPerguntas){
    const cookie = pegaCookie()
    const perguntaAleatoria = listaPerguntas.sort(() => Math.random() - 0.5);
    if (cookie.numeroQuestao == 0){
        listaPerguntas.forEach((e)=> cookie["listaQuestoes"].push(e))
    }
    console.log(cookie)
    exibePergunta(resultados.rows.item(perguntaAleatoria));
}

let idCorreto;
let somCorreto = document.getElementById("som-correto");
let somErrado = document.getElementById("som-errado");

function tocarSomCerto() {
    somCorreto.volume = 0.1;
    somCorreto.play();
}

function tocarSomErrado() {
    somErrado.volume = 0.02;
    somErrado.play();
}

let numPergunta = 1;
function exibePergunta(pergunta) {
    const nomeQuestionario = document.getElementById("titulo-questionario");
    const numeroQuestao = document.getElementById("numQuestao");
    const enunciado = document.getElementById("pergunta");
    const alternativaA = document.getElementById("a");
    const alternativaB = document.getElementById("b");
    const alternativaC = document.getElementById("c");
    const alternativaD = document.getElementById("d");

    nomeQuestionario.innerText = pergunta.tema;
    numeroQuestao.innerText = numPergunta; 
    enunciado.innerText = pergunta.enunciado;
    const listaAlternativas = [
        pergunta.alternativaCorreta,
        pergunta.alternaticaErrada1,
        pergunta.alternaticaErrada2,
        pergunta.alternaticaErrada3,
    ];
    listaAlternativas.sort(() => Math.random() - 0.5);
    alternativaA.innerText = listaAlternativas[0];
    alternativaB.innerText = listaAlternativas[1];
    alternativaC.innerText = listaAlternativas[2];
    alternativaD.innerText = listaAlternativas[3];
    idCorreto = listaAlternativas.indexOf(pergunta.alternativaCorreta);
    console.log(idCorreto);
    console.log(pergunta);
}
let permissaoResponder = true;

//POSSÍVEL PROBLEMA, o usuário poderia ficar apertando f5 para dar refresh
//na página e refazer até acertar.
function verificarSeAcertou(eleAlternativa, idAlternativa) {
    if (permissaoResponder) {
        if (idCorreto == idAlternativa) {
            eleAlternativa.style.backgroundColor = "lightgreen";
            tocarSomCerto();
        } else {
            eleAlternativa.style.backgroundColor = "lightcoral";
            tocarSomErrado();
        }
        permissaoResponder = false;
        numPergunta++;
    }
}

function proximaQuestao(resultadorowsitem) {

}
