function confereCookie() {
    const cookies = pegaCookie();
    if (!cookies.includes('Monstro')) {
        carregaCookie();
    }
}

function pegaCookie() {
    return document.cookie;
}

function pegaInfoNoCookie(){
    let cookie = pegaCookie()
    let info = cookie.split('; ').find((cookie)=> cookie.startsWith('Monstro=')).split('=')[1]
    return JSON.parse(info)
    
}
function carregaCookie() {
    const cookiePerguntas = JSON.stringify({
        numeroQuestao: 0,
        listaQuestoes: [],
        acertos: 0,
    });
    document.cookie = `Monstro=${cookiePerguntas}; SameSite=None; Secure`
}

function defineCookie(cookie) {
    console.log(cookie);
    document.cookie = `Monstro=${JSON.stringify(cookie)}; SameSite=None; Secure`;
}
confereCookie();

function limpaCookie(cookie) {
    document.cookie =
        cookie.trim().split("=")[0] +
        "=;" +
        "expires=Thu, 01 Jan 1970 00:00:00 UTC;";
}
