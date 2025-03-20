require("dotenv").config();
const express =require('express');
const cors=require('cors');
const app=express();
const authRouter=require('./router/auth-router');
const connectDB=require('./utils/Database');
const errorMiddleware = require("./middlewares/error-middleware");
const contactRouter=require('../server/contact-controler')
const serviceRoute=require('./router/service-router');
const adminRoute=require('./router/admin-router');
//mount the router:To use the router in your main express app.you can 'mount' it at a specific URL prefix.

const corsOptions={
 origin:"http://localhost:5173",
 methods:"GET,POST,PUT,DELETE,PATCH,HEAD",
 credentials:true,
}

app.use(cors(corsOptions));
app.use(express.json());//middleware(it is used to handle json data)
app.use('/api/auth',authRouter);
app.use('/api/form',contactRouter);
app.use('/api/data',serviceRoute);
app.use('/api/admin',adminRoute);
app.use(errorMiddleware);
// app.get("/",(req,res)=>{
//  res.status(200).send("welcome back");
// });
// app.get("/register",(req,res)=>{
//     res.status(200).send("this is the registeration page");
//    });

   const PORT=3000;
   connectDB().then(()=>{
       app.listen(PORT,()=>{
        console.log("server is running",{PORT});
        });
    })