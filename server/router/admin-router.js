const express=require('express');
const router=express.Router();
const getAllUsers=require('../admin-contollers')
router.route("/users").get(getAllUsers);
module.exports=router;