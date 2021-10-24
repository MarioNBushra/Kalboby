const jwt = require('jsonwebtoken')
const User = require('../models/user')


const auth = async (req, res, next) => {
    try {
        // const token = req.header('Authorization').replace('Bearer ', '')//Bearer is not important we can type any word 
        const token = req.cookies.tokenAuth
        
        const decoded = jwt.verify(token, "MarioBushra")
        const user = await User.findOne({_id: decoded._id, 'tokens.token': token})
        
        if(!user){
            throw new Error('Not User')
        }

        req.token = token
        req.user = user 
        
        next()
    } catch (e) {
        res.status(401).redirect("/")
        
    }
}


module.exports = auth

