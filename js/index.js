function confereCookie() {
    const cookies = pegaCookie();
    if (!cookies.includes("Monstro")) {
        carregaCookie();
    }
}

function pegaCookie() {
    return document.cookie;
}

function pegaInfoNoCookie() {
    let cookie = pegaCookie();
    let info = cookie
        .split("; ")
        .find((cookie) => cookie.startsWith("Monstro="))
        .split("=")[1];
    return JSON.parse(info);
}
function carregaCookie() {
    const cookiePerguntas = JSON.stringify({
        numeroQuestao: 0,
        listaQuestoes: [],
        acertos: 0,
    });
    document.cookie = `Monstro=${cookiePerguntas}; SameSite=None; Secure`;
}

function defineCookie(cookie) {
    console.log(cookie);
    document.cookie = `Monstro=${JSON.stringify(
        cookie
    )}; SameSite=None; Secure`;
}
confereCookie();

function limpaCookie(cookie) {
    document.cookie =
        cookie.trim().split("=")[0] +
        "=;" +
        "expires=Thu, 01 Jan 1970 00:00:00 UTC;";
}

function jogarComQuestoes(tema) {
    console.log(tema);
    const temaEscolhido = { temaEscolhido: tema };

    localStorage.setItem("jsonObj", JSON.stringify(temaEscolhido));
    window.location.href = "../html/quiz.html";
    const temaRetornado = JSON.parse(localStorage.getItem("jsonObj"));
    console.log(temaRetornado);
}

function atualizaHumor() {
    const cookie = pegaInfoNoCookie();
    let prog = parseInt((cookie.acertos / 3) * 100);
    console.log((cookie.acertos / 3))
    console.log(prog, cookie);
    document.getElementById("humor").value = prog;
}
