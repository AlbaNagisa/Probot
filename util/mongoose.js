const mongoose = require("mongoose");

module.exports = {
  init: () => {
    const mongOptions = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
      autoIndex: false, 
      poolSize: 10, 
      serverSelectionTimeoutMS: 5000, 
      socketTimeoutMS: 45000,
      family: 4
    }

    mongoose.connect('mongodb+srv://Alban:Banban123@probote.844kw.mongodb.net/probote?retryWrites=true&w=majority', mongOptions);
    mongoose.Promise = global.Promise;
    mongoose.connection.on("connected", () => console.log("Mongoose est connecté!"));
  }
}