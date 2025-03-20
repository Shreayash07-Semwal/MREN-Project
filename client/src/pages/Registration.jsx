import { useState } from "react"
import { Footer } from "./Footer";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";
export const Registration=()=>{
    const [user,setUser]=useState({
        username:"",
        email:"",
        phone:"",
        password:""
    });
    const navigate=useNavigate();
    const {storeTokenInLS}=useAuth();
    //it is used to change the input values
 const handleChange=(e)=>{
 console.log(e);
 let name=e.target.name;
  let value=e.target.value;
  setUser({
    ...user,//...(spread operator) used for containing the same value of previous input .
     [name]:value,//[]this is used to make name which is passed on input tag(attribute not variable) dynamic so it take diffrent values.

  })
 }
    // handling the form submission
    const handleSubmit=async(e)=>{
        e.preventDefault();
        // alert(user);
        // console.log(user); 
        //connecting backend with frontend
        try{

            const response=await fetch(`http://localhost:3000/api/auth/Register`,{
                method:"POST",
                headers:{
                    "Content-Type":"application/json",
                },
                body:JSON.stringify(user),
            });
            
            const res_data=await response.json();
            console.log('response from server',res_data);
            if(response.ok){
                storeTokenInLS(res_data.token);
                // localStorage.setItem("token",res_data);
             setUser({
                username:"",
                email:"",
                phone:"",
                password:"",
             });
             alert("Registration successfully!");
             navigate('/');
            }
            else{
                toast.error(res_data.extraDetails?res_data.extraDetails:res_data.message);
            }
            // console.log(response);
        }
        catch(error){
          console.log("register",error);
        }
    }
    return(
     <>
       <section>
         <main>
            <div className="section-registration">
               <div className="container">
                 <div className="container grid grid-two-cols">
                     <div className="registration-image">
                         <img src="/images/register.png" alt="registration image" width="500" height="500" />
                     </div>
                    <h1 className="main-heading mb-3">registration form</h1>
                 </div>
                 <div className="registration-form ">
                    <br />

                    <form onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="username">Username</label>
                            <input type="text" name="username" id="username" value={user.username} onChange={handleChange} required autoComplete="off" />
                        </div>
                        <div>
                            <label htmlFor="email">Enter your Email</label>
                            <input type="email" name="email" id="email" value={user.email} onChange={handleChange} required autoComplete="off"/>
                        </div>
                        <div>
                            <label htmlFor="phone">Enter your Phone No</label>
                            <input type="number" name="phone" id="phone" value={user.phone} onChange={handleChange}required autoComplete="off"/>
                        </div>
                        <div>
                            <label htmlFor="password">Enter a Password</label>
                            <input type="password" name="password" id="password" value={user.password} onChange={handleChange} required autoComplete="off"/>
                        </div>
                        <br />
                        <button type="submit" className="btn btn-submit">Register Now</button>
                    </form>
                 </div>
               </div>
             </div> 
         </main>
       </section>
       <Footer/>
     </>
    )
 }