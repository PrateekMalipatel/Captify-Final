<script>
	import { auth } from "../../lib/firebase/firebase.client";
	import { authStore, authHandlers } from "../../stores/authStore";
	import logo_white from "../../assets/images/logo-white.svg";
	import { onMount } from "svelte";
	import { setContext } from "svelte";
	/**
	 * @type {any}
	 */
	let email;
	authStore.subscribe((/** @type {{ currentUser: { email: any; }; }} */ curr) => {
		console.log("CURR", curr);
		email = curr?.currentUser?.email;
	});
	const nonAuthroutes = ["/privateProfile"];
	onMount(() => {
		console.log("Mounting");
		const unsubscribe = auth.onAuthStateChanged(async (user) => {
			const currentPath = window.location.pathname;

			if (!user) {
				console.log("redirecting");
				window.location.href = "/";
			}
		});
	});
	async function handleSubmit() {
		console.log("checking for login");
		if ($authStore.currentUser) {
			try {
				await authHandlers.logout();
				console.log("logging out of profile");
			} catch (err) {
				console.log(err);
			}
		}
	}
</script>

<div class="flex h-full justify-center items-center">
	<div class="flex gap-4">
		<div
			class="bg-[#2B3148] flex flex-col w-2/5 rounded-lg shadow items-start justify-between p-10"
		>
			<img
				src={logo_white}
				alt=""
				srcset=""
				class="w-64 hover:transform hover:scale-110 hover:-rotate-6 transition"
			/>
			<form class="login-form">
				<button
					type="submit"
					class="bg-indigo-500 text-xl text-white p-1 px-4 mt-4 rounded hover:bg-indigo-700 transition"
					>Edit profile</button
				>
				<button
					on:click={handleSubmit}
					type="submit"
					class="bg-indigo-500 text-xl text-white p-1 px-4 mt-6 rounded hover:bg-indigo-700 transition"
					>Logout</button
				>
			</form>
		</div>
		<div class="bg-white max-w-2xl shadow overflow-hidden sm:rounded-lg border-2">
			<div class="px-4 py-5 sm:px-6">
				<h3 class="text-lg leading-6 font-medium text-gray-900">User database</h3>
				<p class="mt-1 max-w-2xl text-sm text-gray-500">Details and informations about user.</p>
			</div>
			<div class="border-t border-gray-200">
				<div>
					<div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
						<dt class="text-sm font-medium text-gray-500">Full name</dt>
						<dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">Praanjal Wason</dd>
					</div>
					<div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
						<dt class="text-sm font-medium text-gray-500">Skills</dt>
						<dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
							Svelte-Kit, Cloud Computing
						</dd>
					</div>
					<div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
						<dt class="text-sm font-medium text-gray-500">Email address</dt>
						<dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
							praanjalwason@gmail.com
						</dd>
					</div>
					<div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
						<dt class="text-sm font-medium text-gray-500">Mobile number</dt>
						<dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">+91 9493639499</dd>
					</div>
					<div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
						<dt class="text-sm font-medium text-gray-500">Address</dt>
						<dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
							Bennett University, greater noida, delhi
						</dd>
					</div>
					<div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
						<dt class="text-sm font-medium text-gray-500">Salary</dt>
						<dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">$10,000</dd>
					</div>
					<div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
						<dt class="text-sm font-medium text-gray-500">About</dt>
						<dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
							To get social media testimonials like these, keep your customers engaged with your
							social media accounts by posting regularly yourself
						</dd>
					</div>
					<div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
						<dt class="text-sm font-medium text-gray-500">Education</dt>
						<dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
							<p>1. Bennett University: Cloud Computing</p>
							<p>2. Ecole International: upto 12th</p>
						</dd>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
