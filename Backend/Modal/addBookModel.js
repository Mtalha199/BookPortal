const mongoose=require('mongoose')
 
const addBookSchema=new mongoose.Schema({
    tittle:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true
        
    },
    no_of_pages:{
        type:Number,
        required:true

    },
    published_at:{
        type:Date,
        required:true
        
    }
})
module.exports = mongoose.model('book',addBookSchema);