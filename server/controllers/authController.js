const User = require('./../models/user')
const jwt = require('jsonwebtoken')

exports.signup = async(req,res)=>{
    console.log(req.body)
    try{
        const user = await User.create(req.body);
        const token =  jwt.sign({ id: req.body_id }, 'shhhhh');
        res.status(201).json({
            status:"Acoount sunccessfully Created ",
            token,
            data:{
                user
            } 
        })   
    }catch(e){
        res.status(201).json({
            status:"Something Went Wrong while creating account ",
            err:e
        }) 
    }

}
exports.signin = async(req,res) =>{
    try{
        const {email,password} = req.body;
        if(!email || !password){
            throw new Error("Your email or password is blank")
        }
        const user = await User.findOne({email:email});
        if(!user){
            throw new Error("Your email or password is Wrong")
        }
        const token =  jwt.sign({ id: req.body_id }, 'shhhhh');
        if(!user.checkPassword(password,user.password)){
            throw new Error("Your email or password is blank")
        } 
        res.status(200).json({
            status:"Login succesfull",
            token,
        })
    }catch(e){
        console.log(e)
        res.status(303).json({
            status:"fail",
        })
    }
   
}