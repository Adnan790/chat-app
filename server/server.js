const express = require('express');
const path = require('path');
const http = require('http');
const socketIo = require('socket.io')

const publicPath = path.join(__dirname, '../public');
const port = 3000;
const app = express();
var server = http.createServer(app)
io = socketIo(server);


app.use(express.static(publicPath));


io.on('connection', (socket) => {
    console.log('new user is connected..');

    socket.on('disconnect', () => {
        console.log('User was disconnected')
    })
});

server.listen(port, () => {
    console.log(`Server is upto on port ${port}`);
});