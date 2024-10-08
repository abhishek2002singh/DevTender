const express = require('express');
require("dotenv").config();
const app = express();
const dbConnect = require('./config/database');
const cookieParser = require('cookie-parser')
const corse = require('cors')
const port = process.env.PORT || 3000;


//add middleware from express
app.use(corse({
    origin: "https://devtender-frontend.onrender.com",
    credentials:true,
}));
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
    app.listen(port, () => {
        console.log('Code is running on port 3000');
    });
}).catch(err => {
    console.error('Database connection failed:', err);
});


//yadavajjet05(user)  cHuG5KUCLr0ynu2G(password)


 