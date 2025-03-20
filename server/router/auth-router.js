const express=require('express');
const router=express.Router();
const auth_controllers=require('../auth-controler')
const {signupSchema,loginSchema}=require('../Validators/auth-validator');
const vaildate=require('../middlewares/validate-middleware');
const authMiddleware=require('../middlewares/auth-middleware');
// router.get('/',(req,res)=>{
//   res.status(200).send("welcome to the my potfolio");
// });

// another way 
//get is used to get data and post is used to insert data
router.route('/').get(auth_controllers.home);

router.route('/register').post(vaildate(signupSchema),auth_controllers.register);
router.route('/login').post(vaildate(loginSchema),auth_controllers.login);
router.route('/user').get(authMiddleware,auth_controllers.user);
module.exports=router;