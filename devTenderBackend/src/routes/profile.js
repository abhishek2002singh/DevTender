const express = require('express')

const profileRouter = express.Router();
const { userAuth } = require('../middlewares/auth');

// user profile
profileRouter.get('/profile',userAuth , async(req , res)=>{

    try{ 
  
        const accessUser = req.accessUser
        res.send(accessUser)
  
    }catch (err) {
      res.status(400).send("Error: " + err.message);
    }
  
   
  })

  module.exports = profileRouter
  