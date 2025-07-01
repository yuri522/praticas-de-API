const express = require("express");
const app = express();
const PORT = 3000;

// Middleware para entedender JSON  no corpo das requisições
app.use(express.json());

// array (Como banco de dados )
let tarefas = [];
let idAtual = 1;

app.get("/", (requisisao, resposta) => {
  resposta.status(200).send("Bem-vindo á API");
});

app.get("/tarefas", (req, res) => {
  res.json(tarefas);
});

app.post("/tarefas", (req, res) => {
  const { titulo } = req.body;
  if (!titulo) {
    return res.status(400).json({ erro: "Titulo obgt" });
  }
  const novaTarefa = { id: idAtual++, titulo };
  tarefas.push(novaTarefa);
  res.status(201).json(novaTarefa);
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
