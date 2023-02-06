function confereCookie (){
    const cookies = document.cookie
    if (cookies == ""){
        carregaCookie()
    }
}

function carregaCookie(){
    document.cookie = JSON.stringify({'numeroQuestao': 0, 'listaQuestoes': []})
}

confereCookie()

function pegaCookie (){
    return JSON.parse(document.cookie)
}