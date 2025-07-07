const mongoose = require("mongoose");

const serVerSchema = new mongoose.Schema({
  descricao: { type: String, required: true },
});

module.exports = mongoose.model("serVer", serVerSchema);
