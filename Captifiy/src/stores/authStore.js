import { writable } from 'svelte/store';
import { auth } from "../lib/firebase/firebase.client";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';

/**
 * @type {any}
 */
export const authStore = writable({
    isLoading: true,
    currentUser: null
})

export const authHandlers = ({
    login: async(/** @type {string} */ email, /** @type {string} */ password) => {
        await signInWithEmailAndPassword(auth, email, password)
    },
    signup: async (/** @type {string} */ email, /** @type {string} */ password) => {
        await createUserWithEmailAndPassword(auth,email,password)
    },
    logout: async () => {
        await signOut(auth)
    },
})