import { Server } from 'socket.io';

/**
 * @param {{ httpServer: Partial<import("socket.io").ServerOptions> | undefined; }} server
 */
export function run(server) {
	const io = new Server(server.httpServer);

	io.on('connection', (socket) => {
		socket.emit('logFromServer', 'Connected to game socket...');

		socket.on('joinRoom', (room_id) => {
			let clientsInRoom = io.sockets.adapter.rooms.get(room_id)?.size;
			if (clientsInRoom == undefined) clientsInRoom = 0;

			if (clientsInRoom < 2) {
				socket.emit('logFromServer', `Connection accepted! Players: ${clientsInRoom}`);
				socket.join(room_id);
				console.log(`Room ${room_id} Joined!`);
			} else {
				socket.emit('logFromServer', `Connection refused! Too many players!`);
			}
			// TODO: Room Full Response
		});

		socket.on('move', (move) => {
			let rooms = Array.from(socket.rooms);
			let room_id = rooms[1];
			console.log('Move: ' + move + 'In: ' + room_id);
			console.log(socket.rooms);
			io.to(room_id).emit('move', {
				user: socket.id.substring(0, 2),
				move: move
			});
		});
	});
}
