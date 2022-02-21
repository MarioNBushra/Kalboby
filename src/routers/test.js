const express = require("express");
const async = require("hbs/lib/async");

const Test = require("../models/test");

const router = new express.Router();

router.post("/test", async (req, res) => {
  try {
    const newTest = new Test(req.body);
    await newTest.save();
    res.send({ msg: "Ma4y Ya Bisho" });
  } catch (error) {
    res.status(400).send({ msg: error.message });
  }
});

router.get("/test/read", async (req, res) => {
  try {
    const tests = await Test.find().lean();
    res.send(tests);
  } catch (error) {
    res.status(400).send({ msg: error.message });
  }
});

module.exports = router;
