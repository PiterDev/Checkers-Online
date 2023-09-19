import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';

import { Server } from 'socket.io';
import { run } from './server/game.js';

export const webSocketServer = {
	name: 'webSocketServer',
	configureServer(server) {
		run(server);
	}
};

export default defineConfig({
	plugins: [sveltekit(), webSocketServer],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});
