const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");

const app = express();

mongoose.connect(
  " mongodb+srv://leogonzaga:bloodhelp@omnistack-ekd7k.mongodb.net/bloodhelp?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

app.use(express.json());
app.use(routes);

app.listen(3000, function() {
  console.log("Servidor online!");
});
