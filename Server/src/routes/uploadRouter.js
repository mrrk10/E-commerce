const { Router } = require('express');
const app = Router();

const Uploads = require('../models/product')

app.post('/upload',async(req,res)=>{
    console.log(req.body)
    try {
    const data=await Uploads.create(req.body)
    if(data){
        res.json({msg:'data uploaded'})
    }
    else{
        res.json({msg:'something went wrong'})
    }

        
    } catch (error) {
        
    }


})

app.get('/upload/:name',async(req,res)=>{
    // console.log(req.body)
    try {
    const data=await Uploads.find({name:req.params.name})
    return res.json(data)
   
    

        
    } catch (error) {
        console.log(error)
        
    }


})



app.get('/upload',async(req,res)=>{
    const data= await Uploads.find()
    // console.log(data)
    if(data){
     res.json({
         UploadData:data
     }) 
    }
    else{
     res.json({msg:'something went wrong'})
    }
 })
module.exports=app