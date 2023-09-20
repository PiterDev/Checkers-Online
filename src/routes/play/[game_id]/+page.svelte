<script lang="ts">
	import { page } from '$app/stores';
	import { io } from 'socket.io-client';

	const socket = io();
	let game_id = $page.params['game_id'];

	socket.emit('joinRoom', game_id);

	socket.on('logFromServer', (message) => {
		console.log(message);
	});

	socket.on('move', (moveData) => {
		console.log(`${moveData.user} moved to ${moveData.move}`);
	});

	function sendMove(move) {
		socket.emit('move', move);
	}
</script>

<h1>Game {game_id}</h1>

<button
	on:click={() => {
		sendMove('test Move');
	}}>Send Info To Server</button
>
