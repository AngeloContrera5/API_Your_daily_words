const path = require("path");
const dotenv = require("dotenv");

dotenv.config({ path: path.join(__dirname, "./.env") });
const express = require("express");
const app = express();
const morgan = require("morgan");

//  settings
app.set("port", process.env.PORT);
app.set("json spaces", 2);

//  middlewares
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//  routes
app.use(require("./routes/index"));

//  starting the server
app.listen(app.get("port"), () => {
  console.log("Server on port " + process.env.PORT);
});
