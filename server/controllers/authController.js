const User = require("../models/user")



exports.signIn = async(req,res)=>{
    try {


        const savedUser = await  User.create(req.body);
         res.status(201).json({
            status:'Account Created Succefully',
            user:savedUser
         })

    } catch (error) {
        res.status(404).json({
            status:'Something Went Very Wrong',
            user:savedUser
         })
    }
}



exports.signUp  = async(req,res) =>{
    try{
      const currUser = await User.findOne(req.body);
      if(currUser){
        res.status(201).json({
            status:'Account Created Succefully',
            user:currUser
         })
      }

    }catch(e){

    }
}














