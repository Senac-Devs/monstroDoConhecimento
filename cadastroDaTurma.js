//associa os elementos html com variáveis JavaScript

let   entradaAno = document.getElementById('ano-classe')
let   entradaTurma = document.getElementById('turma-classe')
let   entradaNomeDoAluno = document.getElementById('nome-do-aluno')
let   entradaRA = document.getElementById('RA')
let   entradaEmail = document.getElementById('e-mail')
let   entradaAnotacoes = document.getElementById('anotacoes')
let   retorno = document.getElementById('retorno')


/*criar um eventlistener para quando clicar ou mudar para o campo RA
gerar um número baseado em uma estrutura*/


//pegar dados e mostrar como teste no console.log()
function adicionarAluno(){
    let anoClasse = entradaAno.value;
    let turmaClasse = entradaTurma.value;
    let nomeDoAluno = entradaNomeDoAluno.value;
    let emailAluno = entradaEmail.value;
    let anotacoesAluno = entradaAnotacoes.value;

    const aluno = new Aluno (nomeDoAluno, geraRA(), emailAluno, anoClasse, turmaClasse, anotacoesAluno)
    salvarAluno(aluno)
    console.log(aluno)
    retorno.innerHTML = `O(A) estudante ${aluno.nome} foi adicionado(a) à turma ${aluno.ano} ${aluno.turma}.`
}

function geraRA(){
  //event listener
  //this.ra.toString().padStart(7, "0"))
  return 2
}

function AddTurmas(){
  const lista = document.getElementById('turmas-lista')
  lista.innerHTML = ""
  carregaAnoTurma() 
}

function addTurma(nomeTurma){
  
  const lista = document.getElementById('turmas-lista')
  lista.innerHTML += `<option value="${nomeTurma}">${nomeTurma}</option>`
}

AddTurmas()