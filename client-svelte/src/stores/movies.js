import { writable } from 'svelte/store'

export const movies = writable([])
export const lastSearch = writable('')
