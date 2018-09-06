var http = require('http');
// Define The Port Number of Server
var port = 3000;
//LinkUp With Custom Module by Specified Folder and File name 
var customModule = require('./employees');
//Create a function With 2parameters and Descrive the type of Server Content
var responseServer = function(request, response){
    response.writeHead(200, {'content-type':'text/html'});
	//Display a Html Text Like Printf or echo
    response.write("<h1>This is NodeJs Custom Module Setup Task</h1>");
	//Display Data from CustomModule Which i was link avobe its like a varibale 
    response.write(customModule.employeeName);
	//Display Data from CustomModule Which i was link avobe its like a function 
    customModule.myFunc();
    response.end();
};
//call the function which store within a variable
var server = http.createServer(responseServer);
//call the port number which store within a variable
server.listen(port);
//Write a Message for Display The Port Number of Server Which given into the project Within the variavle ot var port
console.log("Your Server is Working on Port no:" +port);


