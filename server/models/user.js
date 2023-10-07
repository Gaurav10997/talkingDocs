const mongoose = require("mongoose")
const {Schema} = mongoose

const UserSchema = new Schema({
    username:{
        type:String,
        required:[true,"Please Enter Your Name"]
    },
    email:{
        type:String,
        required:[true,"Please Enter Your Email"]
    },
    password: {
        type: String,
        required: true,
        minlength: 8,
        select: false
        },

        yourDocuments:[
            {
              name:String
            }
        ],
})

const User = mongoose.model('User' , UserSchema );

module.exports = User
