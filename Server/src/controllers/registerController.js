const Users = require('../models/users')
const bcrypt = require('bcrypt');
const saltRounds = 10;


const Register=()=>async(req, res) => {
    // console.log(req.body)
  
      try{
        const registeredData=await Users.findOne({email:req.body.email})
        if(registeredData){
          res.json({
            msg:"username is already taken"
          })
        } 
        else{
          const salt = bcrypt.genSaltSync(saltRounds);
          const hash = bcrypt.hashSync(req.body.password, salt);
          if(hash){
              req.body.password = hash
             const data = await Users.create(req.body)
             if(data){
               res.json({msg: 'user is registered'})
             }else{
               res.json({msg: 'something went wrong'})
             }
          }
  
        }
      }
  
      catch(err){
          console.log(err)
      }
  
  }

  exports.Register=Register