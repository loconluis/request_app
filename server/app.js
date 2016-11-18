var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

app.use(express.static('public'));


//servidor de sockets







//Puerto donde se escucha el servidor
server.listen(3000, function() {
    console.log("Server is running in http://localhost:3000/ ");
});