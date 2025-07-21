const serVer = require("./models/serVer");
 
exports.create = async (req, res) => {
  const { descricao} = req.body;
 
  if (!descricao) {
    return res.status(400).json({ erro: "Preencha a descrição e o titulo" });
  }
  try {
    const novaTarefa = new serVer({ descricao});
    await novaTarefa.save();
    res.status(201).json(novaTarefa);
  } catch (error) {
    res.status(500).json({ erro: "Erro ao incluir tarefa" });
  }
};
 
exports.update = async (req, res) => {
  const { id } = req.params;
  const { descricao} = req.body;
 
  if (!descricao) {
    return res
      .status(400)
      .json({ erro: "Preencha a nova descrição " });
  }
 
  try {
    const tarefas = await serVer.findByIdAndUpdate(
      id,
      { descricao },
      { new: true }
    );
 
    if (!tarefas) {
      return res.status(404).json({ erro: "Tarefa não existente" });
    }
 
    res.json(tarefas);
  } catch (error) {
    res.status(500).json({ erro: "Erro ao atualizar tarefa" });
  }
};