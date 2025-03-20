import { createContext, useContext, useEffect, useState } from "react";
export const AuthContext=createContext();
//children refer to main.jsx
export const AuthProvider=({children})=>{
    const [token,setToken]=useState(localStorage.getItem('token'));
    const [user,setUser]=useState("");
    const [services,setServices]=useState([]);
    const storeTokenInLS=(serverToken)=>{
        setToken(serverToken);
         localStorage.setItem('token',serverToken);
    };
    // tacking the logout functionality
    const LogoutUser=()=>{
        setToken("");
        localStorage.removeItem('token');
        //  isLoggedIn=false;
    }
    let isLoggedIn= !!token;//return true and false value.
    console.log('logged in',isLoggedIn);
    //JWT Authentication-to get the currently logged in user's data
    const userAuthentication = async()=>{
        try {
            const response =await fetch("http://localhost:3000/api/auth/user",{
                method:"GET",
                headers:{
                    Authorization:`Bearer ${token}`,
                },  
            });
            console.log("response",response);
            if(response.ok){
                const data=await response.json();
                console.log("user data",data.userData);
                setUser(data.userData);
            }
        } catch (error) {
            console.log(error,"Error fatching user data");
        }
    }
// to fetch data from service collection in database.
const getServices=async()=>{
    try {
        const response=await fetch("http://localhost:3000/api/data/service",{
            method:"GET",
        });
        if(response.ok){
            const data= await response.json();
            console.log("data form service page",data.msg);
            setServices(data.msg);
        }
    } catch (error) {
        console.log(`services frontend error:${error}`);
    }
}

    console.log(token);
    useEffect(()=>{
        getServices();
        userAuthentication();
    },[]);

return (
<AuthContext.Provider value={{isLoggedIn,storeTokenInLS,LogoutUser,user,services}}>
    {children}
</AuthContext.Provider>
);
}
export const useAuth=()=>{
    return useContext(AuthContext);
}
