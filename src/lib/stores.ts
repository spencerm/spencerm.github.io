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
	//todo: move bugs creation here
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

function createLifespanCount() {
	const { subscribe, set, update } = writable(5000);

	return {
		subscribe,
		increment: () => update(n => n + 250),
		decrement: () => update(n => n - 250),
		reset: () => set(5000)
	};
}

export const lifespanCount = createLifespanCount();

function createKillsCount() {
	const { subscribe, set, update } = writable(0);

	return {
		subscribe,
		increment: () => update(n => n + 1),
		decrement: () => update(n => n - 1),
		reset: () => set(0)
	};
}

export const killCount = createKillsCount();