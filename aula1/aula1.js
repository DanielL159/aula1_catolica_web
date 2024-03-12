//prompt diferente de console.log 
//alert ele mostra o resultado na hr 
//js nao e tipado 
function somarNumeros(numero1,numero2){
    return numero1 + numero2;
}

//função para mostrar o resultado na pagina 
function mostraResultado(){
    const numero1 = parseFloat(document.getElementById('number1').value);
    const numero2 = parseFloat(document.getElementById('number2').value);

    if(!isNaN(numero1) && !isNaN(numero2)){
        const resultado = somarNumeros(numero1,numero2);
    
        document.getElementById('Resultado').innerText = `A soma de ${numero1} e ${numero2} : ${resultado}`;
    }else{
        document.getElementById('Resultado').innerText = 'Por favor ,insira numeros validos.';
    }
}


