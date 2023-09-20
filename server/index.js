import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';

import { handler } from '../build/handler.js';
import { run } from 'game.js';

const port = 3000;
const app = express();
const server = createServer(app);

run();
// const io = new Server(server);

// io.on('connection', (socket) => {
// 	socket.emit('eventFromServer', 'Hello, World! From the server');
// });

app.use(handler);
server.listen(port);
