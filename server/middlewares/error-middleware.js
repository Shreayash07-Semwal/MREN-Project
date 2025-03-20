//error middleware used for if we want to provide error to the frontend then this will provide us that error.
const errorMiddleware=(err,req,res,next)=>{
 const status=err.status || 500;
 const message=err.message || "BACKEND ERROR";
 const extraDetails=err.extraDetails || "Error from beckend";

 return res.status(status).json({message,extraDetails});
};
module.exports=errorMiddleware;