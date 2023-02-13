const mongoose = require('mongoose')
const { Schema } = mongoose;

const uploadSchema = new Schema({
  // name: {type:String, required: true},
  // captions: {type:String, required: true},
  title:{
    type:String,
    required:[true],
    trim:true
},
category:{
  type:String,
  required:[true],
  trim:true
},
price:{
    type:Number,
    required:true,
    maxlength:[8],
    default:100
},
description:{
    type:String,
    required:true,
    default:"test"
},
image:{
    type:String,
    required:true
   
}

 
    
  },
  {collection:'products'});  

module.exports= mongoose.model('Products', uploadSchema);

