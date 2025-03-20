// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import {Home} from './pages/Home'
import {Contact} from './pages/Contact'
import {About} from './pages/About';
import { Registration } from './pages/Registration';
import { Login } from './pages/Login';
import { Service } from './pages/Service';
import {Navbar} from './component/Navbar'
import {Error} from './pages/Error';
import { Logout } from './pages/Logout';
function App() {
  return(
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/service" element={<Service/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/Registration" element={<Registration/>}/>
      <Route path="/logout" element={<Logout/>}/>
      <Route path="*" element={<Error/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
