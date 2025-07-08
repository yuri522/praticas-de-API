const express = require("express");
require("./db");
const serVer = require("./models/serVer");
const app = express();
const PORT = 3000;

//
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("Bem Vindo a API");
});

app.post("/tarefas", async (req, res) => {
  const { descricao } = req.body;
  if (!descricao) {
    return res.status(400).json({ erro: "Preencha a Descrição" });
  }
  try {
    const novaTarefa = new serVer({ descricao });
    await novaTarefa.save();
    res.status(201).json(novaTarefa);
  } catch (error) {}
  res.status(500).json({ erro: "Erro ao incluir tarefa" });
});

app.delete("/tarefas/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const tarefas = await serVer.findByIdAndDelete(id);
    if (!tarefas) {
      return res.status(400).json({ erro: "Tarefa não Encontrada" });
    }
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ erro: "Erro ao Remover Tarefa" });
  }
});

app.get("/tarefas/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const tarefas = await serVer.findById(id);
    if (!tarefas) {
      return res.status(404).json({ erro: "Tarefa não Encontrada" }); // 404 é mais apropriado para "não encontrado"
    }
    res.status(200).json(tarefas);
  } catch (error) {
    res.status(500).json({ erro: "Erro ao Buscar Tarefa" });
  }
});

app.put("/tarefas/:id", async (req, res) => {
  const { id } = req.params;
  const { descricao } = req.body;
  if (!descricao) {
    return res.status(400).json({ erro: "Preencha a nova descrição" });
  }
  try {
    const tarefas = await serVer.findByIdAndUpdate(
      id,
      { descricao },
      { new: true }
    );

    if (!tarefas) {
      return res.status(404).json({ erro: "Tarefa não existe" });
    }
    res.json(tarefas);
  } catch {
    error;
    res.status(500).json({ erro: "Erro ao atualizar tarefa" });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor Rodando na portas ${PORT}`);
});
