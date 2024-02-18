// src/store.ts
import { writable } from 'svelte/store';

export const userName = writable('');
export const showLogin = writable(false);
