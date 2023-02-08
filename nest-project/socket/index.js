var express = require('express');
var app = express();
var server = require('http').createServer(app);
const httpServer = require("http-server")


app.use(express.static(__dirname + '/node_modules'));
options = {
    cors: true,
    origins: ["http://127.0.0.1:11111"],
}

const io = require('socket.io')(server, options);
const loop = 1;
io.on('connection', (socket) => {
    console.log(`⚡: ${socket.id} user just connected!`);
    socket.on('disconnect', () => {
        console.log('🔥: A user disconnected');
    });
    socket.on('message', (data) => {
        console.log(data);
        io.emit('messageResponse', "hi from server automatic response");
    });
});


app.get('/', function (req, res, next) {
    res.sendFile(__dirname + '/src/index.html');
});




server.listen(11111);
