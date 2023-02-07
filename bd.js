const bd=openDatabase("meuBD", "1.0","Meu Banco de Dados",4080);
bd.transaction(function(criar){
    criar.executeSql(
        "CREATE "
    )
}
)