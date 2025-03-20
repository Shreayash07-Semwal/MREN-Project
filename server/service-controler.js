//in the controller we write the logic of the backend


const Service=require('./models/service_model')
const services=async(req,res)=>{
try {
    const response=await Service.find();
    if(!response){
        res.status(404).json({msg:"No service found"});
        return;
    }
    return res.status(200).json({msg:response});
} catch (error) {
    console.log(`services:${error}`);
}
}
module.exports=services;