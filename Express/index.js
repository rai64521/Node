const express = require("express")

const app = express()

app.get("/",(req,res)=>{
    res.send("Hello Express")
})

const port = 3010

app.listen(port,()=>{
    console.log(`Server is Listen on port: ${port} `);
    
})