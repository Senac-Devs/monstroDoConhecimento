function login() {
    const user = document.getElementById("default_select");
    if (user.value == "Professor") {
        var done = 0;
        var usuario = document.getElementsByName("Usuario")[0].value;
        var senha = document.getElementsByName("Senha")[0].value;
        if (usuario == "professor" && senha == "professor") {
            window.location.href = "./html/menuProfessor.html";
            done = 1;
        }
        if (done == 0) {
            alert("Dados incorretos, tente novamente");
        }
    } else if (user.value == "Aluno") {
        var done = 0;
        var usuario = document.getElementsByName("Usuario")[0].value;
        var senha = document.getElementsByName("Senha")[0].value;
        if (usuario == "aluno" && senha == "aluno") {
            window.location.href = "./html/menuAluno.html";
            done = 1;
        }
        if (done == 0) {
            alert("Dados incorretos, tente novamente");
        }
    } else {
        alert("selecione um tipo de usuario");
    }
}
