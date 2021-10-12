const express = require("express");

const hbs = require("express-handlebars");

const path = require("path");

const app = express();

const puppeteer = require("puppeteer");

app.use(express.urlencoded({ extended: true }));


const port = process.end.PORT || 5050
// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, "./public/");
const viewsPath = path.join(__dirname, "./templates/views");

console.log(publicDirectoryPath);

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

// app.get("/page", (req, res) => {
//   res.render("page", {
//     description: "Welcome to My Page",
//   });
// });

app.get("/client/add", (req, res) => {
  res.render("add_client");

});

app.get("/" , async(req, res) => {
  res.send("Hello ")
})

app.get("/home", async(req, res) => {
  res.render("page")
})

app.listen(port, () => {
  console.log("http://localhost:5050/");
});
