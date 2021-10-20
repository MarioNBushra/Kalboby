const express = require("express");

const User = require("../models/user")

const router = new express.Router();


//User Signup
router.post("/dashboard/admin/kalboby/signup", async(req, res) => {
    try {
        console.log(req.body);
        const newUser =  new User(req.body)
        await newUser.save()
        
        res.status(201).send({msg: "Account Created"})
    } catch (error) {
        res.status(400).send({msg: "Unexpected Error"})
        
    }
})

//userLogin
router.post("/dashboard/admin/kalboby/login", async(req, res) => {
    try {
        const user = await User.findByCredentials(req.body.user_name, req.body.password)
        const token = await user.generateAuthToken()
        res.send({token: token})
    } catch (error) {
        res.status(400).send({msg: error.message})
        console.dir(error);
    }
})

//get all users to test
router.get("/dashboard/admin/kalboby/users", async(req, res) => {
    try {
        const users = await User.find()
        res.send(users)
    } catch (error) {
        res.status(400).send({msg: error})
    }
})




module.exports = router;
