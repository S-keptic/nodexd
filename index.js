import http from "http"
import { pokemon,chimchar,bulbasaur } from "./package.js"
import {lovePercent} from "./lovePercent.js"
import fs from 'fs'
console.log(lovePercent())
console.log(pokemon,chimchar,bulbasaur)







const server = http.createServer((req,res)=>{
    if(req.url==='/about'){
        res.end("about page")
    }
    else if(req.url==='/contact'){
        res.end("contact page")
    }
    else if(req.url==='/'){
        
            fs.readFile('index.html',(err,data)=>{
                res.end(data)
            })

    }
    else if (req.url==='/love'){
        res.end(`love percentage is ${lovePercent()}%`)
    }
    else if(req.url==='/info'){
        res.end("info page")
    }
    else{
        res.end("no page found")
    }
})

 
server.listen(5000,()=>{
    console.log("server is up on port 5000")
})