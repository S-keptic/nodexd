import http from "https"
import { pokemon,chimchar,bulbasaur } from "./package.js"
console.log(pokemon,chimchar,bulbasaur)
const server = http.createServer((req,res)=>{
    if(req.url==='/about'){
        res.end("about page")
    }
    else if(req.url==='/contact'){
        res.end("contact page")
    }
    else if(req.url==='/'){
        res.end("home page")
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