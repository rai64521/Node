const http = require("http")

const server = http.createServer((req,res)=>{
    res.setHeader("Content-Type","text/html")
    res.end("<h1>Hello World</h1>")
})

const port = 1200

server.listen(port,()=>{
    console.log(`Server is listen on port: ${port}`)
})