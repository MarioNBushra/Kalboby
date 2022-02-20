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
    
    const patient = await Patient.findByIdAndUpdate({_id}, req.body)
    await patient.save()
    res.send(patient)
  } catch (error) {
    res.status(400).send({ msg: error.message });
    console.log(error);
  }
});

//delete specific patient
router.post("/patient/delete/:id", async(req, res) => {
    try {
        const _id = req.params.id
        const patient = await Patient.findByIdAndDelete({_id})
        res.send({url: "/home"})
    } catch (error) {
        res.status(400).send({msg: error.message})
    }
})

//read all patient WITHOUT PAGINATION
router.get("/patient/read", async (req, res) => {
  try {
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
