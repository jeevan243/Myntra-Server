const express = require("express")
const connect = require("../config/db")
const cors = require("cors")
require("dotenv").config();

const app = express()
const port = process.env.PORT | 1234

app.use(cors())
app.use(express.json())



app.listen(port, async(req,res)=>{
    try {
        await connect()
        console.log(`connected to ${port}`)
    } catch (error) {
        console.log(error.message);
    }
})
