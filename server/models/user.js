const mongoose = require("mongoose")
const {Schema} = mongoose
const bcrypt = require("bcrypt")
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
    confirmpassword: {
        type: String,
        required: true,
        minlength: 8,
        validate:{
            validator:function(){

            },
            message:"Passord didn't match"
        },
        select: false
        },

        yourDocuments:[
            {
              name:String
            }
        ],
})


UserSchema.pre('save', async function(next) {
    // Only run this function if password was actually modified
    if (!this.isModified('password')) return next();
  
    // Hash the password with cost of 12
    this.password = await bcrypt.hash(this.password, 12);
    // Delete passwordConfirm field
    this.confirmpassword = undefined;
    next();
  });

UserSchema.methods.checkPassword = async function(realpassword,password) {

    return await bcrypt.compare(realpassword,password)
};


const User = mongoose.model('User' , UserSchema );

module.exports = User
