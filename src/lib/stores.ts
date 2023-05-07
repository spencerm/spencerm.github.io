import { writable } from 'svelte/store';

function createLanesCount() {
	const { subscribe, set, update } = writable<number>(0);

	return {
		subscribe,
		increment: () => update(n => n + 1),
		decrement: () => update(n => n - 1),
		reset: () => set(6)
	};
}

export const lanesCount = createLanesCount();

function createBugsCount() {
	const { subscribe, set, update } = writable(30);

	return {
		subscribe,
		increment: () => update(n => n + 1),
		decrement: () => update(n => n - 1),
		reset: () => set(30)
	};
}

export const bugsCount = createBugsCount();

function createGameLength() {
	const { subscribe, set, update } = writable(0);

	return {
		subscribe,
		increment: () => update(n => n + 1000 * 30),
		decrement: () => update(n => n - 1000 * 30),
		reset: () => set(1000 * 60 * 8) // 8 minutes
	};
}

export const gameLength = createGameLength();
