//router is used so when we click on frontend route so it will get this path.

const express=require('express');
const router=express.Router();
const services=require('../service-controler');
router.route('/service').get(services);
module.exports=router;