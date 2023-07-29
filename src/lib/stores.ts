import { writable } from 'svelte/store';

function createLanesCount() {
	const { subscribe, set, update } = writable<number>(7);

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
	const { subscribe, set, update } = writable(180000);

	return {
		subscribe,
		increment: () => update(n => n + 1000 * 30),
		decrement: () => update(n => n - 1000 * 30),
		reset: () => set(1000 * 60 * 3) // 3 minutes
	};
}

export const gameLength = createGameLength();

function createWavesCount() {
	const { subscribe, set, update } = writable(7);

	return {
		subscribe,
		increment: () => update(n => n + 1),
		decrement: () => update(n => n - 1),
		reset: () => set(7)
	};
}

export const waveCount = createWavesCount();