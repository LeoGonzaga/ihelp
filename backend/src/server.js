const express = require("express");
const session = require("express-session");
const mongoose = require("mongoose");
var cors = require('cors');
const routes = require("./routes");
require('dotenv/config');


const app = express();

mongoose.connect(
  'mongodb+srv://leogonzaga:bloodhelp@omnistack-ekd7k.mongodb.net/test?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);
app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3000, function() {
  console.log("Servidor online!");
});
