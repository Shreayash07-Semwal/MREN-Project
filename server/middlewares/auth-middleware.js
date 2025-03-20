//token verification
const jwt=require('jsonwebtoken');
const User=require('../models/user-model');
const authMiddleware=async(req,res,next)=>{
    const token=req.header("Authorization");
    //assuming token is in the format "Bearer <jwt token>,Removing the "bearer" prefix"
    const jwtToken=token.replace("Bearer","").trim();
    //trim method remove the extra spacess.
    // console.log("token from auth-middleware",jwtToken);
    try{
        const isVerify=jwt.verify(jwtToken,process.env.JWT_SECRET_KEY);
        // console.log(isVerify);
        const userData=await User.findOne({email:isVerify.email}).select({
            password:0,
        });
        console.log(userData);
        req.user=userData;
        req.token=token;
        req.userId=userData._id;
    next();
    }
    catch(err){
        return res.status(400).json({msg:"Umauthorized HTTP,Token not provided"});
    }
}
module.exports=authMiddleware;