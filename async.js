const request = require('request');

const test = () => {
  request('http://www.google.com',function (error, response, body){
      console.log('response');
  });
}
//START OF PROGRAM
console.log("Hitting google");
test();
console.log("Some other work");
