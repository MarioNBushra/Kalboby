const express = require("express");
const Patient = require("../models/patient");

const router = new express.Router();
//insert patient
router.post("/patient/add", async (req, res) => {
  try {
    // const obj = {
    //     owner_name: req.body.owner_name,
    //     address: req.body.address,
    //     phone: req.body.phone,
    //     pet_name: req.body.pet_name,
    //     pet_age: req.body.pet_age,
    //     pet_weight: req.body.pet_weight,
    //     pet_species: req.body.pet_species,
    //     pet_breed: req.body.pet_breed,
    //     pet_color: req.body.pet_color,
    //     pet_gender: req.body.pet_gender,
    //     pet_natured: req.body.pet_natured,
    //     pet_vaccination: [
    //         {
    //             "vaccination_name": req.body.pet_vaccination[0].vaccination_name,
    //             "vaccination_date": req.body.pet_vaccination[0].vaccination_date
    //         }
    //     ],
    //     comments: req.body.comments,
    // }
    const newPatient = new Patient(req.body);
    await newPatient.save();
    res.send(newPatient);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

//edit specific patient
router.patch("/patient/edit/:id", async (req, res) => {
  try {
    // const updates = Object.keys(req.body);
    // const allowedUpdates = ["description", "completed"];
    // const isValidOperation = updates.every((update) => {
    //   return allowedUpdates.includes(update);
    // });
    // if (!isValidOperation) {
    //   return res.status(400).send({ error: "Invalid updates" });
    // }
    _id = req.params.id;
    // const patient = await Patient.findOne({_id});
    // if (!patient) {
    //   res.status(404).send("Not patient");
    // }
    // updates.forEach((update) => {
    //   patient[update] = req.body[update];
    // });
    // await patient.save();

    // res.send(task);
    const patient = await Patient.findByIdAndUpdate({_id}, req.body)
    await patient.save()
    res.send(patient)
  } catch (error) {
    res.status(400).send({ msg: error.message });
    console.log(error);
  }
});

//delete specific patient
router.delete("/patient/delete/:id", async(req, res) => {
    try {
        const _id = req.params.id
        const patient = await Patient.findByIdAndDelete({_id})
        res.send({msg: "Deleted"})
    } catch (error) {
        res.status(400).send({msg: error.message})
    }
})

//read all patient
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
