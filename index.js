import express from "express";
import dotenv from "dotenv";
dotenv.config()

const app = express();

app.use(express.json())


app.get("/",(req,res)=>{
    res.send("hello world")
})

app.post("/",(req,res)=>{
    const user = req.body
    //descructuring the data of req.body
    const {Name,address}=req.body
    console.log(Name)
    console.log(address)
    console.log(user)
    return res.json(user)
})

const PORT = process.env.PORT

app.listen(PORT, (req,res)=>{
    console.log("server is running on port ${PORT}")
})