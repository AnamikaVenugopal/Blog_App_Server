const mongoose = require('mongoose');
const userSchema = new mongoose.Schema(
    {
    email: {
        type:String,
        required:true,
        unique:true,
},
password:{
    type:String,
    required:true,
},
name:{
    type:String,
    required:true,
},
gender:{
    type:String,
    required:true,
    enum:["male","female","other"],
},
profilePicture:{
    type:String,
    default:"https://i.pinimg.com/736x/0c/6c/e9/0c6ce9aa4b997f50b2af039c8631c125.jpg"
},
},
{
        timestamps:true,
    }
);

module.exports= mongoose.model{"User",userSchema};