import express from "express";
const app = express()

app.get("/",(req,res)=>{
    res.status(201).render("index.ejs",{name:"anmol",age:18})
})

app.listen(5000,()=>{
    console.log("server running on port 5000")
})