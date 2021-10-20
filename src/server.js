const express = require("express");

const hbs = require("express-handlebars");

const path = require("path");

const app = express();

// const dotenv = require("dotenv")

require("./db/mongoose")
require("dotenv").config({path: path.join(__dirname, "./dev.env")})

app.use(express.urlencoded({ extended: true }));




const port = process.env.PORT
// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, "./public/");
const viewsPath = path.join(__dirname, "./templates/views");


//Setup static directory to serv
app.use(express.static(publicDirectoryPath));

//Setup handlebars engine and views location
app.set("view engine", "hbs"); // Setup hbs engine
app.set("views", viewsPath); // Setup views location

app.engine(
  "hbs",
  hbs({
    extname: "hbs",
    defaultLayout: "main",
    layoutsDir: __dirname + "/templates/layouts/",
  })
);

app.use(express.json());


//require routers
const mainController = require("./routers/main")
const usersController = require("./routers/admin")
const patientController = require("./routers/patient")



//useing routers
app.use(mainController)
app.use(usersController)
app.use(patientController)



app.listen(port, () => {
  console.log("server is up on", port);
});
