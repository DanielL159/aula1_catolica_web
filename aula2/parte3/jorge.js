
function cadastrar(){
    let vetor = [];
    
    let nome = document.getElementById("nome").value;
    let valor = document.getElementById("valor").value;
    
    vetor.push(nome);
    vetor.push(valor);
    document.write("<p style='background-color:red; text-align:center; display:inline-block;'> " + valor +"</p>")
}
   