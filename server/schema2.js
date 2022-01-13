const mongoose=require('mongoose');

var create=mongoose.Schema({
    name:String,
    file:String,
    
})
module.exports=mongoose.model('Img',create);