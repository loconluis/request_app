var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

//Model de la peticion
var Request = require('./models/request').Request;

//Uso de archivos estaticos
app.use(express.static('public'));

//Vistas a renderizar
app.set('view engine', 'ejs');

//Nodo Raiz
app.get('/', function(req, res) {
    res.render('index');
});

//Servidor de sockets
io.on('connection', function(){
    console.log('Usuario conectado');
    
});






//Puerto donde se escucha el servidor
server.listen(3000, function() {
    console.log("Server is running in http://localhost:3000/ ");
});