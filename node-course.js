//Node.js Event Modules
const events = require("events");
const {
    __esModule
} = require(".");
const eventEmitter = new events.EventEmitter();

//create an event handler
var myEventHandler = function () {
    console.log('this is an event!');
}

//memberikan handler terhadap event
eventEmitter.on('myEvent', myEventHandler);

//calling myEvent
eventEmitter.emit('myEvent');
//end of Node.js Event Modules

//Node.js HTTP Modules
// const http = require("http");

// const server = http.createServer((req, res) => {
//     res.write(JSON.stringify({
//         hello: "world"
//     }));
//     res.end();
// });

// server.listen(5000, () => {
//     console.log("run on port 5000");
// })
//end of Node.js HTTP Modules

//Node.js Local Modules
function sum(a, b) {
    return a + b;
}

//export module
module.exports = sum;
//end of Node.js Local Modules