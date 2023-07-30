import { get } from 'svelte/store';
import type { Bug } from "../types";
import { bugsCount, lanesCount, lifespanCount } from '../lib/stores.js';

export const generateBugs = () => {
	const config = {
        lifespan: <number> get(lifespanCount),
        totalLanes: <number> get(lanesCount),
        totalBugs: <number> get(bugsCount),
    };
	let bugsIncrement: number = 0;
	let bugs: Array<Bug> = [];
	let moveUp = false; // ensure even distribution of bugs moving up and down
	const percentOfBugsToSkip = .25;
	const totalWaves = Math.ceil((1 + percentOfBugsToSkip) * config.totalBugs / config.totalLanes) + 1;

	for (let wave = 1; wave <= totalWaves; wave++) {
		for (let lane = 1; lane <= config.totalLanes; lane++) {
			if (Math.random() >= percentOfBugsToSkip){
				bugsIncrement++
				if (bugsIncrement > config.totalBugs) continue;
				let lifespan = config.lifespan * getRandomInt(1, 4);
				bugs.push({
					key: wave.toString() + lane.toString(),
					laneIndex: lane - 1,
					delay: (wave - 1) * config.lifespan + getRandomInt(1, wave * config.lifespan),
					color: Math.random() >= .5 ? "FireBrick" : "Indigo",
					value: wave.toString() + "." + lane.toString(),
					lifespan: lifespan,
					isTapable: false,
					isMovesUp: moveUp
				})
				moveUp = !moveUp
			}
		}
	}
	return bugs;
}

/**
 * Randomly shuffle array *in-place*
 * @param array Array to shuffle
 */
export const shuffleArr = (array: Array<any>) => {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]];
	}
};

/**
 * Split up an array into chunks
 * @param array The input array to chunk
 * @param chunkSize The size of each chunk to split by
 * @param allowUnequal If not true, this will throw an error if you try to chunk by a size, where the input is not evenly divisible by it
 */
export const chunkArr = (
	array: Array<any>,
	chunkSize: number,
	allowUnequal = false
) => {
	if (array.length % chunkSize && !allowUnequal) {
		throw new Error(`Your array is not evenly chunkable by ${chunkSize}`);
	}

	const res: Array<Array<any>> = [];
	let pointer = 0;
	while (pointer < array.length) {
		res.push(array.slice(pointer, pointer + chunkSize));
		pointer = pointer + chunkSize;
	}

	return res;
};

/**
 * Join values together by space. Great for CSS names
 * @param array Elements to join
 */
export const spaceJoin = (array: any[]): string => {
	return array
		.map((e) => {
			try {
				return e.toString();
			} catch (e) {
				return '';
			}
		})
		.filter((x) => x !== '')
		.join(' ');
};

// https://cheatsheets.joshuatz.com/snippets/js/
export const msToParts = (e: number) => {
	return {
		days: Math.floor(e / 864e5),
		hrs: Math.floor((e % 864e5) / 36e5),
		mins: Math.floor(((e % 864e5) % 36e5) / 6e4),
		secs: Math.floor((((e % 864e5) % 36e5) % 6e4) / 1e3),
		ms: Math.floor((((e % 864e5) % 36e5) % 6e4) % 1e3),
	};
};

export const leftPad = (
	input: number | string,
	length: number,
	padWith: string
) => {
	let out = input.toString();
	while (out.length < length) {
		out = padWith + out;
	}
	return out;
};

export const delay = (delayMs: number): Promise<void> => {
	return new Promise((res) => {
		setTimeout(res, delayMs);
	});
};

export const getRandomInt = (min: number, max: number) => {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min)) + min;
};
