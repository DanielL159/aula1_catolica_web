/*baixar node */
const express = require('express');
const app = express();
const path = require('path');

const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=> console.log(`Servidor rodando na porta ${PORT}`));
console.log('Servidr iniciado com sucesso!')