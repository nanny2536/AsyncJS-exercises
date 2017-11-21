const fs = require('fs');

const readFromFile = (fileName,callback)=>{
  // WRITE CODE HERE
//return fs.readFileSync(fileName,"utf-8")
 return fs.readFile(fileName,'utf8',(err, data) => {
    if (err) callback (err);
    callback(data);
    // console.log(data);
  });
};
console.log('START');
readFromFile('sample.txt',(data)=>{
    console.log(data);
    console.log('END');
    
});


