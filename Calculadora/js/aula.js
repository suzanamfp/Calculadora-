//var //GLOBAL
//const //ESCOPO
//let // ESCOPO

// ----------JS é fracamente tipado---------

function calcular(elementId1, elementId2, elementId3, operation){
                   
    x      = parseFloat (document.getElementById(elementId1).value);//responsavel por receber o valor do elemento 1
    y      = parseFloat (document.getElementById(elementId2).value);//responsavel por receber o valor do elemento 2
    result = parseFloat (document.getElementById(elementId3).value);//responsavel por passar o resultado pro elemento no HTML
    
    operation  = document.getElementById(operation).value;
    
    if(operation == "somar"){
        result = x + y;
    } else if(operation == "subtrair"){
        result = x - y;
    } else if(operation =="multiplicar"){
        result = x * y;
    } else if(operation == "dividir"){
        result = x / y;
    } else {
        ("Operação não realizada");
    }

    document.getElementById(elementId3).value=result;
}
    
    //Fazer a calculador a funcionar

