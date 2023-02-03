class Aluno {
    constructor(_nome, _RA, _email, _ano, _turma, _anotacoes) {
        this.nome = _nome;
        this.RA = _RA;
        this.email = _email;
        this.anotacoes = [_anotacoes];
        this.ano = _ano;
        this.turma = _turma;
    }
}

class Questao {
    constructor(_enunciado, _alternativas, _palavrasChave, _tema){
        this.enunciado = _enunciado;
        this.alternativaCorreta = _alternativas.alternativaCorreta;
        this.alternativaErrada1 = _alternativas.alternativaErrada1;
        this.alternativaErrada2 = _alternativas.alternativaErrada2;
        this.alternativaErrada3 = _alternativas.alternativaErrada3;
        this.palavrasChave = _palavrasChave
        this.tema = _tema;
    }
}