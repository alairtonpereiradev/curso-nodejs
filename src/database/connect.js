const mongoose = require("mongoose");
const uri_1 = `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cursosdeprogramacao.x9ry8.mongodb.net/cursodeprogramacaodb?retryWrites=true&w=majority`
const connectToDatabase = async () => {
  mongoose.connect(
    uri_1,
    (error) => {
      if (error) {
        return console.log(
          "Ocorreu um erro ao se conectar com o banco de dados: ",
          error
        );
      }

      return console.log("Conexão ao banco de dados realizada com sucesso!");
    }
  );
};

module.exports = connectToDatabase;

