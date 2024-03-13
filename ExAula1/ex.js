function calcular(number1,parcela){

    if(parcela == 1){
        return number1 - (number1 * 0.1) ;
    }else if (parcela == 2){
        return number1 + (number1 * 0.05) ;
    }else{
        return number1 + (number1 * 0.1) ;
    }

}

function resultado(){
    const numero1 = parseFloat(document.getElementById('number1').value);
    const parcela = parseFloat(document.getElementById('parcelas').value);

    if(!isNaN(numero1) && !isNaN(parcela)){
        const resultado = calcular(numero1,parcela)/parcela;

        document.getElementById('Resultado').innerText =`resultado ${resultado}` 
    }

}