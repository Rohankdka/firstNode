import express from "express";
import dotenv from "dotenv";
import db from "./db.js";
import createRouter from "./routers/createRoute.js"
import deleteRouter from "./routers/deleteRoute.js"
import readRouter from "./routers/readRoute.js"
import updateRouter from "./routers/updateRoute.js"
import registerRouter from "./routers/registerRoute.js";
import loginRouter from "./routers/loginRoute.js";

dotenv.config()

const app = express();

app.use(express.json())

app.use('/',createRouter)
app.use('/', deleteRouter)
app.use('/', readRouter)
app.use('/', updateRouter)
app.use('/',registerRouter)
app.use('/',loginRouter)


app.get("/",(req,res)=>{
    res.send("get function")
})

// app.post("/",(req,res)=>{
//     const user = req.body
//     //descructuring the data of req.body
//     const {Name,address}=req.body
//     console.log(Name)
//     console.log(address)
//     console.log(user)
//     return res.json(user)
// })


const PORT = process.env.PORT

app.listen(PORT, (req,res)=>{
    console.log(`server is running on port ${PORT}`);
})