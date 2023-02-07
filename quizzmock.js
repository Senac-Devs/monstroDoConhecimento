let titulo = document.querySelector("h1");
let instrucoes = document.querySelector("#instrucoes");
let aviso = document.querySelector("#aviso");
//let respostaEsta = document.querySelector('#respostaEsta')
let pontos = 0; // pontos para o placar
let placar = 0; // placar

// PERGUNTA
let numQuestao = document.querySelector("#numQuestao");
let pergunta = document.querySelector("#pergunta");

// ALTERNATIVAS
let a = document.querySelector("#a");
let b = document.querySelector("#b");
let c = document.querySelector("#c");
let d = document.querySelector("#d");

// article com a class questoes
let articleQuestoes = document.querySelector(".questoes");
// ol li com as alternativas
let alternativas = document.querySelector("#alternativas");

const q0 = {
    numQuestao: 0,
    pergunta: "Pergunta",
    alternativaA: "Alternativa A",
    alternativaB: "Alternativa B",
    alternativaC: "Alternativa C",
    alternativaD: "Alternativa D",
    correta: "0",
};

const q1 = {
    numQuestao: 1,
    pergunta: "2 x 2 é?",
    alternativaA: "1",
    alternativaB: "2",
    alternativaC: "3",
    alternativaD: "4",
    correta: "4",
};

const q2 = {
    numQuestao: 2,
    pergunta: "Capital do Brasil",
    alternativaA: "Sao Paulo",
    alternativaB: "Rio de Janeiro",
    alternativaC: "Brasilia",
    alternativaD: "Salvador",
    correta: "Brasilia",
};

const q3 = {
    numQuestao: 3,
    pergunta: "Qual linguagem aprendemos no curso",
    alternativaA: "PHP",
    alternativaB: "Javascript",
    alternativaC: "Latim",
    alternativaD: "C+",
    correta: "Javascript",
};

const q4 = {
    numQuestao: 4,
    pergunta: "Qual instituição de ensino foi realizado o curso",
    alternativaA: "Sesc",
    alternativaB: "Senac",
    alternativaC: "Sesi",
    alternativaD: "Sebrae",
    correta: "Senac",
};

const q5 = {
    numQuestao: 5,
    pergunta: "Qual a formação do curso",
    alternativaA: "Desenvolvedor de Sistema",
    alternativaB: "Desenvolvedor de Soluções de Informática",
    alternativaC: "Conserto de Sistema",
    alternativaD: "Excel 2000",
    correta: "Desenvolvedor de Sistema",
};

// CONSTANTE COM UM ARRAY DE OBJETOS COM TODAS AS QUESTOES
const questoes = [q0, q1, q2, q3, q4, q5];

//let numero = document.querySelector("#numero");
//let total = document.querySelector("#total");

// numero.textContent = q1.numQuestao;

let totalDeQuestoes = questoes.length - 1;
console.log("Total de questões " + totalDeQuestoes);
// total.textContent = totalDeQuestoes;

// MONTAR A 1a QUESTAO COMPLETA, para iniciar o Quiz
numQuestao.textContent = q1.numQuestao;
pergunta.textContent = q1.pergunta;
a.textContent = q1.alternativaA;
b.textContent = q1.alternativaB;
c.textContent = q1.alternativaC;
d.textContent = q1.alternativaD;

// CONFIGURAR O VALUE INICIAL DA 1a QUESTAO COMPLETA
a.setAttribute("value", "1A");
b.setAttribute("value", "1B");
c.setAttribute("value", "1C");
d.setAttribute("value", "1D");

// PARA MONTAR AS PROXIMAS QUESTOES
function proximaQuestao(nQuestao) {
    // numero.textContent = nQuestao;
    numQuestao.textContent = questoes[nQuestao].numQuestao;
    pergunta.textContent = questoes[nQuestao].pergunta;
    a.textContent = questoes[nQuestao].alternativaA;
    b.textContent = questoes[nQuestao].alternativaB;
    c.textContent = questoes[nQuestao].alternativaC;
    d.textContent = questoes[nQuestao].alternativaD;
    a.setAttribute("value", nQuestao + "A");
    b.setAttribute("value", nQuestao + "B");
    c.setAttribute("value", nQuestao + "C");
    d.setAttribute("value", nQuestao + "D");
}

function bloquearAlternativas() {
    a.classList.add("bloqueado");
    b.classList.add("bloqueado");
    c.classList.add("bloqueado");
    d.classList.add("bloqueado");
}

function desbloquearAlternativas() {
    a.classList.remove("bloqueado");
    b.classList.remove("bloqueado");
    c.classList.remove("bloqueado");
    d.classList.remove("bloqueado");
}

function verificarSeAcertou(nQuestao, resposta) {
    let numeroDaQuestao = nQuestao.value;
    console.log("Questão " + numeroDaQuestao);

    let respostaEscolhida = resposta.textContent;
    //console.log("RespU " + respostaEscolhida)

    let certa = questoes[numeroDaQuestao].correta;
    //console.log("RespC " + certa)

    if (respostaEscolhida == certa) {
        //console.log("Acertou")
        //respostaEsta.textContent = "Correta 😊"
        pontos += 10; // pontos = pontos + 10
    } else {
        //console.log("Errou!")
        //respostaEsta.textContent = "Errada 😢"
    }

    // atualizar placar
    placar = pontos;
    instrucoes.textContent = "Pontos " + placar;

    // bloquear a escolha de opcoes
    bloquearAlternativas();

    setTimeout(function () {
        //respostaEsta.textContent = '...'
        proxima = numeroDaQuestao + 1;

        if (proxima > totalDeQuestoes) {
            console.log("Fim do Jogo!");
            fimDoJogo();
        } else {
            proximaQuestao(proxima);
        }
    }, 250);
    desbloquearAlternativas();
}

function fimDoJogo() {
    instrucoes.textContent = "Fim de Jogo!";
    numQuestao.textContent = "";

    let pont = "";
    pontos == 0 ? (pont = "ponto") : (pont = "pontos");

    pergunta.textContent = "Você conseguiu " + pontos + " " + pont;

    aviso.textContent = "Você conseguiu " + pontos + " " + pont;

    a.textContent = "";
    b.textContent = "";
    c.textContent = "";
    d.textContent = "";

    a.setAttribute("value", "0");
    b.setAttribute("value", "0");
    c.setAttribute("value", "0");
    d.setAttribute("value", "0");

    // OCULTAR O ARTICLE DA QUESTAO
    articleQuestoes.style.display = "none";

    setTimeout(function () {
        pontos = 0; // zerar placar
        location.reload();
    }, 2000);
}
