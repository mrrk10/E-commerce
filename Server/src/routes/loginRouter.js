const { Router } = require('express');
const app = Router();
const loginControllers=require('../controllers/loginControllers')    


app.post('/login', loginControllers)


module.exports = app;