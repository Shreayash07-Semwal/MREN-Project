const express=require('express');
const router=express.Router();
const contactForm=require('../contact-controler');
router.route("/contact").post(contactForm);
