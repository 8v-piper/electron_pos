<script>
	import { user } from '../store/user.js'; // Importing the user store
	import { goto } from '$app/navigation'; // Import for navigation

	let username = '';
	let pin = '';
	let loginError = '';

	async function handleLogin() {
		console.log('Attempting login with:', username, pin);
		try {
			await user.login(username, pin);
			// Redirect to the home page or dashboard upon successful login
			// This might involve setting a user session or navigating to a new route
			goto('/');
		} catch (error) {
			loginError = 'Invalid username or PIN.';
		}
	}
</script>

<div class=" variant-gradient-primary-secondary flex items-center justify-center p-[1.5rem]">
	<form on:submit|preventDefault={handleLogin}>
		<div class="card-body card-hover flex h-[40rem] w-[25rem] flex-col items-center shadow-lg">
			<header class="h2 card-header">Login</header>
			<input
				class="input mb-[1.5rem] mt-[1.5rem] w-[20rem] p-[1rem]"
				type="text"
				placeholder="Username"
				bind:value={username}
			/>
			<input
				class="input mb-[1.5rem] mt-[1.5rem] w-[20rem] p-[1rem]"
				type="password"
				placeholder="PIN"
				bind:value={pin}
			/>
			<div flex justify-center>
				<button type="submit" class="variant-filled btn btn-lg">Login</button>
			</div>
			{#if loginError}
				<p class="error">{loginError}</p>
			{/if}
		</div>
	</form>
</div>
