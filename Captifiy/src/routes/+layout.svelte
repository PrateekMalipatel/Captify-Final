<script>
	import "../app.css";
	import Navbar from "../components/navbar.svelte";
	import { onMount } from "svelte";
	import { auth } from "../lib/firebase/firebase.client";
	import { authStore } from "../stores/authStore";
	const unsubscribe = auth.onAuthStateChanged((user) => {
		authStore.update((/** @type {any} */ curr) => {
			return { ...curr, isLoading: false, currentUser: user };
		});
	});
</script>

<div class="flex flex-col h-screen">
	<Navbar />
	<div class="flex flex-col flex-grow">
		<slot />
	</div>
</div>
