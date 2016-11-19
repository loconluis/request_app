//Archivo de manejo en JavaScript
//Inicializacion de variables



//Punto de conexion con Sockets
var socket = io.connect('http://localhost:3000', {forceNew: true});

socket.on('connect', function() {
    socket.emit('req-update');
});

//Enviar una peticion a la BD
socket.on('req-push', function(req, username){
    let html = `<div class="col s12 m2 l2">
                    <div class="card-panel grey lighten-4">
                       <span class="white-text">${req}</span>
                        <br>
                       <span> >>${username}</span>
                    </div>
                  </div>`;
    document.getElementById('request').innerHTML = html;
});


//Mostrar Peticiones incluidas en la BD
socket.on('req-open', function(req){
    
    //Recorrido
    if(req.length == 0){
        return;
    }else{
        $('#request').empty();
        $.each(req, function(key, value){
            let html = `<div class="col s12 m2 l2">
                    <div class="card-panel grey lighten-4">
                       <span class="white-text">${value.message}</span>
                        <br>
                       <span> >>${value.author}</span>
                    </div>
                  </div>`;
             document.getElementById('request').innerHTML = html;             
        });
    }

});

//Funcion de enviar peticiones VISTA
function sendRequest(){
    let username = document.getElementById('userame').value;
    let email = document.getElementById('email').value;
    let  req = document.getElementById('request').value;
    //Se emite el evento Send al servidor de sockets
    socket.emit('req-send', username, email, req);
};
