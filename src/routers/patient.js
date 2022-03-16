const express = require("express");
const Patient = require("../models/patient");

const router = new express.Router();

//insert patient
router.post("/patient/add", async (req, res) => {
  try {
    console.log(req.body);
    const newPatient = new Patient(req.body);
    await newPatient.save();
    res.send(newPatient);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

//edit specific patient
router.post("/patient/edit/:id", async (req, res) => {
  try {
    _id = req.params.id;

    const patient = await Patient.findByIdAndUpdate({ _id }, req.body);
    await patient.save();
    res.send(patient);
  } catch (error) {
    res.status(400).send({ msg: error.message });
    console.log(error);
  }
});

//delete specific patient
router.post("/patient/delete/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const patient = await Patient.findByIdAndDelete({ _id });
    res.send({ url: "/home" });
  } catch (error) {
    res.status(400).send({ msg: error.message });
  }
});

//read all patient WITHOUT PAGINATION
router.post("/patient/read", async (req, res) => {
  try {
    //body handle
    let offsetBody = req.body.offset;
    const offset = offsetBody ? parseInt(offsetBody) : false;
    let sizeBody = req.body.size;
    const size = sizeBody ? parseInt(sizeBody) : false;
    const categoryID = req.body.categoryID;
    const searchText = req.body.searchText;
    const type = req.body.type;

    const patientSearch = searchText
      ? await Patient.find({
          $or: [
            { owner_name: new RegExp(searchText, "gi") },
            { pet_name: new RegExp(searchText, "gi") },
          ],
        })
          .limit(size)
          .skip(offset)
      : false;

    if (patientSearch != false || patientSearch.length === 0) {
      return res.send(patientSearch);
    }
    const patients = await Patient.find();
    res.send(patients);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

//read specific patient
router.get("/patient/read/:id", async (req, res) => {
  try {
    const patient = await Patient.findById(req.params.id);
    if (!patient) {
      return res.status(404).send({ msg: "Not Patient" });
    }
    res.send(patient);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

module.exports = router;
