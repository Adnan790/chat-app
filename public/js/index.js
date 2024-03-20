var socket = io();
socket.on('connect', function() {
    console.log('connected to server');

    socket.emit('createMsg', {
        from: 'Adnan',
        to: 'Yep it works fro me..'
    });


})

socket.on('disconnect', function() {
    console.log('disconnected to server...')
})

socket.on('newMsg', function(message) {
    console.log('new Msg:', message)
})