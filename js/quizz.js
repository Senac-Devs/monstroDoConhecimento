bancoDados.transaction(function (exibe) {
    const tema = JSON.parse(localStorage.getItem('jsonObj'));
    exibe.executeSql(
        `SELECT * FROM perguntas WHERE tema="${tema.temaEscolhido}"`,
        [],
        function (exibe, resultados) {
            const listaPerguntas = [];
            for (let i = 0; i < resultados.rows.length; i++) {
                listaPerguntas.push(resultados.rows.item(i));
            }
            organizaPerguntas(listaPerguntas);
        }
    );
});

//let tempoInicial = new Date()


function organizaPerguntas(listaPerguntas) {
    const cookie = pegaInfoNoCookie();
    const perguntaAleatoria = listaPerguntas.sort(() => Math.random() - 0.5);
    if (cookie.numeroQuestao == 0) {
        for (let i = 0; i < perguntaAleatoria.length; i++) {
            console.log(perguntaAleatoria, cookie.listaQuestoes)
            cookie.listaQuestoes.length==perguntaAleatoria.length
                ? null
                : cookie.listaQuestoes.push(perguntaAleatoria[i]);
        }
        defineCookie(cookie);
        //listaPerguntas.forEach((e)=> cookie["listaQuestoes"].push(e))
    }
    console.log(cookie);
    exibePergunta(
        cookie.listaQuestoes[cookie.numeroQuestao],
        cookie.numeroQuestao
    );
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

function exibePergunta(pergunta, numPergunta) {
    console.log(pergunta)
    const nomeQuestionario = document.getElementById("titulo-questionario");
    const numeroQuestao = document.getElementById("numQuestao");
    const enunciado = document.getElementById("pergunta");
    const alternativaA = document.getElementById("a");
    const alternativaB = document.getElementById("b");
    const alternativaC = document.getElementById("c");
    const alternativaD = document.getElementById("d");

    nomeQuestionario.innerText = pergunta.tema;
    numeroQuestao.innerText = numPergunta + 1;
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
function verificarSeAcertou(eleAlternativa, idAlternativa, cookie) {
    cookie = pegaInfoNoCookie();
    if (permissaoResponder) {
        if (idCorreto == idAlternativa) {
            eleAlternativa.style.backgroundColor = "lightgreen";
            tocarSomCerto();
            cookie.acertos++;
        } else {
            eleAlternativa.style.backgroundColor = "lightcoral";
            tocarSomErrado();
        }
        //let tempoResposta = new Date() - tempoInicial;
        permissaoResponder = false;
        console.log(cookie);
        cookie.numeroQuestao++;

       setTimeout(function () {
        if(cookie.listaQuestoes.length == cookie.numeroQuestao){
            carregaCookie()
            window.location.href = "../html/paginaintermediaria.html"
        } else {
            location.reload();
        }
    }, 1500);
    }
    defineCookie(cookie);
}

