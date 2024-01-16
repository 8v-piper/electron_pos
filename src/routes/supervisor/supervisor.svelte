<script>
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
