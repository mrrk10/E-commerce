import React,{useEffect,useState} from "react";
import './upload.css';
// import axios from 'axios';


// {/*sending data from front end to backend*/}
const UploadData=()=>{
    const[postData,setPostData]=useState('')
    const[userUpload,setUserUpload]=useState([])   
    const handleUp =()=>{
      console.log("upclick")
    }

    // const handleLogout=()=>{
    //   localStorage.clear()
      
    // }

    const requestOptions = {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({captions:postData})  //{/*htttp request ko body ma json data send gareko and schema ko value dec eutaihunu parxa*/}
    };

    
    const handlePostSubmit=async(req,res)=>{
           const response= await fetch('http://localhost:5000/upload',requestOptions)
           const data=await response.json()

           showData() 
           setPostData('')
        
    }

    // const userData=async(req,res)=>{
    // //  axfetch('http://localhost:5000/upload/',requestOptions)
    // axios.post(`http://localhost:5000/upload/${name}`)

    // }

    const showData=async(req,res)=>{
      const response=await  fetch('http://localhost:5000/upload')
      const data=await response.json()
      setUserUpload(data.UploadData)

    }
    useEffect(()=>{
      showData()
      
   },[])


    return(
        <>
       
        {userUpload.length>0 && userUpload.map((item,id)=>{
            return(
            <h1>{item.captions}</h1>

          

            )
})}
      
      
      <div className="postInput">
        <input type="text" value={postData} onChange={(e)=>setPostData(e.target.value)} />   
        <button onClick={()=>handlePostSubmit()}>Upolad</button> 
        {/* <button style={{margin:20}} onClick={()=>handleLogout()}>Log out</button> */}

          {/*upolad button press garda postuser() function call hunxa jasle 
        fetc() gareko netwrok call garxa*/}



        </div>
        </>

        
    )
}

export default UploadData