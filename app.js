//Creacion del servidor con express
var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

//Modelo de la peticion
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
io.sockets.on('connection', function(){
    console.log('Usuario conectado');


    //Envio de Mensaje
    socket.on('req-send', function(username, email, req){
        socket.emit('req-push', req, username);
        socket.broadcast.emit('req-ṕush', req, username);
        //Se agrega a la base de Datos
        var peticion = new Request();
        peticion.author = username;
        peticion.message = req;
        peticion.email = email;
        peticion.date = new Date();
        peticion.save(function(err){
                if(err){console.log(err);}
        })
    });

    //Se desconecto usuario
    socket.on('disconnect', function(){
        console.log('Se desconecto usario');
    })


});






//Puerto donde se escucha el servidor
server.listen(3000, function() {
    console.log("Server is running in http://localhost:3000/ ");
});