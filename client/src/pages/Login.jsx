import { useState } from "react"
import { Footer } from "./Footer";
import {useAuth} from '../store/auth'
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const URL="http://localhost:3000/api/auth/login";
export const Login=()=>{
    const [user,setUser]=useState({
        email:"",
        password:""
    });
    const handleChange=(e)=>{
        let name=e.target.name;
        let value=e.target.value;
        setUser({
            ...user,
            [name]:value,
        })
    }
    const navigate=useNavigate();
    const {storeTokenInLS}=useAuth();
    const handleSubmit=async(e)=>{
        e.preventDefault();//it is used to handle the default behaviour of web page that it refresh the web page every time when we click on login now.
        // alert(user);
        console.log(user);
        try{
            const response=await fetch(URL,{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify(user),
            });
            const res_data=await response.json();
            console.log("data hello",res_data);
            if(response.ok){
                alert("login successfully!");
                console.log('response from server',res_data);
                 storeTokenInLS(res_data.token);
                //  localStorage.setItem("token",res_data.token);
                setUser({
                    email:"",
                    password:"",
                });
              navigate('/');
              console.log(response);
            }
            else{
                toast.error("invaild email or password", {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                    });
            }
        }
        catch(error){
           console.log('login',error);
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
                                <img src="/images/login.png" alt="login image" height="500" width="500"/>
                            </div>
                        </div>
                            <h1 className="main-heading mb-3">login Form</h1>
                        <div className="second-section">
                            <br />
                            <form onSubmit={handleSubmit}>
                                <div>
                                    <label htmlFor="email">Enter your Email_id</label>
                                    <input type="email" name="email" id="email" value={user.email} onChange={handleChange}required autoComplete="off"/>
                                </div>
                                <div>
                                    <label htmlFor="password">Enter your password</label>
                                    <input type="password" name="password" id="password"  value={user.password} onChange={handleChange}required autoComplete="off"/>
                                </div>
                                <br />
                                <button type="submit" className="btn btn-submit">login Now</button>
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