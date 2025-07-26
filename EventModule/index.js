const { Domain } = require("domain");
const EventEmitter = require("events")

const emitter = new EventEmitter()


// emitter.on("greet", ()=>{
//     console.log(`Hello Shubhangi`);
    
// })

// emitter.emit("greet")


emitter.on("greet", (anyObj)=>{
    console.log(`Hello ${anyObj.name} your domain is ${anyObj.Domain}`);
    
})

emitter.emit("greet", {name: "Sumant Rai", Domain: "Devloper"})