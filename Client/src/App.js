import React,{useEffect} from "react";
import './App.css';
import Login from "./containers/Auth/login";
import Register from "./containers/Auth/register";
import {Route,Routes, useNavigate } from "react-router-dom";
import UploadData from "../../Client/src/containers/Home/upload";
const App = ()=> {
  const navigate=useNavigate();
  useEffect(() => {
  const isLogin=  JSON.parse(localStorage.getItem('user'))
  if(!isLogin){
    navigate("/")
  }
  
    
  }, [])
  
  return (
    
      <Routes>
     <Route exact path="/" element={<Login/>} />
      <Route exact path="/register" element={<Register/>}/>
      <Route exact path="/upload" element={<UploadData/>}/>
    </Routes>
   
    
  
    

  
     
    
  )
}

export default App;
