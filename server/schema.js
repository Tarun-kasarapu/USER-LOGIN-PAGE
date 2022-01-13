const mongoose=require('mongoose');

const Userschema=mongoose.Schema({
    name:String,
    email:String,
    password:Number,
})
const User=mongoose.model('User',Userschema);

module.exports=User;