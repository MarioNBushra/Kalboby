const express = require("express");

const hbs = require("express-handlebars");

const path = require("path");

const app = express();

const cookieParser = require('cookie-parser')

// const dotenv = require("dotenv")

require("./db/mongoose")
require("dotenv").config({path: path.join(__dirname, "./dev.env")})

app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());


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

//////////////////////// S T A R T - C O R S ////////////////////////
const cors = require("cors")
// const corsOpts = {
//   origin: '*',

//   methods: [
//     'GET',
//     'POST',
//   ],

//   allowedHeaders: [
//     'Content-Type',
//   ],
// };

app.use(cors());


//////////////////////// E N D - C O R S ////////////////////////

//require routers
const mainController = require("./routers/main")
const usersController = require("./routers/admin")
const patientController = require("./routers/patient")



//useing routers
app.use(mainController)
app.use(usersController)
app.use(patientController)

app.post("/test", async(req, res) => {
  
  console.log(req.body);
  res.send("ok")
})


app.post("/setCookie", (req, res) => {
  res.cookie("name", "mario")
  res.redirect("/home")
})






app.listen(port, () => {
  console.log("server is up on", port);
  
});
