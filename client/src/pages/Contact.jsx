import { useState } from "react";
import { Footer } from "./Footer";
import { useAuth } from "../store/auth";
export const Contact =()=>{

    const defaultContactFormData={
        username:"",
        email:"",
        message:"",
    };
    const [contact,setContact]=useState(defaultContactFormData);

    const [userData,setUserData]=useState(true);
    const {user} =useAuth();
     
    if(userData && user){
        setContact({
            username:user.username,
            email:user.email,
            message:"",
       });
        setUserData(false);
    }
    const handleChange=(e)=>{
        let name=e.target.name;
        let value=e.target.value;
        setContact({
            ...contact,
            [name]:value,
        })
    }
    const handleSubmit=async(e)=>{
        e.preventDefault(0);
        //connect frontend with backend.
        try {
           const response=await fetch("http://localhost:3000/api/form/contact",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(contact),
           });
           if(response.ok){
            setContact(defaultContactFormData);
            const data= await response.json();
            console.log(data);
            alert("Message send successfully");
           }
        } catch (error) {
            console.log(error);
        } 
        // alert(contact);
    }

    return(
        <>
        <section className="section-contact">
         <div className="container grid grid-two-cols">
            <div className="contact">
                <h1>Contact Us</h1>
                <div className="heading">
                </div>
                <img src="/images/support.png" alt="contact page" height="400" width="400"/>
            </div>
            <form className="form-contact"onSubmit={handleSubmit}>
         <div className="second-section">
            <div>
           <label htmlFor="username">Enter username</label>
           <input type="text" name="username" id="username"value={contact.username} onChange={handleChange} required autoComplete="off"/>
            </div>
            <div>
            <label htmlFor="email">Enter Email_id</label>
            <input type="email" name="email" id="email" value={contact.email} onChange={handleChange}required autoComplete="off"/>
            </div>
         <div>
            <label htmlFor="message">Enter your useful thought</label>
            <textarea name="message" value={contact.message} cols="30" rows="10" onChange={handleChange}required autoComplete="off"/>
         </div>
         <button className="sub"type="submit">Submit</button>
         </div>
            </form>
         </div>
         <section className="">
         <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3444.6843162873383!2d77.
         // 99375959999999!3d30.3030474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.
         // 1!3m3!1m2!1s0x39092b005fc82e71%3A0x84fa4bc56708dac6!2sGovt%20Polytechnic%20Dehradun!5e0!3m2!1sen!2sin!4v1735311116448!5m2!1sen!2sin"
          width="100%" height="450" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade " ></iframe>
         </section>
        </section>
        <Footer/>
        </>
    )
}