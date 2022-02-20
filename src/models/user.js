const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
// const Task = require('./task')
const crypto = require('crypto')
const exp = require('constants')

const userSchema = new mongoose.Schema({
    user_name: {
        type: String,
        required: true,
        unique: true,
        trim: true // trim in mongoose use to remove the white spaces from the strings
    },
    // email: {
    //     type: String,
    //     required: true,
    //     unique: true,
    //     trim: true,
    //     lowercase: true,
    //     validate(value){
    //         if(!validator.isEmail(value)){
    //             throw new Error('Email is invalid')
    //         }
    //     }

    // },
    password: {
        type: String,
        required: true,
        trim: true,
        minlength: 7,
        validate(value){
            if(value.toLowerCase().includes('password')){
                throw new Error('Password cannot contains password')
            }
        }
    },
    tokens: [{
        token: {
            type: String,
            required: true
        }
    }]
}, {timestamps: true})


// userSchema.methods.generatePasswordReset = async function() {
//     this.resetPasswordToken = crypto.randomBytes(20).toString('hex');
    
//     this.resetPasswordExpires = Date.now() + 3600000; //expires in an hour
// };
   


// userSchema.virtual('tasks', {
//     ref: 'Task',
//     localField: '_id',
//     foreignField: 'owner'
// })

userSchema.methods.toJSON = function(){
    const user = this
    const userObject = user.toObject()
    delete userObject.password
    delete userObject.tokens
    return userObject

}



userSchema.methods.generateAuthToken = async function(){
    const user = this
    const token = jwt.sign({_id: user._id.toString()}, "MarioBushra", {expiresIn: "1h"} )
    user.tokens = user.tokens.concat(({token}))
    await user.save()
    return token
}

userSchema.statics.findByCredentials = async (user_name, password) => {
    const user = await User.findOne({user_name})
    if(!user){
        throw new Error('Not User')
    }
    const isMatch = await bcrypt.compare(password, user.password)
    if(!isMatch){
        throw new Error('Incorrect Password')
    }
    return user
}




userSchema.pre('save', async function(next){
    const user = this
    if(user.isModified('password')){
        user.password = await bcrypt.hash(user.password, 8)
    }
    next()

})

userSchema.pre('remove', async function(next){
    const user = this
    await Task.deleteMany({owner: user._id})
    next()
})

const User = mongoose.model('User', userSchema)


module.exports = User