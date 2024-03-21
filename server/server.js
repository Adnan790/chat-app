const express = require('express');
const path = require('path');
const http = require('http');
const socketIo = require('socket.io')
const generateMsg = require('./utils/messsage')

const publicPath = path.join(__dirname, '../public');
const port = 3000;
const app = express();
var server = http.createServer(app)
io = socketIo(server);


app.use(express.static(publicPath));


io.on('connection', (socket) => {
    console.log('new user is connected..');
    socket.emit('newMsg', generateMsg('Admin', 'welcome to chat app'));

    socket.broadcast.emit('newMsg', generateMsg('Admin', 'New User Has joined'));

    socket.on('createMsg', (message, callback) => {
        console.log('create Msg:', message)
        io.emit('newMsg', generateMsg(message.from, message.text));
        callback('this is from ther server');
        // socket.broadcast.emit('newMsg', {
        //     from: message.from,
        //     text: message.text,
        //     createdAt: new Date().getTime()
        // })
    })

    socket.on('disconnect', () => {
        console.log('User was disconnected')
    })
});

server.listen(port, () => {
    console.log(`Server is upto on port ${port}`);
});