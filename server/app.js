import express from 'express';
import path from 'path';
import http from 'http';
import socket from 'socket.io';
import Player from './models/player';

const app = express();
const server = http.Server(app);
const io = socket(server);
const port = process.env.PORT || 4000;

server.listen(port, () => {
    console.log(`App now listening on port ${port}`);
});

io.on('connection', function (socket) {
    Player.onConnect(io, socket);

    socket.on('disconnect', function () {
        Player.onDisconnect(io, socket);
    });
});
