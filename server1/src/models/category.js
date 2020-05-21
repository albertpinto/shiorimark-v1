const mongoose =require('mongoose')
const Category =mongoose.model('Category', {
    title: {
        type:String,
        required:true,
        trim:true
    },
    created :{
        type:String,
        required:false        
    },
    user_id :{
        type:String,
        required:true
    }

})

module.exports=Category

