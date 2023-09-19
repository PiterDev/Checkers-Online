import { Server } from 'socket.io';

/**
 * @param {{ httpServer: Partial<import("socket.io").ServerOptions> | undefined; }} server
 */
export function run(server) {
	const io = new Server(server.httpServer);

	io.on('connect', (socket) => {
		socket.emit('eventFromServer', 'Connected!');

		socket.on('move', (move) => {
			console.log('Move: ' + move);
			io.emit('move', {
				user: socket.id.substring(0, 2),
				move: move
			});
		});
	});
}
