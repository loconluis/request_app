//Archivo de manejo en JavaScript

//Punto de conexion con Sockets
var socket = io.connect('http://localhost:3000', {forceNew: true});

socket.on('connect', function() {
    socket.emit('req-update');
});

socket.on('req-push', function(req, username){
    
});

socket.on('req-open', function(){
    //Recorrido
});

function sendRequest(){
    var username = document.getElementById('userame').value;
    var email = document.getElementById('email').value;
    var  req = document.getElementById('request').value;

    socket.emit('req-send', username, email, req);
};