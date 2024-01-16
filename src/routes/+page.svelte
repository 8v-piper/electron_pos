<script>
	// Import stores and components
	// import ProductList from '../components/ProductList.svelte';

	import { user } from '../store/user.js';
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';

	onMount(() => {
		user.subscribe(($user) => {
			if (!$user.isLoggedIn) {
				goto('/login');
			}
		});
	});
</script>

<main>
	<h1>Welcome to the POS System</h1>
	<!-- Components for popular products, search, and registration shortcut -->
	<!-- <ProductList /> -->
</main>
