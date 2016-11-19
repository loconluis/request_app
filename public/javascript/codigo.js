//Funcion que se carga mientras se carga la pagina
$(function(){
    var $username  = $('#username');
    var $req = $('#request');
    var $email = $('#email');
    var $reqboard = $('#board');



    var socket = io.connect('http://localhost:3000', {forceNew: true})


    socket.on('connect', function(){
        socket.emit('req-update');
    });

    //Funcion de enviar peticion
    function sendRequest() {
        var req = $req.val();
        var user = $username.val();
        socket.emit('req-send', req, user);
    };

    //Mostrar peticion, y agregar a la base de datos
    socket.on('req-push', function(req, user, email){
        $reqboard.prepend('<div class="col s12 m2 l2"><div class="card-panel grey lighten-4"><span class="white-text">'+req+'</span><br><span>'+user+'</span></div></div>')
    });

    //Busquedad en la base de datos
    socket.on('req-open', function(req){

    });

    //Evento del boton de enviar
    $('#enviar').click(function(){
        sendRequest();
    });

});