criarCartao(
    "Categoria",    
    "Pergunta",  
    "Resposta" 
);

criarCartao(
    "Q1",    
    "O que a IA simula?",  
    "Habilidades cognitivas" 
);

criarCartao(
    "Q2",    
    "Qual subcampo lida com reconhecimento de imagens",  
    "Visão computacional" 
);

criarCartao(
    "Q3",    
    "Qual a sigla do subcampo que processa linguagem natural?",  
    "PLN" 
);

criarCartao(
    "Q4",    
    "Quantos subcampos principais a IA abrange?",  
    "4" 
);

criarCartao(
    "Q5",    
    "Cite uma aplicação de IA na área da saúde mencionada.",  
    "Diagnóstico" 
);

criarCartao(
    "Q6",    
    "Qual assistente virtual mencionado ajuda em tarefas diárias?",  
    "Siri" 
);

criarCartao(
    "Q7",    
    "Qual termo refere-se ao preconceito em algoritmos?",  
    "Viés" 
);

criarCartao(
    "Q8",    
    "Para que tarefa carros autônomos usam IA?",  
    "Navegação" 
);

criarCartao(
    "Q9",    
    "Que subcampo combina IA e engenharia mecânica?",  
    "Robótica" 
);

criarCartao(
    "Q10",    
    "Em qual domínio a IA é usada para avaliação de riscos?",  
    "Finanças" 
);

document.querySelectorAll('#container .cartao').forEach(cartao => {
    if (!cartao.innerHTML.trim()) {
        cartao.remove();
    }
});