var socket = io();
socket.on('connect', function() {
    console.log('connected to server');



})

socket.on('disconnect', function() {
    console.log('disconnected to server...')
})

socket.on('newMsg', function(message) {
    console.log('new Msg:', message)
    var li = jQuery('<li></li>');
    li.text(`${message.from}: ${message.text}`);
    jQuery('#messages').append(li);
})


jQuery('#message-form').on('submit', function(e) {
    e.preventDefault();
    socket.emit('createMsg', {
        from: 'User',
        text: jQuery('[name=message]').val()
    }, function() {

    });

})