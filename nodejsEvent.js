const EventEmitter = require('events');


const myEmitter = new EventEmitter();
myEmitter.on('water', () => {
  console.log('turn of moter!');
  setTimeout(() => {
    console.log("Turn off please")
  }, 3000);
});

console.log("Script Runnig");
myEmitter.emit('water');
console.log("Script Runnig....");

myEmitter.on("add",(e) =>{
  console.log(e);
  console.log(e.age);
  console.log(e.name);
});

myEmitter.emit('add',{age:1,name:"raju"});
