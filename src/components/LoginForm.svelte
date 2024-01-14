<script>
	import { user } from '../store/user.js'; // Importing the user store

	let username = '';
	let pin = '';
	let loginError = '';

	async function handleLogin() {
		try {
			await user.login(username, pin);
			// Redirect to the home page or dashboard upon successful login
			// This might involve setting a user session or navigating to a new route
		} catch (error) {
			loginError = 'Invalid username or PIN.';
		}
	}
</script>

<form on:submit|preventDefault={handleLogin}>
	<input type="text" placeholder="Username" bind:value={username} />
	<input type="password" placeholder="PIN" bind:value={pin} />
	<button type="submit">Login</button>
	{#if loginError}
		<p class="error">{loginError}</p>
	{/if}
</form>
