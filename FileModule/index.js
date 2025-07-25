const fs = require("fs")

fs.writeFileSync("./sk.txt","Hello I am Sumant Rai")       // Sync 

fs.writeFile("./rai.txt","i am rai",(err)=>{})            // Async


const res = fs.readFileSync("./contacts.txt","utf-8")

console.log(res);

fs.readFile("./contact.txt","utf-8",(err,result)=>{
    console.log(result);
    
})

 

