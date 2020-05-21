const mongoose = require("mongoose")
mongoose.connect('mongodb://127.0.0.1:27017/shiorimark', {
    useNewUrlParser: true,
    useCreateIndex: true
})




// const task = new Task({
//     description: "I love my Hyde and want to sleep with him tonight",
//     completed: true
// })
// task.save().then((task) => {
//     console.log(task)

// }).catch((error) => {
//     console.log(error)

// })


// task.save().then((task => {
//     console.log(task)
// }).catch((error) => {
//     console.log(error)
// })

// const User = mongoose.model('User', {
//     name: {
//         type: String,
//         required:true,
//         trim:true
        
//     },
//     email:{
//         type:String,
//         required:true,
//         trim:true,
//         lowercase:true,
//         validate(value){
//             if (!validator.isEmail(value)){
//                 throw new error("Email is invalid, it should like abc@cdb.com!")
//             }
//         }


//     },
//     password:{
//         type:String,
//         trim:true,
//         required:true,
//         minlength:7,
//         validate(value){
//             if (value.toLowerase().includes('password')){
//                 throw new Error("Password is invalid, it cannot contain the value of password!")
//             }
//         }
//     },
//     Age: {
//         type: Number,
//         validate(value){
//             if (value<0){
//                 throw new Error("Age has to be a postive number!")
//             }
//         }
//     }

// })
// const me = new User({
//     name: "Sarmita Bhattacharyya",
//     email:"punk@123.com",
//     password:"albertpunkcat123PASSWORD",
//     Age: 47
    

// })
// me.save().then((me) => {
//     console.log(me)
// }).catch((error) => {
//     console.log(error)
// })

