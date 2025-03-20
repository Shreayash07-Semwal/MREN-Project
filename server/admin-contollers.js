const User=require('./models/user-model')
const getAllUsers=async(req,res)=>{
 try {
    const users=await User.find();//find method is used to get the users data that is present on the User collection
    if(!users || users.length===0){
      return res.status(404).json({message:"no users found"});
    }
    res.status(200).json(users);
 } catch (error) {
    next(error);
 }
}
module.exports=getAllUsers;