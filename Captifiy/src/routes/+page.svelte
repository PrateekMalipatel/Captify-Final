<script>
	import man from "../assets/images/man.png";
	import { authStore, authHandlers } from "../stores/authStore";
	async function handleSubmit() {
		console.log("trying to login");
		if ($authStore.currentUser) {
			try {
				await authHandlers.logout();
				console.log("succesful");
			} catch (err) {
				console.log(err);
			}
		}
	}
</script>

<main class="flex w-full justify-center h-full">
	<div class="hero-cta w-full flex flex-col justify-center items-center">
		<div class="ml-52">
			<h1 class="text-8xl font-black text-indigo-500">Skill Scout</h1>
			<p class="w-[600px] text-3xl mt-8 text-justify">
				A scouting software providing you with internships as well as certifications and training of
				your personal favorite skill
			</p>
			{#if $authStore.currentUser}
				<p class="w-[600px] text-3xl mt-8 text-justify">Welcome to Skill-Scout. Check out...</p>
				<div class="mt-12 flex">
					<a
						href="/privateProfile"
						class="bg-indigo-500 text-2xl text-white p-2 px-10 rounded hover:bg-indigo-700 transition"
						>Profile</a
					>

					<button
						on:click={handleSubmit}
						class="bg-white text-2xl mx-36 text-indigo-700 border-2 border-indigo-700 p-2 px-10 rounded hover:bg-slate-200 transition"
						>Logout</button
					>
				</div>
			{:else}
				<div class="mt-12 flex">
					<a
						href="/login"
						class="bg-indigo-500 text-2xl text-white p-2 px-10 rounded hover:bg-indigo-700 transition"
						>Login</a
					>

					<a
						href="/signup"
						class="bg-white text-2xl mx-36 text-indigo-700 border-2 border-indigo-700 p-2 px-10 rounded hover:bg-slate-200 transition"
						>Sign-up</a
					>
				</div>
			{/if}
		</div>
	</div>
	<div class="hero-image w-full justify-end overflow-hidden">
		<div
			class="circle h-full bg-indigo-500 rounded-full scale-125 translate-x-[50%] -translate-y-14"
		/>
		<img src={man} alt="" srcset="" class="absolute top-10 right-20 h-[95%] z-50" />
	</div>
</main>

<style>
</style>
