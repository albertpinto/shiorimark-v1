const mongoose = require("mongoose")
const validator =require("validator")
const bcryptjs =require("bcryptjs")
const jwt =require("jsonwebtoken")

const userSchema = new mongoose.Schema({

    name: {
        type: String,
        required:true,
        trim:true
        
    },
    email:{
        type:String,
        unique:true,
        required:true,
        trim:true,
        lowercase:true,
        validate(value){
            if (!validator.isEmail(value)){
                throw new error("Email is invalid, it should like abc@cdb.com!")
            }
        }


    },
    password:{
        type:String,
        trim:true,
        required:true,
        minlength:7,
        validate(value){
            if (value.toLowerCase().includes('password')){
                throw new Error("Password is invalid, it cannot contain the value of password!")
            }
        }
    },
    company:{
        type:String,
        trim:true,
        required:false        
        
    },
    title:{
        type:String,
        trim:true,
        required:false        
        
    },
    avatar:{
        type:String,
        trim:true,
        required:false        
        
    },
    tokens :[{
        token :{
        type:String,
        required:true
        }
    }]   

})

// removes the password and tokens from the login and create routes
userSchema.methods.toJSON = function () {
    const user = this
    const userObject = user.toObject()

    delete userObject.password
    delete userObject.tokens

    return userObject
}
userSchema.methods.generateAuthToken= async function(){
    const user =this
    const token =await jwt.sign({_id:user._id.toString()},'appalupa')
    user.tokens=user.tokens.concat({token})
    await user.save()
    return token

}
userSchema.statics.findByCredentials= async (email,password)=> {

        
        //console.log (email)
        const user = await User.findOne({"email":email})
        console.log("User" + user)
        if (!user) {
            throw Error ("Unable to Login !")
        }
        const isMatch = await bcryptjs.compare(password,user.password)
        if (!isMatch) {
            console.log ('password failed')
            throw Error ("Unable to Login !")
        }        
        return user
}

//Saving a plain text password to a hashed password
userSchema.pre('save', async function(next){
    const user =this
    if (user.isModified("password")){
        user.password=await bcryptjs.hash(user.password,8)
        console.log(user.password)
    }
    //Save is done in the router model, only the hashing is done here.
    //user.save()
    next()
})
const User = mongoose.model('User', userSchema)
module.exports=User