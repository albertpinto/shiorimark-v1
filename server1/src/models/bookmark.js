const mongoose = require("mongoose")
const Bookmark = mongoose.model('Bookmark', {
    url: {
        type: String,
        required:true,
        trim:true
    },
   title: {
       type:String,
       required:true,
       trim :true
    },
    category :{
        type:String,
        required:false,
        trim:true
    },
    image :{
        type:String,
        required:false
    },
    body: {
        type:String,
        required:false,
        trim:true
    },
    created :{
        type:String,
        required:false
        },
    user_id :{
        type:String,
        required :true
    }    
})



module.exports=Bookmark


