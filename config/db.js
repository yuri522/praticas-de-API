const mongoose = require("mongoose");

mongoose.set("strictQuery", true);

require("dotenv").config();

// Credenciais DB
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASS;

async function main() {
  await mongoose.connect(
    `mongodb+srv://${dbUser}:${dbPassword}@cluster0.90wz61g.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
  );

  console.log("Conectou ao Banco de dados ");
}

main().catch((err) => console.log(err));

module.exports = main;

//