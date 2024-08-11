const mongoose = require("mongoose");
mongoose
  .connect(
    'mongodb+srv://riavveettil04:Rachel24@cluster0.2jg7stb.mongodb.net/dataDB?retryWrites=true&w=majority&appName=Cluster0'
  )
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((error) => {
    console.log(error);
  });
