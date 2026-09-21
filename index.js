const express = require('express');
const app = express();
const PORT = process.env.PORT || 80;

app.get('/', (req, res) => {
  res.json({
    status: "Sucesso",
    message: "Aplicação SSDLC rodando perfeitamente!",
    membros: ["Gabriela da Silva de Liz", "Sistemas de Informação - 2026"]
  });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
}); 
