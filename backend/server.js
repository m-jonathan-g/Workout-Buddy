require('dotenv').config()

const express = require('express')
const workoutRoutes = require('./Routes/workouts')
const mongoose = require('mongoose')

const app = express()

//middleware
app.use(express.json())
 
app.use((req, res,  next)=> {
    console.log(req.path, req.method)
    next()
}) 
 
//router
app.use('/api/workouts', workoutRoutes)

//connect to db
mongoose.connect(process.env.MONGO_URI)
   .then( ()=>{
    app.listen(process.env.PORT, ()=> {
        console.log('connected to database & listening on port', process.env.PORT);
    })
   })
   .catch( (error)=> {
    console.log(error);
   })


