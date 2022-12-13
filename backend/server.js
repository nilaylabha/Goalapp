const express=require ('express')
const dotenv=require('dotenv').config()
const port =process.env.PORT || 5000
const {errorHandler}=require("./middlewar/errorMiddlewar")

const app=express()

app.use(express.json())
app.use(express.urlencoded({extended : false}))

app.use('/api/goals', require('./routes/goalRoutes.js'))
// app.use(errorHandler)

app.listen(port,()=>{
    console.log(`Server is runnig on ${port}`)
})
