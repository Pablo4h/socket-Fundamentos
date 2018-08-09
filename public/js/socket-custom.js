var socket = io();
//escuchar informacion
socket.on('connect', function() {
    console.log('Conectado al servidor');
});
socket.on('disconnect', function() {
    console.log('Perdimos conexión con el servidor');
});
//enviar información
socket.emit('enviarMensaje', {
    usuario: 'Pablo',
    mensaje: 'Hola Mundo'
}, function(resp) {
    console.log('Respuestar server', resp);
});
//Escuchando informacion
socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor: ', mensaje);
})