const express = require('express');
const app = express();
const path = require('path');


app.use(express.static(path.join(__dirname, 'public')));
app.get('/', (req, res) => {res.sendFile(path.join(__dirname, 'public', 'index.html'));})
let idades = [];

app.get('/cadastrar/:idade', (req, res) => {
    const valor = parseInt(req.params.idade);
    idades.push(valor);
    res.send(`Idade ${valor} cadastrada com sucesso.`);
});

app.get('/resultado',(req,res) => {
    
    maior = 0;
    valorSomado = 0;
    let resposta = "";
    resposta += `Numero de idades inserido e ${idades.length}\n`;
   
    idades.forEach(idade => {
        valorSomado+=idade
        if(idade >maior){
            maior = idade;
        }
    });

    resposta +=`Soma das idades: ${valorSomado}\n`
    resposta += `maior idade:${maior}\n `

    res.send(resposta);
})




const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
console.log('Servidor iniciado com sucesso!');

