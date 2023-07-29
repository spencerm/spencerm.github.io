import type { ComponentType, SvelteComponentTyped } from 'svelte';

export type Status = 'new' | 'paused' | 'active' | 'complete';

export type Component<T> = {
	component: ComponentType<SvelteComponentTyped<{ record: T }>>;
}

export interface Bug {
	key: string;
	laneIndex: number;
	color: string;
	value: string;
	delay: number;
	lifespan: number;
	isTapable: boolean;
	isMovesUp: boolean;
}
