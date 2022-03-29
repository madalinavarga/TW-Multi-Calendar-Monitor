//entry point to app

var http = require('http'); //import 
var fs = require('fs');
var { login } = require('./routes/loginRoutes');
var { register } = require('./routes/registerRoutes');

//create a server object:
http.createServer((req, res) => {
    console.log(req.method, req.url);
    switch (req.url) {
        case "/login":
        case "/public/layout.css":
        case "/public/login.css":
            login(req, res);
            break;

        case "/register":
        case "/public/register.js":
            register(req, res);
            break;

        default:
            res.write('page not found!'); //write a response to the client
    }
    res.end(); //end the response
}).listen(4000, () => { console.log("Server listens on port 4000...") }); //the server object listens on port 4000