const os = require('os');

// to know the platform u are using
console.log(os.platform());

//cpu arch

console.log(os.arch());

//cpu core files
console.log(os.cpus());

//free memory
console.log(os.freemem());

//tottal memory
console.log(os.totalmem());

//home directory

console.log(os.homedir());

console.log(os.uptime());
