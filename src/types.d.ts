import type { ComponentType, SvelteComponentTyped } from 'svelte';

export type Status = 'new' | 'paused' | 'active' | 'complete';

export type Component<T> = {
	component: ComponentType<SvelteComponentTyped<{ record: T }>>;
}

export interface IPlayChit {
	key: string;
	status: Status;
	value: number;
	color: string;
	hasOrientationDown?: boolean;
}

export interface ITimeInfo {
	ms: number;
	secs: number;
	mins: number;
	hrs?: number;
	days?: number;
}

export interface Bug {
	key: string;
	laneIndex: number;
	color: string;
	value: string;
	delay: number;
	lifespan: number;
	isTapable: false;
	isMovesUp: true;
}