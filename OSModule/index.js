const os = require ("os")

console.log("Platform: ", os.platform());
console.log("User: ", os.userInfo());


console.log("CPU Architecture: ", os.arch());

console.log("free Memory: ", os.freemem(), "bytes");

console.log("Total Memory: ",os.totalmem(), "bytes");

console.log("System Uptime: ", os.uptime(), "seconds");

console.log("Home Directory: ", os.homedir());

console.log("Host Name: ", os.hostname());

console.log("Network Interfaces: ", os.networkInterfaces());

console.log("CPU Info: ", os.cpus());

console.log("Temporary Directory: ", os.tmpdir());

console.log("Operating System: ",os.type());

console.log("CPU core: ",os.cpus());

