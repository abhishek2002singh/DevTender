const express = require('express');
require("dotenv").config();
const app = express();
const dbConnect = require('./config/database');
const cookieParser = require('cookie-parser')

const PORT = process.env.PORT || 3000;
const path = require('path')

const _dirname = path.resolve();

const cors = require('cors');
const corsOptions ={
    origin:'http://localhost:5173', 
    credentials:true,            //access-control-allow-credentials:true
  
}
app.use(cors(corsOptions));
app.use(express.json())
app.use(cookieParser())


//routes
const authRouth = require('./routes/auth')
const profileRouter = require('./routes/profile')
const requestRouter = require('./routes/request');
const userRouter = require('./routes/user');


app.use('/' ,authRouth)
app.use('/' ,profileRouter)
app.use('/' ,requestRouter)
app.use('/',userRouter)





dbConnect().then(() => {
    console.log('Connection successful');
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
      });
}).catch(err => {
    console.error('Database connection failed:', err);
});


//yadavajjet05(user)  cHuG5KUCLr0ynu2G(password)


 