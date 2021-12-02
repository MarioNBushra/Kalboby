const express = require("express");

const User = require("../models/user")

const router = new express.Router();

const auth = require("../middleware/auth")


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
        console.log(req.body);
        const user = await User.findByCredentials(req.body.user_name, req.body.password)
        const token = await user.generateAuthToken()
        
        res.cookie("tokenAuth", token)
        res.json({url: "/home"})
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

//Logout
router.get('/dashboard/admin/logout', auth ,async (req, res) => {
    try{
        console.log("Hello From Logout API");
        const user = req.user
        console.log(user);
        user.tokens = user.tokens.filter((token) => {
            return token.token !== req.token
        })

        
        await user.save()

        res.redirect("/kalboby/signin")
    }catch(e){
        res.status(400).send({error: 'Error 400'})
    }
})




module.exports = router;
