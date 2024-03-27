//variavel , nao pode ser acessado externamente, nao possie visibilidade
//atributo precisa de metodo

class Vendas {
    constructor(numero1) {
        this.numero1 = numero1;
    }

    getNumero() {
        return this.numero1;
    }
}

var maior = parseInt(-10000);
var listVendas = [];
var mediaMedia =0;
lista = [];

document.getElementById('formulario').addEventListener('submit', function (event) {
    event.preventDefault(); // Obtendo os valores dos campos

    const numero1 = parseFloat(document.getElementById('numero1').value);

    const vendas = new Vendas(numero1);
    listVendas.push(vendas);
    var txt =``;
    if(vendas.getNumero() > maior){
        maior = vendas.getNumero();
    }
    txt += `Valor: ${vendas.getNumero()}\n`;
    txt += `Maior: ${maior}\n`;
    lista.push(`${vendas.getNumero()}`);

    var n = 0
    for(let num in listVendas){
       n += listVendas[num].getNumero();
    }
    mediaMedia = n/listVendas.length
    txt += `Média: ${mediaMedia}\n\n`;
    document.getElementById('resultado').innerText = txt;
    
    for(let num in lista){
        document.getElementById('listaVendas').innerHTML =`<li>${}</li>`;
    }
});