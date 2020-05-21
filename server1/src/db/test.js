const mongoose = require("mongoose")
mongoose.connect('mongodb://127.0.0.1:27017/bookmarker', {
    useNewUrlParser: true,
    useCreateIndex: true
})


const Bookmark = mongoose.model("Bookmark", {
    title:{
        type :String,
        required:true
    },
    category:{
        type: String
    },
    date :{
        type :String
    },
    details :{
        type :String
    } 

})

const bookmark = new Bookmark ({
    category:"Mail",
    date :"12/20/2019",
    details:"This provides the details of email that I widely use" 
})
bookmark.save().then(bookmark => {
    console.log(bookmark)
}).catch((error )=> {
    console.log (error)
})

