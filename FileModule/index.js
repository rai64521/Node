const fs = require("fs")

fs.writeFileSync("./sk.txt","Hello I am Sumant Rai")       // Sync 

fs.writeFile("./rai.txt","i am rai",(err)=>{})            // Async


const res = fs.readFileSync("./contacts.txt","utf-8")

console.log(res);

fs.readFile("./contact.txt","utf-8",(err,result)=>{
    console.log(result);
    
})


fs.appendFileSync("./append.txt",`\n I want to append Date: ${Date.now()}`)

fs.appendFile("./appennd.txt",`\n i want to append async Date: ${Date.now()}`,(err)=>{

})

// if you want to copy the file one to another then use copy in nodejs

fs.copyFileSync("./rai.txt","./copy.txt" )

// If you want to delete the file use unlink to delete 



