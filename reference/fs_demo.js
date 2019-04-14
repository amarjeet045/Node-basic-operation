//https://github.com/amarjeet045/Node-basic-operation.git
const fs = require('fs');
const path = require ('path');

//creating folder using fs using ES5 syntax
/*
fs.mkdir(path.join(__dirname, '/test'),{},function(err){
    if(err) throw err;
    console.log('folder created');
});
*/
//using Arrow function 
/*
fs.mkdir(path.join(__dirname, '/tests'),{},err=>{
    if(err) throw err;
    console.log('folder created');
});
*/

//create and write to the file and append
/*
fs.writeFile(path.join(__dirname, '/tests','hello.text'),'Hello world',err=>{
    if(err) throw err;
    console.log('file created');

    fs.appendFile(path.join(__dirname, '/tests','hello.text'), 'i love node ',err=>{
        if(err) throw err;
        console.log('file created');
    })

});
*/

//Read file
fs.readFile(path.join(__dirname, '/tests','hello.text'),'utf8',(err,data) =>{
    if(err) throw err;
    console.log(data);
});
