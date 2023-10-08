
const User = require('./../models/user')
const jwt = require('jsonwebtoken')
const {promisify} = require('util')

exports.signup = async(req,res)=>{
    // console.log(req.body)
    try{
        const user = await User.create(req.body);
        console.log(user)
        const token =  jwt.sign({ id:user._id }, 'shhhhh');
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
        const user = await User.findOne({email:email}).select('+password');
        // console.log(user)
        if(!user){
            throw new Error("Your email or password is Wrong")
        }
        const token =  jwt.sign({ id: user._id }, 'shhhhh');
        const checker = await user.checkPassword(password,user.password)
        
        
         if(!checker){
            throw new Error("Your email or password is Wrong")
         }
         res.status(200).json({
            status:"Login succesfull",
            token,
        })

    }catch(e){
        res.status(303).json({
            status:"Something Went Very Wrong",
        })
    }
   
}

exports.protect = async(req,res,next) =>{
  
    try{
        if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
            token = req.headers.authorization.split(' ')[1];
        }
     console.log(token);
       if(!token){
        throw new Error("token didn't exist")
       }
       const decoded = await promisify(jwt.verify)(token, 'shhhhh')
      
       const currentuser = await User.findOne({_id:decoded.id})
    //    console.log(currentuser)
       if(!currentuser){
        throw new Error("User Not Exist ")
       }
       console.log(currentuser)
       req.currentuser=currentuser;
      

       next()
    }catch(e){
        res.status(403).json({
            status:"sonething Went Very Wrong",
            e
        })
    }

}