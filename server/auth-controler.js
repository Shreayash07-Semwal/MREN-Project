const User=require('../server/models/user-model');
const bcrypt=require("bcryptjs");
const home=async(req,res)=>{
    try{
        res.status(200).send("home page");
    }
    catch(error){
        // console.log(error);
        next(error)
    }
}
const register=async(req,res,next)=>{
    try{
        console.log(req.body);
        const {username,email,phone,password}=req.body;
        //checking that user already exist or not.
         const userExists=await User.findOne({email:email});
         if(userExists){
           return res.status(400).json({message:"email already exist!"});
         }
          //hash password(one way and another is in user_model)
        //   const saltRound=10;//define the strenght of hashing
        //   const hash_password=await bcrypt.hash(password,saltRound);

        const userCreated= await User.create({
            username,
            email,
            phone,
            password
        });

        res.status(201).json({msg:"registration successfully",token:await userCreated.generateToken(),user_Id:userCreated._id.toString()
        });
    }
    catch(error){
        // req.status(500).json("internal server error");
        next(error);
    }
};

//login
const login =async(req,res,next)=>{
 try{
    const {email,password}=req.body;
    const userExist=await User.findOne({email:email});
    if(!userExist){
        return res.status(400).json({msg:"Invaild Credentials"});
    }
    // const isPasswordValidate=await bcrypt.compare(password,userExist.password);
const isPasswordValidate=await userExist.comparePassword(password);

  if(isPasswordValidate){
    res.status(200).json({msg:"login successfully",token:await userExist.generateToken(),user_Id:userExist._id.toString()});
  }
  else{
    res.status(401).json({msg:"invaild email or password"})
  }
 }
 catch(error){
    // res.status(500).json("internal server error")
    next(error);
 }
}

//to send user data

const user=async(req,res)=>{
  try{
  const userData=req.user;  
  console.log(userData);
  return res.status(200).json({userData});
  }
  catch(error){
    console.log("error form the user root");
  }
}
module.exports ={home,register,login,user};
