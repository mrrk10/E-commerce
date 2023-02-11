const Users = require('../models/users')
const bcrypt = require('bcrypt');



const Login=()=>{
    async(req, res) => {
        try{
        const data = await Users.findOne({email: req.body.email})
        if(data){
            const {password} = data
            const isValidPassword = bcrypt.compareSync(req.body.password, password)
            if(isValidPassword){
                res.json({
                    msg: 'login success',
                    userDetails:data
                })
            }else{
                res.json({
                    msg: 'password did not match'
                })
            }
        }else{
            res.json({
                msg: 'invalid credentials'
            })
        }
     
    
        }catch(err){
            console.log(err)
        }
    }

}
// old method
module.exports=Login

// new method
// exports.Login=Login