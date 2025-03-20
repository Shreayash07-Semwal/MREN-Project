
//zod is a package that is used to vaildate the data that is provided by the user is in currect form or not.
const {z}=require('zod');

const loginSchema=z.object({
  email:z.string({
    required_error:"Email must be required"
  }).trim()
  .email({message:"invaild email address"})
  .min(3,{message:"email must be 3 chracters"})
  .max(255,{message:"Email must not be more then 255 characters"}),
  password:z.string({required_error:"Password is required"})
  .trim()
  .min(3,{message:"Password must be 3 chreactor"})
  .max(20,{message:"Password must not be more then 20 characters."})
})
const signupSchema=loginSchema.extend({
    username:z.string({required_error:"Name is required"})
    .trim()
    .min(3,{message:"name must be 3 chreacters"})
    .max(255,{message:"Name must not be more then 255 characters."}),
    phone:z.string({required_error:"Phone no is required"})
    .trim()
    .min(10,{message:"Phone no must be 10 chreacters"})
    .max(20,{message:"Phone no must not be more then 20 characters."}),

 
})
module.exports={signupSchema,loginSchema};