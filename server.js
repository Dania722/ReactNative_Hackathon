require('dotenv').config();
const express = require ('express');
const app = express() ; 
const cors = require ('cors')
const connection = require ('./config/db.js')
const userRouter = require('./router/userRouter')
const authRouter = require ("./router/authRouter.js")

//middle ware 
app.use(express.json());
app.use(cors());


//database connection 
connection () ; 

//routes 
app.use("/user" , userRouter) ;
app.use("/api/auth" , authRouter);


const port = process.env.PORT || 8000 ; 
app.listen (port , () => console.log (`Server is running on port ${port}`))  

