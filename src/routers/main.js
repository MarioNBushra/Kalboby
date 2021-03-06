const express = require("express");

const router = new express.Router();

const User = require("../models/user");

const Patients = require("../models/patient");

//require middleware
const auth = require("../middleware/auth");

//home page which redirect to login
router.get("/", async (req, res) => {
  res.redirect("/kalboby/signin");
});

//add client page
router.get("/client/add", auth, (req, res) => {
  res.render("add_client");
});

// rendering edition page
router.get("/user/details/:id", auth, async (req, res) => {
  try {
    const patient = await Patients.findById(req.params.id).lean();

    res.render("details_edit", {
      patient: patient,
    });
  } catch (error) {}
});

//rendering home page
router.get("/home", auth, async (req, res) => {
  const patients = await Patients.find().lean();
  res.render("home", {
    patients: patients,
  });
});

//rendering signin page which redirect from home page
router.get("/kalboby/signin", async (req, res) => {
  res.render("signin", {
    layout: false,
  });
});

//rendering add product page
router.get("/product/add", async (request, res) => {
  try {
    res.render("add_product", {
      title: "Add Product",
      name: "Add Product",
    });
  } catch (error) {
    res.status(400).send({ msg: error.message });
  }
});

module.exports = router;
