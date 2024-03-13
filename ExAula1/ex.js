function calcular(number1,parcela){

    if(parcela == 1){
        return number1 - (number1 * 0.1) ;
    }else if (parcela == 2){
        return number1 + (number1 * 0.05) ;
    }else if(parcela >=0 && parcela >=3 ){
        return number1 + (number1 * 0.1) ;
    }else{
        return  console.log("Erro");
    }

}

function resultado(){
    const numero1 = parseFloat(document.getElementById('number1').value);
    const parcela = parseInt(document.getElementById('parcelas').value);

    if(!isNaN(numero1) && !isNaN(parcela)){
        const resultado = calcular(numero1,parcela);

        document.getElementById('Resultado').innerText =`resultado ${resultado/parcela}` 
    }else{
        document.getElementById('Resultado').innerText =`Parcela invalida` 
    }

}