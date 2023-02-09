const questoesPadrao = [
    ["Quanto é 2*2 + 4?", "8", "12", "9", "10", "multiplicação", "Matemática"],
    ["Qual o único número primo par?", "2", "10", "3", "42", "primo", "Matemática"],
    ["Quem é considerado o pai da matemática?", "Arquimedes", "Pitágoras", "Sócrates", "Isaac Newton", "matemáticos", "Matemática"],
    ["Qual é a figura de linguagem utilizada para suavizar uma notícia?", "Eufemismo", "Onomatopeia", "Metáfora", "Ironia", "linguagem", "Português"],
    ["Dê o coletivo de lenha, cabra e chave, respectivamente.", "Talha, fato e molho", "Alcateia, fato e molho", "Talha, enxame e molho", "Talha, fato e banda", "coletivos", "Português"],
    ["Qual é o nome dos versos que possuem métrica, mas não utilizam rimas?", "Versos brancos", "Versos bárbaros", "Versos irregulares", "Versos vermelhos", "poesia", "Português"],
    ["Qual o ano de promulgação da atual Constituição Federal da República Federativa do Brasil?", "1988", "1990", "1964", "2002", "direito", "História"],
    ["Em que ano começou e terminou a 2ª Guerra Mundial?", "1939-1945", "1938-1946", "1938-1945", "1939-1946", "guerra", "História"],
    ["O período do movimento iluminista também é conhecido por:", "Século das Luzes", "Século das Trevas", "Século dos Pensadores", "Século da Energia Elétrica", "filosofia", "História"],
    ["Qual o menor país do mundo?", "Vaticano", "Mônaco", "San Marino", "Campo Mourão", "países", "Geografia"],
    ["Que país tem formato de uma bota?", "Itália", "Portugal", "México", "Brasil", "países", "Geografia"],
    ["Qual a montanha mais alta do mundo?", "Monte Everest", "Mauna Kea", "Pico da Neblina", "Monte Fuji", "montanha", "Geografia"],
    ["Que tipo de ondas são usadas para fazer e receber ligações de aparelhos celulares?", "Rádio", "Infravermelhas", "Ultravioleta", "Sonora", "ondas", "Ciências"],
    ["Qual dos elementos químicos abaixo é utilizado para criar energia nuclear?", "Urânio", "Nitrogênio", "Dióxido de Carbono", "Cloreto de Sódio", "química", "Ciências"],
    ["Qual o Planeta mais próximo do sol?", "Mercúrio", "Plutão", "Terra", "Vênus", "astronomia", "Ciência"],
    ["Qual o nome do criador do Mickey Mouse?", "Walt Disney", "George Lucas", "Stan Lee", "Luciano Huck", "pop", "Conhecimentos Gerais"],
    ["Qual artista foi conhecido com Rei do Pop?", "Michael Jackson", "Elvis Presley", "Fiuk", "Axl Rose", "música", "Conhecimentos Gerais"],
    ["Quantas teclas tem um piano?", "88", "76", "61", "50", "música", "Conhecimentos Gerais"],
]

questoesPadrao.forEach(
    (q) => confereSeEnunciadoDuplicado(q)
)

atualizaHumor()
carregaCookie()