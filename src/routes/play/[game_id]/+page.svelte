<script lang="ts">
	import { page } from '$app/stores';
	import { io } from 'socket.io-client';

	const socket = io();

	socket.on('eventFromServer', (message) => {
		console.log(message);
	});

	socket.on('move', (moveData) => {
		console.log(`${moveData.user} moved to ${moveData.move}`);
	});

	function sendMove(move) {
		socket.emit('move', move);
	}
</script>

<h1>Game {$page.params['game_id']}</h1>

<button
	on:click={() => {
		sendMove('test Move');
	}}>Send Info To Server</button
>
