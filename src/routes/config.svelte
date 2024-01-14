<script>
	import { user } from '../store/user.js';
	import cashDrawer from '../utils/cashDrawer.js';

	let currentUser;
	user.subscribe((u) => (currentUser = u));

	let drawerType = 'rj11'; // default type

	// Function to save the configuration
	async function saveConfig() {
		await cashDrawer.saveConfig(drawerType);
		// Handle saving config, possibly updating a local file or sending to a server
	}

	async function loadConfig() {
		await cashDrawer.loadConfig();
		// Set the drawerType based on the loaded configuration
	}

	onMount(() => {
		loadConfig();
	});

	// Redirect or hide content if the user is not admin or support
	$: if (currentUser.role !== 'admin' && currentUser.role !== 'support') {
		// Redirect or show an error message
	}
</script>

{#if currentUser.role === 'admin' || currentUser.role === 'support'}
	<form on:submit|preventDefault={saveConfig}>
		<label>
			<input type="radio" bind:group={drawerType} value="rj11" /> RJ11 Cash Drawer
		</label>
		<label>
			<input type="radio" bind:group={drawerType} value="usb" /> USB Cash Drawer
		</label>
		<button type="submit">Save Configuration</button>
	</form>
{/if}
