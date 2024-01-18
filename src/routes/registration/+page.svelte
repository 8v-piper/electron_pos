<script>
	// import { user } from '../../store/customer';
	import CustomerForm from '../../components/CustomerForm.svelte';
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
	<CustomerForm />
</main>
