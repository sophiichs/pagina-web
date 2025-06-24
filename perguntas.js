criarCartao(
    "Categoria",    
    "Pergunta",  
    "Resposta" 
);

criarCartao(
    "Q1",    
    "O que é um motor de combustão interna?",  
    "Um motor de combustão interna é um tipo de motor em que a queima de combustível ocorre dentro de câmaras de combustão. O combustível é queimado com ar, gerando gases que movimentam pistões, que, por sua vez, geram movimento mecânico." 
);

criarCartao(
    "Q2",    
    "O que é um carro híbrido?",  
    " Um carro híbrido combina um motor de combustão interna com um motor elétrico. Ele pode ser movido por ambos os motores, seja separadamente ou em conjunto, ajudando a reduzir o consumo de combustível e as emissões de poluentes." 
);

criarCartao(
    "Q3",    
    "O que é o torque de um carro?",  
    "O torque é a força de rotação gerada pelo motor, que ajuda a movimentar o carro. Ele é essencial para determinar a aceleração e a capacidade de um carro de subir colinas ou carregar pesos." 
);

criarCartao(
    "Q4",    
    "O que é ABS em um carro?",  
    "ABS (Sistema de Freios Antibloqueio) é uma tecnologia que evita que as rodas travem durante uma frenagem intensa, permitindo ao motorista manter o controle da direção e reduzindo o risco de acidentes." 
);

criarCartao(
    "Q5",    
    "O que é o câmbio automático?",  
    "O câmbio automático é um tipo de transmissão que ajusta automaticamente a mudança de marchas, sem a necessidade de intervenção manual do motorista. Ele oferece mais conforto e facilita a condução." 
);

criarCartao(
    "Q6",    
    "O que é um carro elétrico?",  
    "Um carro elétrico é movido por um motor elétrico alimentado por baterias recarregáveis. Ele não usa combustível tradicional, como gasolina ou diesel, e é mais ecológico, já que emite menos poluentes." 
);

criarCartao(
    "Q7",    
    "O que significa 0 a 100 km/h",  
    "0 a 100 km/h é uma medida de desempenho de um carro, que indica o tempo que ele leva para acelerar de 0 a 100 km/h. Quanto menor o tempo, melhor é o desempenho do veículo." 
);

criarCartao(
    "Q8",    
    "O que é um airbag em um carro?",  
    "O airbag é um dispositivo de segurança que se infla rapidamente durante uma colisão para proteger os ocupantes do carro, reduzindo o risco de ferimentos ao impedir que o corpo bata com força contra o volante, painel ou janelas." 
);

criarCartao(
    "Q9",    
    "O que é o controle de tração (TCS)?",  
    "O Controle de Tração (TCS) é um sistema que ajuda a evitar que as rodas patinem ao acelerar, especialmente em superfícies escorregadias. Ele ajusta a potência do motor ou aplica os freios nas rodas para manter a tração." 
);

criarCartao(
    "Q10",    
    " O que é um turbo em um motor de carro?",  
    "O turbo é um dispositivo que aumenta a potência do motor ao forçar mais ar (e, consequentemente, mais oxigênio) para dentro dos cilindros, o que permite queima de combustível mais eficiente. Isso resulta em mais potência sem aumentar significativamente o tamanho do motor, ajudando a melhorar a performance e a eficiência de combustível." 
);

document.querySelectorAll('#container .cartao').forEach(cartao => {
    if (!cartao.innerHTML.trim()) {
        cartao.remove();
    }
});