// src/store.ts
import { writable } from 'svelte/store';

export const userName = writable('なまえ?');
export const showLogin = writable(false);
