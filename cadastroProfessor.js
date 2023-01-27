function salvarCadProf() {
    const nomeProfessor = document.getElementById("nome-prof").value;
    const emailProfessor = document.getElementById("email-prof").value;
    const celularProfessor = document.getElementById("telefone-prof").value;
    const dataNascProf = document.getElementById("data-nasc-prof").value;
    const areaEstudo = document.getElementById("area-estudo").value;
    const nomeUsuarioProf = document.getElementById("usuario-prof").value;
    const senhaProfessor = document.getElementById("senha-prof").value;
    
    if (nomeProfessor === "" || emailProfessor === "" || celularProfessor === "" || dataNascProf === "" || areaEstudo === "" || nomeUsuarioProf === "" || senhaProfessor === "") {
        alert("Faltam informações");
        return false;
    }

    

}