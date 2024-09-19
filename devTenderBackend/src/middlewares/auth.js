 const adminAuth = (req , res , next)=>{
    console.log('admin auth is getting check')
   const token = 'xyz'
   const validate = token ==='xyz'
   if(!validate){
       res.status(401).send('unauthorised request')
   }
   else{
        next();
   }
}

const userAuth = (req , res , next)=>{
    console.log(' auth is getting check')
   const token = 'xyzmp'
   const validate = token ==='xyz'
   if(!validate){
       res.status(401).send('unauthorised request')
   }
   else{
        next();
   }
}

module.exports = {
    adminAuth ,
    userAuth ,
}
