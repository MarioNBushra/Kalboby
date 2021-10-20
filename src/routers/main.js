const express = require("express");

const router = new express.Router();

const User = require("../models/user")


//home page which redirect to login
router.get("/", async (req, res) => {
  res.redirect("/kalboby/signin");
});


//add client page
router.get("/client/add", (req, res) => {
  res.render("add_client");
});

// rendering edition page 
router.get("/user/edit", async (req, res) => {
  res.render("details_edit");
});


//rendering home page
router.get("/home", async (req, res) => {
  let pages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
  res.render("home", {
    pages: pages,
  });
});


//rendering signin page which redirect from home page
router.get("/kalboby/signin", async (req, res) => {
  res.render("signin", {
    layout: false,
  });
});





  


module.exports = router;
